import { theme } from './theme'

const gameStateKey = 'gameState'
const highContrastKey = 'highContrast'
const themedTitleKey = 'themedTitle'
const themedDateKey = 'themedDate'
const themedWordsKey = 'themedWords'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(theme + '_' + gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(theme + '_' + gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(theme + '_' + gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(theme + '_' + gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const setStoredIsHighContrastMode = (isHighContrast: boolean) => {
  if (isHighContrast) {
    localStorage.setItem(highContrastKey, '1')
  } else {
    localStorage.removeItem(highContrastKey)
  }
}

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey)
  return highContrast === '1'
}

export const saveThemedTitleToLocalStorage = (themedTitle: string) => {
  localStorage.setItem(theme + '_' + themedTitleKey, themedTitle)
}

export const loadThemedTitleFromLocalStorage = () => {
  const state = localStorage.getItem(theme + '_' + themedTitleKey)
  return state ? state : ''
}

export const saveThemedDateToLocalStorage = (themedDate: string) => {
  localStorage.setItem(theme + '_' + themedDateKey, themedDate)
}

export const loadThemedDateFromLocalStorage = () => {
  const state = localStorage.getItem(theme + '_' + themedDateKey)
  return state ? state : ''
}

export const saveThemedWordsToLocalStorage = (themedWords: string[]) => {
  localStorage.setItem(theme + '_' + themedWordsKey, themedWords.join('\n'))
}

export const loadThemedWordsFromLocalStorage = () => {
  const state = localStorage.getItem(theme + '_' + themedWordsKey)
  return state ? state.split('\n') : []
}

export const removeThemedDataFromLocalStorage = () => {
  localStorage.removeItem(theme + '_' + themedTitleKey)
  localStorage.removeItem(theme + '_' + themedDateKey)
  localStorage.removeItem(theme + '_' + themedWordsKey)
}
