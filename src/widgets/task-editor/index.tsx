'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { INITIAL_TASK_STATE } from './config'
import { EditTaskSchema } from './lib/zod'
import { TaskEditorForm } from './ui'

type TaskFormValues = z.infer<typeof EditTaskSchema>

const TaskEditor = () => {
  const methods = useForm<TaskFormValues>({
    defaultValues: INITIAL_TASK_STATE,
    resolver: zodResolver(EditTaskSchema),
    mode: 'onSubmit',
    // shouldFocusError: true,
  })

  return (
    <FormProvider {...methods}>
      <TaskEditorForm />
    </FormProvider>
  )
}

export { TaskEditor }
