import Plus from '@public/assets/icons/plus'
import TrashIcon from '@public/assets/icons/trash'
import { FC } from 'react'

import Button from '@src/shared/ui/button'
import Checkbox from '@src/shared/ui/checkbox'
import InfoBar from '@src/shared/ui/infobar'
import { QuestionOption } from '@src/widgets/task-editor/types'

interface IPropsAnswerMulti {
  questionId?: string
  answers: QuestionOption[]
}

interface IPropsAnswerMultiItem extends Pick<IPropsAnswerMulti, 'questionId'> {
  answer: QuestionOption
  idx: number
  onClick?: () => void
}

const AnswerMulti: FC<IPropsAnswerMulti> = ({ questionId, answers }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        {answers.map((answer, idx) => (
          <AnswerMultiItem
            key={answer.id}
            questionId={questionId}
            answer={answer}
            idx={idx + 1}
          />
        ))}
      </div>
      <Button
        icon={<Plus />}
        className='w-full'
      >
        Добавить вариант
      </Button>
    </div>
  )
}

export default AnswerMulti

const AnswerMultiItem: FC<IPropsAnswerMultiItem> = ({ questionId, answer, idx }) => (
  <InfoBar
    as='input'
    placeholder={`Вариант ${idx}`}
    defaultValue={answer.title}
    item={
      <div className='flex items-center gap-8'>
        <Checkbox
          type='checkbox'
          defaultChecked={answer.is_correct}
          name={`multi-choice-${questionId}`}
        />
        <Button
          icon={<TrashIcon />}
          color='danger'
          border='inline'
          size='xs'
          iconOnly
        ></Button>
      </div>
    }
  />
)
