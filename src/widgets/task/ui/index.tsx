import { TaskDataTable } from './data-table'
import { TaskHeader } from './header'

const Task = () => {
  return (
    <section className='mx-auto max-w-[1274px]'>
      <TaskHeader taskId='1' />
      <TaskDataTable />
    </section>
  )
}
export { Task }
