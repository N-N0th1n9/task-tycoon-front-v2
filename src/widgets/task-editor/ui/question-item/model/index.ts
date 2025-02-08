import createSelectors from '@/shared/helpers/zustand-following-function'
import { create } from 'zustand'

//Если где-то еще понадобиться вынести в shared
export enum QuestionTypeEnum {
  Multi = 'Выбор ответа',
  Detailed = 'Развернутый ответ',
  Matching = 'Сопоставление',
}

interface IQuestionItemState {
  questionType: QuestionTypeEnum
  setQuestionType: (type: QuestionTypeEnum) => void
}

const useQuestionItemStoreBase = create<IQuestionItemState>()(set => ({
  questionType: QuestionTypeEnum.Multi,
  setQuestionType: type => set({ questionType: type }),
}))

export const useQuestionItemStore = createSelectors(useQuestionItemStoreBase)
