import {
  MainTaskInfo,
  MatchingQuestion,
  MultiQuestion,
  Question,
  QuestionTypeEnum,
  Task,
} from './types'

export const INITIAL_MAIN_TASK_STATE: MainTaskInfo = {
  id: '1',
  title: '',
  description_short: '',
  description_full: '',
  file: null,
} as const

export const INITIAL_QUESTION_STATE_BASE: Question = {
  question_body: '',
  type: QuestionTypeEnum.Multi,
  content: [],
  order: 1,
  // file: null,
} as const

export const INITIAL_QUESTION_MULTI_STATE: MultiQuestion = {
  ...INITIAL_QUESTION_STATE_BASE,
  type: QuestionTypeEnum.Multi,
  content: [
    {
      title: '',
      is_correct: false,
    },
    {
      title: '',
      is_correct: false,
    },
    {
      title: '',
      is_correct: false,
    },
    {
      title: '',
      is_correct: false,
    },
  ],
} as const

export const INITIAL_QUESTION_MATCHING_STATE: MatchingQuestion = {
  ...INITIAL_QUESTION_STATE_BASE,
  type: QuestionTypeEnum.Matching,
  content: [
    {
      title: '',
      answer: '',
    },
    {
      title: '',
      answer: '',
    },
    {
      title: '',
      answer: '',
    },
    {
      title: '',
      answer: '',
    },
  ],
} as const

export const INITIAL_QUESTION_DETAILED_STATE: Question = {
  ...INITIAL_QUESTION_STATE_BASE,
  type: QuestionTypeEnum.Detailed,
  content: {
    title: '',
  },
} as const

export const INITIAL_QUESTION_LIST_STATE: Question[] = [
  {
    ...INITIAL_QUESTION_MULTI_STATE,
  },
]

export const INITIAL_TASK_STATE: Task = {
  ...INITIAL_MAIN_TASK_STATE,
  questions: [
    {
      ...INITIAL_QUESTION_MULTI_STATE,
    },
  ],
} as const
