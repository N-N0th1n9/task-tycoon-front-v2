import { CreateQuestionButton } from '@/features/create-question-btn'

import QuestionItem from '../../question-item/ui'

const QuestionList = () => {
  return (
    <section>
      <QuestionItem number={1} />
      <QuestionItem number={2} />
      <QuestionItem number={3} />
      <CreateQuestionButton />
    </section>
  )
}

export { QuestionList }
