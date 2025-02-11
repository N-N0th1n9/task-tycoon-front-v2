import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import createSelectors from '@src/shared/helpers/zustand-following-function'

import { INITIAL_QUESTION_STATE, QuestionTypeEnum } from '../../config'
import { Question } from '../../types'

interface QuestionsState {
  questions: Question[]
  addNewQuestion: () => void
  deleteQuestion: (id: string) => void
  setQuestionType: (id: string, type: QuestionTypeEnum) => void
  changeQuestionBody: (id: string, body: string) => void
}

const useQuestionsStoreBase = create<QuestionsState>()(
  devtools(set => ({
    questions: INITIAL_QUESTION_STATE,

    addNewQuestion: () =>
      set(state => ({
        questions: [
          ...state.questions,
          {
            id: Date.now().toString(),
            question_body: '',
            type: QuestionTypeEnum.Multi,
            content: [],
            order: state.questions.length + 1,
            file: null,
          },
        ],
      })),

    deleteQuestion: (id: string) =>
      set(state => ({
        questions: state.questions
          .filter(question => question.id !== id)
          .map((question, index) => ({
            ...question,
            order: index + 1,
          })),
      })),

    setQuestionType: (id: string, type: QuestionTypeEnum) =>
      set(state => ({
        questions: state.questions.map(question =>
          question.id === id ? { ...question, type } : question
        ),
      })),

    changeQuestionBody: (id: string, body: string) =>
      set(state => ({
        questions: state.questions.map(question =>
          question.id === id ? { ...question, question_body: body } : question
        ),
      })),
  }))
)

export const useQuestionsStore = createSelectors(useQuestionsStoreBase)
