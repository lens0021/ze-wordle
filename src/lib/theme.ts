import {
  saveThemedTitleToLocalStorage,
  saveThemedDateToLocalStorage,
  saveThemedWordsToLocalStorage,
} from './localStorage'
import { disassembledWords } from './words'

const getTheme = () => {
  if (window.location.pathname) {
    const m = window.location.pathname.match(/^\/(.+)$/)
    if (m && m[1]) {
      return m[1]
    }
  }
  return ''
}

export const extractFromWikitext = (wt: string): [string, string, string[]] => {
  let name, date, words, m

  m = wt.match(/\{\{Ze Wordle\s*(.+)\s*\}\}/s)
  if (!m || !m[1]) {
    throw new Error()
  }
  wt = m[1]
  m = wt.match(/\|name\s*=\s*([^|}]+)/)
  if (m && m[1]) {
    name = m[1].trim()
    saveThemedTitleToLocalStorage(name)
  }
  m = wt.match(/\|date\s*=\s*([^|}]+)/)
  if (m && m[1]) {
    date = m[1].trim()
    saveThemedDateToLocalStorage(date)
  }
  m = wt.match(/\|words\s*=\s*([^|}]+)/)
  if (m && m[1]) {
    words = disassembledWords(m[1].trim().split('\n'))
    saveThemedWordsToLocalStorage(words)
  }
  if (name === undefined || date === undefined || words === undefined) {
    console.log(name, date, words)
    throw new Error()
  }
  return [name, date, words]
}

export const theme = getTheme()
