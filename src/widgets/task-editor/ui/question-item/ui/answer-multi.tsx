import Plus from '@public/assets/icons/plus'
import TrashIcon from '@public/assets/icons/trash'
import { FC } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import Button from '@src/shared/ui/button'
import Checkbox from '@src/shared/ui/checkbox'
import InfoBar from '@src/shared/ui/infobar'
import { QuestionMultiOption } from '@src/widgets/task-editor/types'

interface IPropsAnswerMulti {
  // answers: QuestionMultiOption[]
  questionIndex: number
}

interface IFormValues {
  questions: Record<string, { content: QuestionMultiOption[] }>
}

const AnswerMulti: FC<IPropsAnswerMulti> = ({ questionIndex }) => {
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<IFormValues>()

  const {
    fields: answers,
    remove,
    append,
  } = useFieldArray({
    control,
    name: `questions.${questionIndex}.content`,
  })

  const removeAnswer = (idx: number) => {
    if (answers.length <= 2) return
    remove(idx)
  }

  const addAnswer = () => {
    if (answers.length >= 10) return
    append({ title: '', is_correct: false })
  }

  return (
    <div className='flex flex-col gap-6'>
      <div>
        {answers.map((answer, idx) => {
          return (
            <InfoBar
              as='input'
              placeholder={`Вариант ${idx + 1}`}
              defaultValue={answer.title}
              key={answer.id}
              {...register(`questions.${questionIndex}.content.${idx}.title`)}
              error={errors?.questions?.[questionIndex]?.content?.[idx]?.title?.message}
              item={
                <div
                  className='flex items-center gap-8'
                  key={answer.id}
                >
                  <Checkbox
                    type='checkbox'
                    defaultChecked={answer.is_correct}
                    {...register(`questions.${questionIndex}.content.${idx}.is_correct`)}
                  />
                  <Button
                    icon={<TrashIcon />}
                    color='danger'
                    border='inline'
                    size='xs'
                    iconOnly
                    onClick={() => removeAnswer(idx)}
                    disabled={answers.length <= 2}
                  />
                </div>
              }
            />
          )
        })}
      </div>
      <Button
        icon={<Plus />}
        className='w-full'
        onClick={() => addAnswer()}
        disabled={answers.length >= 10}
      >
        Добавить вариант
      </Button>
    </div>
  )
}

export default AnswerMulti
