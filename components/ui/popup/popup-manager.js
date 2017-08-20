import Vue from 'vue'
import overlayOpt from './overlay'
import { getDOM, getZIndex } from './utils'
const Overlay = Vue.extend(overlayOpt)

const PopupManager = {
  instances: [],
  overlay: false,

  open(instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return
    if (this.instances.length === 0) {
      this.showOverlay(instance.color, instance.opacity, instance.root)
    }
    this.instances.push(instance)
    this.changeOverlayStyle()
    const dom = getDOM(instance.$el)
    dom.style.zIndex = getZIndex()
  },

  close(instance) {
    let index = this.instances.indexOf(instance)
    if (index === -1) return
    Vue.nextTick(() => {
      this.instances.splice(index, 1)
      if (this.instances.length === 0) {
        this.closeOverlay(instance.root)
      }
      this.changeOverlayStyle()
    })
  },

  showOverlay(color, opacity, root) {
    //设置overlay组件基本属性，不设置则为默认值
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    let dom = this.getShowDom(root)
    if (dom == null) {
      alert('错误，请检测root是否配置正确')
      setTimeout(() => {
        this.handlerOverlayClick()
      }, 0)
      return
    }
    if (root === 'body' || root === undefined) {
      overlay.position = 'fixed'
    } else {
      overlay.position = 'static'//默认
    }
    overlay.color = color
    overlay.opacity = opacity
    overlay.onClick = this.handlerOverlayClick.bind(this)
    overlay.$appendTo(dom)
    // body 操作
    this.overflow = dom.style.overflow
    dom.style.overflow = 'hidden'
  },

  getShowDom(root) {
    if (root === 'body' || root === undefined) {
      return document.body
    } else {
      return document.getElementById(root)
    }
  },

  closeOverlay(root) {
    if (!this.overlay) return
    let dom = this.getShowDom(root)
    dom.style.overflow = this.overflow
    let overlay = this.overlay
    this.overlay = null
    overlay.$remove(() => {
      overlay.$destroy()
    })
  },

  changeOverlayStyle() {
    if (!this.overlay || this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    this.overlay.color = instance.color
    this.overlay.opacity = instance.opacity
  },

  handlerOverlayClick() {
    if (this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    if (instance.overlayClick) {
      instance.overlayClick()
    }
  }
}

if (!process.SERVER_BUILD) {
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) { // ESC
      if (PopupManager.instances.length > 0) {
        const topInstance = PopupManager.instances[PopupManager.instances.length - 1]
        if (!topInstance) return
        if (topInstance.escPress) {
          topInstance.escPress()
        }
      }
    }
  })
}

export default PopupManager
