// import { produce } from 'immer'
// import { v4 as uuidv4 } from 'uuid'
// import { create } from 'zustand'
// import { devtools } from 'zustand/middleware'

// import createSelectors from '@src/shared/helpers/zustand-following-function'

// import {
//   INITIAL_QUESTION_DETAILED_STATE,
//   INITIAL_QUESTION_LIST_STATE,
//   INITIAL_QUESTION_MATCHING_STATE,
//   INITIAL_QUESTION_MULTI_STATE,
//   QuestionTypeEnum,
// } from '../../config'
// import { MultiQuestion, Question, QuestionMatchingOption, QuestionMultiOption } from '../../types'

// interface QuestionsMetaState {
//   questions: Question[]
//   addNewQuestion: () => void
//   deleteQuestion: (id: string) => void
//   setQuestionType: (id: string, type: QuestionTypeEnum) => void
//   deleteQuestionAnswer: (questionId: string, answerId: string) => void
//   addQuestionAnswer: (questionId: string) => void
// }

// const useQuestionsListStoreBase = create<QuestionsMetaState>()(
//   devtools(set => ({
//     questions: INITIAL_QUESTION_LIST_STATE,

//     addNewQuestion: () =>
//       set(state => ({
//         questions: [
//           ...state.questions,
//           {
//             ...INITIAL_QUESTION_MULTI_STATE,
//             id: uuidv4(),
//             order: state.questions.length + 1,
//             content: INITIAL_QUESTION_MULTI_STATE.content.map(opt => ({
//               ...opt,
//               id: uuidv4(),
//             })),
//           } as MultiQuestion,
//         ],
//       })),

//     deleteQuestion: id =>
//       set(state => ({
//         questions: state.questions
//           .filter(question => question.id !== id)
//           .map((question, index) => ({
//             ...question,
//             order: index + 1,
//           })),
//       })),

//     setQuestionType: (id, type) =>
//       set(
//         produce((state: QuestionsMetaState) => {
//           const question = state.questions.find(q => q.id === id)
//           if (question) {
//             question.type = type

//             switch (type) {
//               case QuestionTypeEnum.Multi:
//                 question.content = INITIAL_QUESTION_MULTI_STATE.content
//                 break

//               case QuestionTypeEnum.Matching:
//                 question.content = INITIAL_QUESTION_MATCHING_STATE.content
//                 break

//               case QuestionTypeEnum.Detailed:
//                 question.content = INITIAL_QUESTION_DETAILED_STATE.content
//                 break

//               default:
//                 break
//             }
//           }
//         })
//       ),

//     deleteQuestionAnswer: (questionId, answerId) =>
//       set(
//         produce((state: QuestionsMetaState) => {
//           const question = state.questions.find(q => q.id === questionId)
//           if (Array.isArray(question?.content) && question?.content.length > 2) {
//             question.content = question.content.filter(answer => answer.id !== answerId) as
//               | QuestionMultiOption[]
//               | QuestionMatchingOption[]
//           }
//         })
//       ),
//     addQuestionAnswer: questionId =>
//       set(
//         produce((state: QuestionsMetaState) => {
//           const question = state.questions.find(q => q.id === questionId)

//           if (!question || !Array.isArray(question.content) || question.content.length >= 10) return

//           switch (question.type) {
//             case QuestionTypeEnum.Multi:
//               question.content.push({
//                 id: uuidv4(),
//                 title: '',
//                 is_correct: false,
//               })
//               break

//             case QuestionTypeEnum.Matching:
//               question.content.push({
//                 id: uuidv4(),
//                 title: '',
//                 answer: '',
//               })
//               break

//             case QuestionTypeEnum.Detailed:
//               break

//             default:
//               break
//           }
//         })
//       ),
//   }))
// )

// export const useQuestionsListStore = createSelectors(useQuestionsListStoreBase)
