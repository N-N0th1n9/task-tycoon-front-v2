import ArrowCurveLeftRight from '@public/assets/icons/arrow-curve-left-right'
import ArrowLeft from '@public/assets/icons/arrow-left'
import ArrowRight from '@public/assets/icons/arrow-right'
import DefaultTaskPreview from '@public/assets/icons/default-task-preview'
import EditIcon from '@public/assets/icons/edit'
import FileIcon from '@public/assets/icons/file'
import TrashIcon from '@public/assets/icons/trash'
import Link from 'next/link'
import { FC } from 'react'

import { ROUTES } from '@src/shared/navigation/routing-paths'
import Button from '@src/shared/ui/button'

interface IProps {
  taskId: string
}

const TaskHeader: FC<IProps> = ({ taskId }) => {
  return (
    <header className='flex flex-col'>
      <div className='mb-15 flex items-center gap-6'>
        <DefaultTaskPreview />
        <p className='text-2xl font-semibold'>Название задания</p>
      </div>
      <div className='mb-6 flex gap-5'>
        <Button
          className='w-full'
          icon={<ArrowLeft />}
        >
          К группе (Название группы)
        </Button>
        <Button
          className='w-full'
          icon={<ArrowRight />}
        >
          К автору (Иван Иванов)
        </Button>
      </div>
      <div className='flex gap-4 max-[600]:grid max-[600]:grid-cols-2'>
        <Button
          className='w-full'
          color='accent'
          as={Link}
          href={ROUTES.TASK_SOLVING(taskId)}
          icon={<ArrowCurveLeftRight />}
        >
          Начать решение
        </Button>
        <Button
          className='w-full'
          as={Link}
          href={ROUTES.TASK_EDIT(taskId)}
          icon={<EditIcon />}
        >
          Редактировать
        </Button>
        <Button
          className='w-full'
          as={Link}
          href={ROUTES.TASK_STATS(taskId)}
          icon={<FileIcon />}
        >
          Статистика
        </Button>
        <Button
          className='w-full'
          color='danger'
          icon={<TrashIcon />}
        >
          Удалить
        </Button>
      </div>
    </header>
  )
}

export { TaskHeader }
