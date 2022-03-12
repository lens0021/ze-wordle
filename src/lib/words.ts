import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { WRONG_SPOT_MESSAGE, NOT_CONTAINED_MESSAGE } from '../constants/strings'
import { getGuessStatuses } from './statuses'
import { default as GraphemeSplitter } from 'grapheme-splitter'
import { disassemble } from 'hangul-js'
import {
  loadThemedWordsFromLocalStorage,
  loadThemedDateFromLocalStorage,
} from './localStorage'
import { theme } from './theme'

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

export const isWordInWordList = (word: string) => {
  const words = theme ? loadThemedWordsFromLocalStorage() : WORDS
  return (
    // WORDS.includes(localeAwareLowerCase(word)) ||
    disassembledWords(words).includes(localeAwareLowerCase(word)) ||
    // VALID_GUESSES.includes(localeAwareLowerCase(word))
    disassembledWords(VALID_GUESSES).includes(localeAwareLowerCase(word))
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false
  }

  const lettersLeftArray = new Array<string>()
  const guess = guesses[guesses.length - 1]
  const statuses = getGuessStatuses(guess)

  for (let i = 0; i < guess.length; i++) {
    if (statuses[i] === 'correct' || statuses[i] === 'present') {
      lettersLeftArray.push(guess[i])
    }
    if (statuses[i] === 'correct' && word[i] !== guess[i]) {
      return WRONG_SPOT_MESSAGE(guess[i], i + 1)
    }
  }

  // check for the first unused letter, taking duplicate letters
  // into account - see issue #198
  let n
  for (const letter of word) {
    n = lettersLeftArray.indexOf(letter)
    if (n !== -1) {
      lettersLeftArray.splice(n, 1)
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
  }
  return false
}

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word)
}

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length
}

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase()
}

export const getWordOfDay = () => {
  const epochMs = new Date(
    theme ? loadThemedDateFromLocalStorage() : 'March 8, 2022 00:00:00'
  ).valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  const themedWords = theme ? loadThemedWordsFromLocalStorage() : WORDS
  const words = disassembledWords(themedWords)

  return {
    solution: words.length
      ? localeAwareUpperCase(words[index % words.length])
      : '',
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
