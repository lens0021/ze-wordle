export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = '결과가 복사되었습니다'
// export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = '포켓몬 이름이 아닙니다'
export const HARD_MODE_ALERT_MESSAGE =
  '어려운 모드는 시작 전에만 설정할 수 있습니다'
export const HARD_MODE_DESCRIPTION =
  '찾아낸 글자를 다음 추측에서 모두 사용하여야 합니다'
export const HIGH_CONTRAST_MODE_DESCRIPTION = '잘 보이는 색을 씁니다'
export const CORRECT_WORD_MESSAGE = (solution: string) => `정답은 ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess} 문자를 ${position}번 자리에 사용하여야 합니다`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter} 문자가 포함되어야 합니다`
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
