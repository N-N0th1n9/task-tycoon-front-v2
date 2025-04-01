// type TypeEditor = 'create' | 'edit'

//Если где-то еще понадобиться вынести в shared
export enum QuestionTypeEnum {
  Multi = 'Выбор ответа',
  Detailed = 'Развернутый ответ',
  Matching = 'Сопоставление',
}

export interface QuestionOption {
  title: string
}

export interface QuestionMultiOption extends QuestionOption {
  is_correct: boolean
}

export interface QuestionMatchingOption extends QuestionOption {
  answer: string
}

export interface QuestionBase {
  question_body: string
  order?: number
  // file: null | File
}

export interface MultiQuestion extends QuestionBase {
  type: QuestionTypeEnum.Multi
  content: QuestionMultiOption[]
}

export interface MatchingQuestion extends QuestionBase {
  type: QuestionTypeEnum.Matching
  content: QuestionMatchingOption[]
}

export interface DetailedQuestion extends QuestionBase {
  type: QuestionTypeEnum.Detailed
  content: QuestionOption
}

export type Question = MultiQuestion | MatchingQuestion | DetailedQuestion

export interface MainTaskInfo {
  id: string
  title: string
  description_short: string
  description_full: string
  file?: File | null
}

export interface Task extends MainTaskInfo {
  questions: Question[]
}

// Type guard Multi
export function isMultiQuestion(question: Question): question is MultiQuestion {
  return question.type === QuestionTypeEnum.Multi
}

// Type guard Matching
export function isMatchingQuestion(question: Question): question is MatchingQuestion {
  return question.type === QuestionTypeEnum.Matching
}

// Type guard Detailed
export function isDetailedQuestion(question: Question): question is DetailedQuestion {
  return question.type === QuestionTypeEnum.Detailed
}
