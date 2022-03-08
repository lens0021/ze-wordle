import { disassemble } from 'hangul-js'
import { COMMON_NOUNS } from 'pd-korean-noun-list-for-wordles'

const replaceMap: { [key: string]: string } = {
  ㄲ: 'ㄱㄱ',
  ㄸ: 'ㄷㄷ',
  ㅃ: 'ㅂㅂ',
  ㅆ: 'ㅅㅅ',
  ㅉ: 'ㅈㅈ',
  ㅒ: 'ㅑㅣ',
  ㅖ: 'ㅕㅣ',
}

export const disassembledWords = (words: string[]): string[] => {
  return words.map((word) => {
    word = disassemble(word).join('')
    for (let replace in replaceMap) {
      word = word.replace(replace, replaceMap[replace])
    }
    return word
  })
}
export const WORDS = disassembledWords(COMMON_NOUNS)
