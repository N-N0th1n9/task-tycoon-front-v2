import { z } from 'zod'

import { QuestionTypeEnum } from '../types'

const questionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(QuestionTypeEnum.Multi),
    question_body: z.string().min(1, 'Обязательное поле'),
    order: z.number(),
    content: z.array(
      z.object({
        title: z.string().min(1, 'Обязательное поле'),
        is_correct: z.boolean(),
      })
    ),
    // .min(2, 'Должно быть минимум 2 варианта ответа')
    // .refine(items => items.every(item => item !== null)),
    // .refine(options => options.some(option => option.is_correct), {
    //   message: 'Хотя бы один вариант ответа должен быть правильным',
    // }),
  }),
  z.object({
    type: z.literal('Сопоставление'),
    question_body: z.string().nonempty('Обязательное поле'),
    content: z
      .array(
        z.object({
          title: z.string().nonempty('Обязательное поле'),
          answer: z.string().nonempty('Обязательное поле'),
        })
      )
      .min(1, 'Добавьте хотя бы один вариант для сопоставления'),
  }),
  z.object({
    type: z.literal('Развернутый ответ'),
    question_body: z.string().nonempty('Обязательное поле'),
    content: z.object({
      title: z.string().nonempty('Обязательное поле'),
    }),
  }),
])

export const EditTaskSchema = z.object({
  title: z.string().nonempty('Обязательное поле'),
  description_short: z.string().nonempty('Обязательное поле'),
  description_full: z.string(),
  questions: z.array(questionSchema).min(1, 'Добавьте хотя бы один вопрос'),
})
