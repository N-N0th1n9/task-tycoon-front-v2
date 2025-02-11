'use client'

import TrashIcon from '@public/assets/icons/trash'
import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import { AttachFile } from '@src/features/attach-file'
import useDebounce from '@src/shared/hooks/use-debounce'
import Button from '@src/shared/ui/button'
import SelectInput from '@src/shared/ui/select-input'
import Textarea from '@src/shared/ui/textarea'
import { QuestionTypeEnum } from '@src/widgets/task-editor/config'
import { useQuestionsStore } from '@src/widgets/task-editor/model/stores/questions-store'
import { Question, QuestionOption } from '@src/widgets/task-editor/types'

const AnswerDetailed = dynamic(() => import('./answer-detailed'))
const AnswerMatching = dynamic(() => import('./answer-matching'))
const AnswerMulti = dynamic(() => import('./answer-multi'))

interface IProps {
  question: Question
}

const QuestionItem: FC<IProps> = ({ question }) => {
  const deleteQuestion = useQuestionsStore.use.deleteQuestion()
  const setQuestionType = useQuestionsStore.use.setQuestionType()
  const changeQuestionBody = useQuestionsStore.use.changeQuestionBody()

  const [questionBody, setQuestionBody] = useState(question.question_body)

  const debouncedQuestionBody = useDebounce(questionBody, 500)

  useEffect(() => {
    if (debouncedQuestionBody !== question.question_body) {
      changeQuestionBody(question.id, debouncedQuestionBody)
    }
  }, [debouncedQuestionBody, question.id, changeQuestionBody, question.question_body])

  const handleChangeQuestionBody = (value: string) => {
    setQuestionBody(value)
  }

  return (
    <section>
      <div className='mb-8 flex items-center justify-between'>
        <span className='text-xl font-semibold text-black'>Вопрос {question.order}</span>
        <Button
          color='danger'
          icon={<TrashIcon />}
          iconOnly
          onClick={() => deleteQuestion(question.id)}
        />
      </div>
      <div className='flex gap-15'>
        <div className='flex basis-1/2 flex-col gap-6'>
          <Textarea
            label='Задание'
            value={questionBody}
            onChange={e => handleChangeQuestionBody(e.target.value)}
          />
          <SelectInput
            label='Тип'
            options={Object.values(QuestionTypeEnum)}
            onChange={e => setQuestionType(question.id, e.target.value as QuestionTypeEnum)}
          />
          <AttachFile />
        </div>
        <div className='basis-1/2'>
          <AnswerComponent
            type={question.type}
            answers={question.content}
          />
        </div>
      </div>
      <hr className='text-ttLightGray mt-15 mb-20' />
    </section>
  )
}

const AnswerComponent: FC<{ type: QuestionTypeEnum; answers: QuestionOption[] }> = ({
  type,
  answers,
}) => {
  switch (type) {
    case QuestionTypeEnum.Multi:
      return <AnswerMulti answers={answers} />
    case QuestionTypeEnum.Detailed:
      return <AnswerDetailed />
    case QuestionTypeEnum.Matching:
      return <AnswerMatching />
    default:
      return <AnswerMulti answers={answers} />
  }
}

export default QuestionItem
