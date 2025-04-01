import DefaultTaskPreviewBig from '@public/assets/icons/default-task-preview-big'
import Image from 'next/image'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { CreateTaskBtn } from '@src/features/create-task-btn'

type IProps = {
  image?: string
  title: string
  type?: string
  onSubmit: () => void
}

const TaskHeader: FC<IProps> = ({ image, title, type = 'Создать задание' }) => {
  const methods = useFormContext()

  return (
    <header className='mb-15 flex items-center justify-between'>
      <div className='flex items-center justify-center gap-6'>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
          />
        ) : (
          <DefaultTaskPreviewBig className='text-ttLightGray' />
        )}
        <h1 className='text-ttLightBlack text-2xl font-semibold'>
          {type} - <span className='text-ttDarkGray font-medium underline'>{title}</span>
        </h1>
      </div>
      <CreateTaskBtn />
    </header>
  )
}

export { TaskHeader }
