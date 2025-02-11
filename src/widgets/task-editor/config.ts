import { MainTaskInfo, Question } from './types'

//Если где-то еще понадобиться вынести в shared
export enum QuestionTypeEnum {
  Multi = 'Выбор ответа',
  Detailed = 'Развернутый ответ',
  Matching = 'Сопоставление',
}

export const INITIAL_MAIN_TASK_STATE: MainTaskInfo = {
  id: '1',
  title: '',
  description_short: '',
  description_full: '',
  file: null,
}

export const INITIAL_QUESTION_STATE: Question[] = [
  {
    id: '',
    question_body: '',
    type: QuestionTypeEnum.Multi,
    content: [
      {
        id: '1',
        title: 'первый',
        is_correct: false,
      },
      {
        id: '2',
        title: 'второй',
        is_correct: false,
      },
      {
        id: '3',
        title: 'третий',
        is_correct: false,
      },
      {
        id: '4',
        title: 'четвертый',
        is_correct: false,
      },
    ],
    order: 1,
    file: null,
  },
]
