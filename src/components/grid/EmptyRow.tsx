// import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

type Props = {
  maxWordLength: number
}

export const EmptyRow = ({ maxWordLength }: Props) => {
  const emptyCells = Array.from(Array(maxWordLength))

  return (
    <div className="flex justify-between overflow-x-auto overflow-y-visible mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
