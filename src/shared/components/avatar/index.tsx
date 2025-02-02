import DefaultAvatar from '@/shared/icons/avatar'

const Avatar = ({ img }: { img?: string }) => {
  return (
    <span className='border-ttLightGray text-ttGray flex aspect-square h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full border-1 border-solid'>
      <DefaultAvatar />
    </span>
  )
}

export default Avatar
