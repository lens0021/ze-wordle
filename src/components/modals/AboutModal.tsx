import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        이 게임은 Wordle의 clone의 변형판의 변형판입니다 -{' '}
        <a
          href="https://github.com/han-dle/pocketmon"
          className="underline font-bold"
        >
          코드는 여기에
        </a>{' '}
        그리고{' '}
        <a href="https://wordles.miraheze.org/" className="underline font-bold">
          워들 허브
        </a>
        에서 더 많은 한국어 워들을 만나보세요
      </p>
    </BaseModal>
  )
}
