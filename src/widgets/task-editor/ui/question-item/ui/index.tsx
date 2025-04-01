'use client'

import TrashIcon from '@public/assets/icons/trash'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { AttachFile } from '@src/features/attach-file'
import Button from '@src/shared/ui/button'
import SelectInput from '@src/shared/ui/select-input'
import Textarea from '@src/shared/ui/textarea'
// import { useTaskForm } from '@src/widgets/task-editor/hooks/use-task-form'
import {
  INITIAL_QUESTION_DETAILED_STATE,
  INITIAL_QUESTION_MATCHING_STATE,
  INITIAL_QUESTION_MULTI_STATE,
} from '@src/widgets/task-editor/config'
import { QuestionTypeEnum, Task } from '@src/widgets/task-editor/types'

const AnswerDetailed = dynamic(() => import('./answer-detailed'))
const AnswerMatching = dynamic(() => import('./answer-matching'))
const AnswerMulti = dynamic(() => import('./answer-multi'))

interface IProps {
  questionIndex: number
}

export const QuestionItem: FC<IProps> = ({ questionIndex }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<Task>()

  const {
    fields: questions,
    remove: removeQuestion,
    update: updateQuestion,
  } = useFieldArray({
    control,
    name: 'questions',
  })

  const {
    fields: answerFields,
    append: appendAnswer,
    remove: removeAnswer,
  } = useFieldArray({
    control,
    name: `questions.${questionIndex}.content`,
  })

  const currentQuestion = questions[questionIndex]

  const changeQuestionType = (newType: QuestionTypeEnum) => {
    switch (newType) {
      case QuestionTypeEnum.Multi:
        updateQuestion(questionIndex, INITIAL_QUESTION_MULTI_STATE)
        break

      case QuestionTypeEnum.Matching:
        updateQuestion(questionIndex, INITIAL_QUESTION_MATCHING_STATE)
        break

      case QuestionTypeEnum.Detailed:
        updateQuestion(questionIndex, INITIAL_QUESTION_DETAILED_STATE)
        break
    }
  }

  return (
    <section>
      <div className='mb-8 flex items-center justify-between'>
        <span className='text-xl font-semibold text-black'>Вопрос {currentQuestion.order}</span>
        <Button
          color='danger'
          icon={<TrashIcon />}
          iconOnly
          onClick={() => removeQuestion(questionIndex)}
          disabled={questions.length <= 1}
        />
      </div>
      <div className='flex gap-15'>
        <div className='flex basis-1/2 flex-col gap-6'>
          <Textarea
            label='Задание'
            defaultValue={currentQuestion.question_body}
            {...register(`questions.${questionIndex}.question_body`)}
            error={errors.questions?.[questionIndex]?.question_body?.message}
          />
          <SelectInput
            label='Тип'
            options={Object.values(QuestionTypeEnum)}
            value={currentQuestion.type}
            onChange={e => changeQuestionType(e.target.value as QuestionTypeEnum)}
          />
          <AttachFile />
        </div>
        <div className='basis-1/2'>
          {currentQuestion.type === QuestionTypeEnum.Multi ? (
            <AnswerMulti questionIndex={questionIndex} />
          ) : currentQuestion.type === QuestionTypeEnum.Detailed ? (
            <AnswerDetailed />
          ) : currentQuestion.type === QuestionTypeEnum.Matching ? (
            <AnswerMatching />
          ) : null}
        </div>
      </div>
      <hr className='text-ttLightGray mt-15 mb-20' />
    </section>
  )
}
