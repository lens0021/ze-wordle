import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="게임 방법" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        6번의 시도 안에 정답을 맞히세요. 정답을 입력할 때마다 각 타일의 색이
        바뀌어 제출한 답안이 얼마나 정답에 가까운지 보여줍니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="correct"
        />
        <Cell value="K" />
        <Cell value="S" />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅎ은 정답에 들어있었고 정확한 자리에 있습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="L" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="present"
        />
        <Cell value="R" />
        <Cell value="L" />
        <Cell />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㄹ은 정답에 들어있지만 자리가 틀렸습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="H" />
        <Cell value="F" />
        <Cell isRevealing={true} isCompleted={true} value="M" status="absent" />
        <Cell value="A" />
        <Cell />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅡ는 정답에 들어있지 않았습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="J" />
        <Cell value="L" />
        <Cell value="R" />
        <Cell value="U" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅖ는 ㅕㅣ와 같이 풀어쓰며 글자수는 가장 긴 경우보다만 짧으면 제출
        가능합니다.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        <a
          type="button"
          href={`https://wordles.miraheze.org/wiki/Special:Login?returnto=Form:Ze_Wordle`}
          className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          내가 원하는 주제로 새 Ze-Wordle 만들기
        </a>
      </p>

      {/*
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
      */}

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
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
          href={`https://github.com/lens0021/ze-wordle`}
          className="underline font-bold"
        >
          여기
        </a>
        에서 코드를 보거나{' '}
        <a href="https://wordles.miraheze.org/" className="underline font-bold">
          워들 허브
        </a>
        에서 더 많은 한국어 워들을 찾을 수 있습니다 -{' '}
        <a
          href={`https://meta.miraheze.org/wiki/Special:MyLanguage/Donate`}
          className="underline font-bold"
        >
          Miraheze에 기부
        </a>
      </p>
    </BaseModal>
  )
}
