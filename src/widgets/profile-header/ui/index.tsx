import { ChangePasswordButton } from '@src/features/change-password-btn'
import { LogoutButton } from '@src/features/logout-btn'
import Tab from '@src/shared/ui/tab'

import Avatar from '../../../../public/assets/icons/avatar'

const ProfileHeader = () => {
  return (
    <>
      <div className='flex w-full flex-col gap-6'>
        <div className='flex w-full'>
          <Avatar />
          <div className='flex flex-col justify-center gap-2 px-[24px]'>
            <h4>Никнейм</h4>
            <p>Даниил Рыжик</p>
          </div>
        </div>
        <div className='flex w-full gap-4'>
          <ChangePasswordButton />
          <LogoutButton />
        </div>
      </div>
      <div className='flex w-full'>
        <Tab
          href='./data'
          title='Данные'
        />
        <Tab
          href='./stats'
          title='Статистика'
        />
        <Tab
          href='./files'
          title='Мои файлы'
        />
      </div>
    </>
  )
}

export { ProfileHeader }
