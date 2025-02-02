import Button from '@/shared/components/button'
import Tab from '@/shared/components/tab'
import SaveIcon from '@/shared/icons/save'
import DeleteIcon from '@/shared/icons/trash'
import { ReactNode } from 'react'

const ProfileTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center py-15'>
      <div className='flex w-[900px] flex-col items-center justify-center gap-15'>
        <div className='flex w-full flex-col gap-6'>
          <div className='flex w-full'>
            <span className='border-ttLightGray aspect-square h-[100px] w-[100px] rounded-full border-1 border-solid'></span>
            <div className='flex flex-col justify-center gap-2 px-[24px]'>
              <h4>Никнейм</h4>
              <p>Даниил Рыжик</p>
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <Button
              icon={<SaveIcon />}
              className='w-full'
            >
              Сменить пароль
            </Button>
            <Button
              icon={<DeleteIcon />}
              color='danger'
              className='w-full'
            >
              Выйти
            </Button>
          </div>
        </div>
        <div className='flex w-full'>
          <Tab
            name='profiletabs'
            href='./data'
            title='Данные'
          />
          <Tab
            name='profiletabs'
            href='./stats'
            title='Статистика'
          />
          <Tab
            name='profiletabs'
            href='./files'
            title='Мои файлы'
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default ProfileTemplate
