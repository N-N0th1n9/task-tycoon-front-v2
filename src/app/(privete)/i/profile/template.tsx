import { ProfileHeader } from '@/widgets/profile-header'
import { ReactNode } from 'react'

const ProfileTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center py-15'>
      <div className='flex w-[900px] flex-col items-center justify-center gap-15'>
        <ProfileHeader />
        {children}
      </div>
    </div>
  )
}

export default ProfileTemplate
