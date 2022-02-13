export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = '결과가 복사되었습니다'
export const ABOUT_GAME_MESSAGE = '이 게임에 대하여'
// Unused in this variant
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = '포켓몬 이름이 아닙니다'
export const CORRECT_WORD_MESSAGE = (solution: string) => `정답은 ${solution}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = '통계'
export const GUESS_DISTRIBUTION_TEXT = '성공 추측 수 분포'
export const NEW_WORD_TEXT = '다음 문제까지'
export const SHARE_TEXT = '공유'
export const TOTAL_TRIES_TEXT = '시도 수'
export const SUCCESS_RATE_TEXT = '성공률'
export const CURRENT_STREAK_TEXT = '현재 연속 성공'
export const BEST_STREAK_TEXT = '최장 연속 성공 기록'
