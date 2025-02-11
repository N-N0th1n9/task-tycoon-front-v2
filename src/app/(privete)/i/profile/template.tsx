import { ReactNode } from 'react'

import { ProfileHeader } from '@src/widgets/profile-header'

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
