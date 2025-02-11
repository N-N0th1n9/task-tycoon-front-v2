'use client'

import Plus from '@public/assets/icons/plus'

import Button from '@src/shared/ui/button'
import { useQuestionsStore } from '@src/widgets/task-editor/model/stores/questions-store'

import QuestionItem from '../../question-item/ui'

const QuestionList = () => {
  const questions = useQuestionsStore.use.questions()
  const addNewQuestion = useQuestionsStore.use.addNewQuestion()

  return (
    <section>
      {questions.map(question => (
        <QuestionItem
          key={question.id}
          question={question}
        />
      ))}
      <Button
        icon={<Plus />}
        className='w-full'
        onClick={() => addNewQuestion()}
      >
        Добавить вопрос
      </Button>
    </section>
  )
}

export { QuestionList }
