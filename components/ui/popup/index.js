import PopupManager from './popup-manager'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    },
    root: {
      type: String,
      default: 'body'
    }
  },
  watch: {
    show (val) {
      if (val && this.overlay) {
        PopupManager.open(this)
      } else {
        PopupManager.close(this)
      }
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
  }
}
