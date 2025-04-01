import { useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { INITIAL_QUESTION_MULTI_STATE } from '../config'
import { EditTaskSchema } from '../lib/zod'

type TaskFormValues = z.infer<typeof EditTaskSchema>

export const useTaskForm = () => {
  const { control } = useFormContext<TaskFormValues>()

  const {
    fields: questions,
    append,
    remove,
    update,
    move,
  } = useFieldArray({
    control,
    name: 'questions',
  })

  const addQuestion = () => {
    append({ ...INITIAL_QUESTION_MULTI_STATE, order: questions.length + 1 })
  }

  return {
    questions,
    addQuestion,
    removeQuestion: remove,
    updateQuestion: update,
    moveQuestion: move,
  }
}

// import { useFieldArray, useFormContext } from 'react-hook-form'
// import { z } from 'zod'

// import { INITIAL_QUESTION_MULTI_STATE } from '../config'
// import { EditTaskSchema } from '../lib/zod'

// type TaskFormValues = z.infer<typeof EditTaskSchema>

// export const useTaskForm = () => {
//   const { control } = useFormContext<TaskFormValues>()

//   const {
//     fields: questions,
//     append,
//     remove,
//     update,
//     move,
//   } = useFieldArray({
//     control,
//     name: 'questions',
//   })

//   const addQuestion = () => {
//     append({ ...INITIAL_QUESTION_MULTI_STATE, order: questions.length + 1 })
//   }

//   // const removeQuestion = useCallback(
//   //   (index: number) => {
//   //     remove(index)
//   //   },
//   //   [remove]
//   // )

//   // const changeQuestionType = useCallback(
//   //   (index: number, newType: QuestionTypeEnum) => {
//   //     const currentQuestion = questions[index]

//   //     switch (newType) {
//   //       case QuestionTypeEnum.Multi:
//   //         update(index, {
//   //           ...currentQuestion,
//   //           type: newType,
//   //           content: Array(4)
//   //             .fill(0)
//   //             .map(() => ({
//   //               id: uuidv4(),
//   //               title: '',
//   //               is_correct: false,
//   //             })),
//   //         } as MultiQuestion)
//   //         break

//   //       case QuestionTypeEnum.Matching:
//   //         update(index, {
//   //           ...currentQuestion,
//   //           type: newType,
//   //           content: Array(4)
//   //             .fill(0)
//   //             .map(() => ({
//   //               id: uuidv4(),
//   //               title: '',
//   //               answer: '',
//   //             })),
//   //         } as MatchingQuestion)
//   //         break

//   //       case QuestionTypeEnum.Detailed:
//   //         update(index, {
//   //           ...currentQuestion,
//   //           type: newType,
//   //           content: { title: '' },
//   //         } as DetailedQuestion)
//   //         break
//   //     }
//   //   },
//   //   [questions, update]
//   // )

//   // // only for Multi and Matching
//   // const addAnswerOption = (questionIndex: number) => {
//   //   const question = questions[questionIndex]

//   //   if (isDetailedQuestion(question)) return

//   //   if (isMultiQuestion(question)) {
//   //     if (question.content.length >= 10) return
//   //     const newOption: QuestionMultiOption = {
//   //       id: uuidv4(),
//   //       title: '',
//   //       is_correct: false,
//   //     }
//   //     update(questionIndex, {
//   //       ...question,
//   //       content: [...question.content, newOption],
//   //     })
//   //     return
//   //   }

//   //   if (isMatchingQuestion(question)) {
//   //     const newOption: QuestionMatchingOption = {
//   //       id: uuidv4(),
//   //       title: '',
//   //       answer: '',
//   //     }
//   //     update(questionIndex, {
//   //       ...question,
//   //       content: [...question.content, newOption],
//   //     })
//   //   }
//   // }

//   // const removeAnswerOption = (questionIndex: number, answerId: string) => {
//   //   const question = questions[questionIndex]

//   //   if (isDetailedQuestion(question)) return
//   //   if (question.content.length <= 2) return

//   //   if (isMultiQuestion(question)) {
//   //     update(questionIndex, {
//   //       ...question,
//   //       content: question.content.filter(opt => opt.id !== answerId),
//   //     } as MultiQuestion)
//   //     return
//   //   }

//   //   if (isMatchingQuestion(question)) {
//   //     update(questionIndex, {
//   //       ...question,
//   //       content: question.content.filter(opt => opt.id !== answerId),
//   //     } as MatchingQuestion)
//   //   }
//   // }

//   //
//   // const moveQuestion = useCallback(
//   //   (from: number, to: number) => {
//   //     move(from, to)
//   //     // Обновляем порядок после перемещения
//   //     questions.forEach((q, idx) => {
//   //       if (q.order !== idx + 1) {
//   //         update(idx, { ...q, order: idx + 1 })
//   //       }
//   //     })
//   //   },
//   //   [move, questions, update]
//   // )

//   return {
//     questions,
//     addQuestion,
//     // removeQuestion,
//     // changeQuestionType,
//     // addAnswerOption,
//     // removeAnswerOption,
//     // moveQuestion,
//   }
// }
