'use client'

import Plus from '@public/assets/icons/plus'
import { FieldError, useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { AttachFile } from '@src/features/attach-file'
import Button from '@src/shared/ui/button'
import Input from '@src/shared/ui/input'
import Textarea from '@src/shared/ui/textarea'

// import { useTaskForm } from '../hooks/use-task-form'
import { useTaskForm } from '../hooks/use-task-form'
import { EditTaskSchema } from '../lib/zod'
import { TaskHeader } from './header'
import { QuestionItem } from './question-item'

const getError = (error?: FieldError): string | undefined => {
  return error?.message
}

type TaskFormValues = z.infer<typeof EditTaskSchema>

const TaskEditorForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext<TaskFormValues>()

  // const { fields: questions, append } = useFieldArray({
  //   control,
  //   name: 'questions',
  // })

  const { questions, addQuestion } = useTaskForm()

  const onSubmit = (data: TaskFormValues) => {
    console.log('Отправлена', data)
  }

  console.log(watch())
  console.log(errors)

  return (
    <form
      className='mx-auto flex max-w-[1274px] flex-col gap-24'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <TaskHeader
          title='Название задания'
          onSubmit={() => {}}
        />
        <section className='flex flex-col gap-4'>
          <Input
            placeholder='Название'
            {...register('title')}
            error={getError(errors.title)}
          />
          <Input
            placeholder='Краткое описание'
            {...register('description_short')}
            error={getError(errors.description_short)}
          />
          <Textarea
            placeholder='Полное описание'
            {...register('description_full')}
            error={getError(errors.description_full)}
          />
          <AttachFile />
        </section>
      </div>
      <section>
        {questions.map((question, idx) => (
          <QuestionItem
            key={question.id}
            questionIndex={idx}
          />
        ))}
        <Button
          type='button'
          icon={<Plus />}
          className='w-full'
          onClick={() => addQuestion()}
        >
          Добавить вопрос
        </Button>
      </section>
    </form>
  )
}

export { TaskEditorForm }
