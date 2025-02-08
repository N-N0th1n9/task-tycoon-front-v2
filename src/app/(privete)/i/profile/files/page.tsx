import { AttachFile } from '@/features/attach-file'

const ProfileFilesPage = () => {
  // Позже тоже разбить, когда больше инфы будет
  return (
    <div className='flex w-full flex-col'>
      <AttachFile />
      <AttachFile />
      <AttachFile />
    </div>
  )
}

export default ProfileFilesPage
