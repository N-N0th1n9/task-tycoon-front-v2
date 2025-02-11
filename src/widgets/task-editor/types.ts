import { QuestionTypeEnum } from './config'

// type TypeEditor = 'create' | 'edit'

export interface QuestionOption {
  id: string
  title: string
  is_correct: boolean
}

export interface Question {
  id: string
  question_body: string
  type: QuestionTypeEnum
  content: QuestionOption[]
  order: number
  file: File | null
}

export interface MainTaskInfo {
  id: string
  title: string
  description_short: string
  description_full: string
  file: File | null
}

export interface Task {
  mainTaskInfo: MainTaskInfo
  questions: Question[]
}

export interface TaskEditorState {
  mainTaskInfo: MainTaskInfo
  questions: Question[]

  addNewQuestion: () => void
  deleteQuestion: (id: string) => void
}
