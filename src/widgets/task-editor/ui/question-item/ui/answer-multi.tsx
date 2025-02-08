import Plus from '@/shared/icons/plus'
import TrashIcon from '@/shared/icons/trash'
import Button from '@/shared/ui/button'
import Checkbox from '@/shared/ui/checkbox'
import InfoBar from '@/shared/ui/infobar'
import { FC } from 'react'

interface IPropsAnswerMulti {
  questionId?: string
}

interface IPropsAnswerMultiItem extends Pick<IPropsAnswerMulti, 'questionId'> {
  onClick?: () => void
}

const AnswerMulti: FC<IPropsAnswerMulti> = ({ questionId }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <AnswerMultiItem questionId={questionId} />
        <AnswerMultiItem questionId={questionId} />
        <AnswerMultiItem questionId={questionId} />
        <AnswerMultiItem questionId={questionId} />
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

const AnswerMultiItem: FC<IPropsAnswerMultiItem> = ({ questionId }) => (
  <InfoBar
    label='Вариант 1'
    as='input'
    item={
      <div className='flex items-center gap-8'>
        <Checkbox
          type='checkbox'
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
