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
        6번의 시도 안에 포켓몬을 맞히세요. 정답을 입력할 때마다 각 타일의 색이
        바뀌어 제출한 답안이 얼마나 정답에 가까운지 보여줍니다.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅖ는 ㅔㅔ와 같이 풀어 쓰고, ㅢ는 ㅡㅣ와 같이 풀어씁니다
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="V"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="S" />
        <Cell value="X" />
        <Cell value="J" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅍ은 정답 포켓몬 이름에 들어있었고 정확한 자리에 있습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="Q" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅣ는 정답 포켓몬 이름에 들어있지만 자리가 틀렸습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="L" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="T" status="absent" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ㅅ은 포켓몬 이름에 들어있지 않았습니다.
      </p>
      <p className="text-sm mt-4 text-gray-500">
        입력할 수 없는 포켓몬(폴리곤2, 폴리곤z)은 출제되지 않으며 '니드런♀',
        '니드런♂', '타입:널'은 특수문자를 뺀 '니드런'과 '타입널'로 취급됩니다.
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

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
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
          href={`https://github.com/${process.env.REACT_APP_VERCEL_GIT_REPO_OWNER}/${process.env.REACT_APP_VERCEL_GIT_REPO_SLUG}`}
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
