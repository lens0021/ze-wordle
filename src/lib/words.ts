import { WORDS } from '../constants/wordlist'

export const isWordInWordList = (word: string) => {
  console.log('isWordInWordList is called, the word is ' + word)

  return WORDS.includes(word.toLowerCase())
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1643113978753
  const now = Date.now()
  const msInDay = 86400000 / 2
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
