import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="정보" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        이 게임은 Wordle의{' '}
        <a href="https://reactle.vercel.app/" className="underline font-bold">
          모사작
        </a>
        의{' '}
        <a
          href="https://nakosung.github.io/wordle/"
          className="underline font-bold"
        >
          변형판
        </a>
        의 변형판입니다 -{' '}
        <a
          href="https://github.com/han-dle/pocketmon"
          className="underline font-bold"
        >
          여기
        </a>
        에서 코드를 보거나{' '}
        <a href="https://wordles.miraheze.org/" className="underline font-bold">
          워들 허브
        </a>
        에서 더 많은 한국어 워들을 찾을 수 있습니다
      </p>
    </BaseModal>
  )
}
