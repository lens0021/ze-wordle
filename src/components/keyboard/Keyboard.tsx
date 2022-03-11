import { alpha_2_kr, getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
import { localeAwareUpperCase } from '../../lib/words'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
  maxWordLength: number
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
  maxWordLength,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(alpha_2_kr[value])
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const _key = localeAwareUpperCase(e.key)
        const key = (alpha_2_kr[_key] && alpha_2_kr[_key]) || _key
        // TODO: check this test if the range works with non-english letters
        if (
          key.length === 1 &&
          /* && key >= 'A' && key <= 'Z' */ key.match(/^[ㄱ-ㅣ]$/)
        ) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
            maxWordLength={maxWordLength}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
            maxWordLength={maxWordLength}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key
          width={65.4}
          value="ENTER"
          onClick={onClick}
          maxWordLength={maxWordLength}
        >
          {ENTER_TEXT}
        </Key>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
            maxWordLength={maxWordLength}
          />
        ))}
        <Key
          width={65.4}
          value="DELETE"
          onClick={onClick}
          maxWordLength={maxWordLength}
        >
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
