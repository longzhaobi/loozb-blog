import markdownIt from 'markdown-it'
import hljs from 'highlightjs'

const markdownOption = {
  html: true,
  breaks: true,
  highlight(str, lang) {
    lang = lang || 'javascript'
    if (hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) { }
    }
    return ''
  }
}
const md = markdownIt(markdownOption)
const safe_md = markdownIt({ ...markdownOption, html: false })

const markdownSafe = (text) => {
  return safe_md.render(text)
}

const markdown = (text) => {
  let result = md.render(text)
  return result
}

export default { markdownSafe, markdown }
