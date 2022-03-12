const gameStateKey = 'gameState'
const highContrastKey = 'highContrast'
const themedNameKey = 'themedName'
const themedWordsKey = 'themedWords'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (
  gameState: StoredGameState,
  theme: string
) => {
  localStorage.setItem(theme + '_' + gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = (theme: string) => {
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

export const saveStatsToLocalStorage = (
  gameStats: GameStats,
  theme: string
) => {
  localStorage.setItem(theme + '_' + gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = (theme: string) => {
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

export const saveThemedNameToLocalStorage = (
  themedName: string,
  theme: string
) => {
  localStorage.setItem(theme + '_' + themedNameKey, themedName)
}

export const loadThemedNameFromLocalStorage = (theme: string) => {
  const state = localStorage.getItem(theme + '_' + themedNameKey)
  return state ? state : ''
}

export const saveThemedWordsToLocalStorage = (
  themedWords: string[],
  theme: string
) => {
  localStorage.setItem(theme + '_' + themedWordsKey, themedWords.join('\n'))
}

export const loadThemedWordsFromLocalStorage = (theme: string) => {
  const state = localStorage.getItem(theme + '_' + themedWordsKey)
  return state ? state.split('\n') : []
}
