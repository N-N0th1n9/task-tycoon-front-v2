import Form from './form'
import { TaskHeader } from './header'
import { QuestionList } from './question-list'

const TaskEditor = () => {
  return (
    <section className='mx-auto flex max-w-[1274px] flex-col gap-24'>
      <div>
        <TaskHeader
          title='Название задания'
          onSubmit={() => {}}
        />
        <Form />
      </div>
      <QuestionList />
    </section>
  )
}

export { TaskEditor }
