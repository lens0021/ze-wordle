import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="K" />
        <Cell value="S" />
        <Cell value="M" />
        <Cell value="F" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ㅎ is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="L" />
        <Cell value="F" status="present" />
        <Cell value="R" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ㄹ is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="H" />
        <Cell value="F" />
        <Cell value="M" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ㅡ is not in the word in any spot.
      </p>
      <p className="text-sm text-gray-500">
        입력할 수 없는 포켓몬(폴리곤2, 폴리곤z)은 출제되지 않으며 '니드런♀',
        '니드런♂', '타입:널'은 특수문자를 뺀 '니드런'과 '타입널'로 취급됩니다.
      </p>
    </BaseModal>
  )
}
