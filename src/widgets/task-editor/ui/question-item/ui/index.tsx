'use client'

import { AttachFile } from '@/features/attach-file'
import TrashIcon from '@/shared/icons/trash'
import Button from '@/shared/ui/button'
import SelectInput from '@/shared/ui/select-input'
import Textarea from '@/shared/ui/textarea'
import dynamic from 'next/dynamic'
import { FC, useMemo } from 'react'

import { QuestionTypeEnum, useQuestionItemStore } from '../model'

const AnswerDetailed = dynamic(() => import('./answer-detailed'))
const AnswerMatching = dynamic(() => import('./answer-matching'))
const AnswerMulti = dynamic(() => import('./answer-multi'))

interface IProps {
  number: number
}

const QuestionItem: FC<IProps> = ({ number }) => {
  const questionType = useQuestionItemStore.use.questionType()
  const setQuestionType = useQuestionItemStore.use.setQuestionType()

  const AnswerComponent = useMemo(() => {
    switch (questionType) {
      case QuestionTypeEnum.Multi:
        return <AnswerMulti />
      case QuestionTypeEnum.Detailed:
        return <AnswerDetailed />
      case QuestionTypeEnum.Matching:
        return <AnswerMatching />
      default:
        return <AnswerMulti />
    }
  }, [questionType])

  return (
    <section>
      <div className='mb-8 flex items-center justify-between'>
        <span className='text-xl font-semibold text-black'>Вопрос {number}</span>
        <Button
          color='danger'
          icon={<TrashIcon />}
          iconOnly
        />
      </div>
      <div className='flex gap-15'>
        <div className='flex basis-1/2 flex-col gap-6'>
          <Textarea label='Задание' />
          <SelectInput
            label='Тип'
            options={Object.values(QuestionTypeEnum)}
            onChange={e => setQuestionType(e.target.value as QuestionTypeEnum)}
          />
          <AttachFile />
        </div>
        <div className='basis-1/2'>{AnswerComponent}</div>
      </div>
      <hr className='text-ttLightGray mt-15 mb-20' />
    </section>
  )
}

export default QuestionItem
