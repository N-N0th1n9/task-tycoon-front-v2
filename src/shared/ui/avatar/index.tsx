import DefaultAvatar from '@/shared/icons/avatar'
import Image from 'next/image'

const Avatar = ({ img }: { img?: string }) => {
  return (
    <span className='border-ttLightGray text-ttGray flex aspect-square h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full border-1 border-solid'>
      {<DefaultAvatar /> || (
        <Image
          src={img!}
          alt='avatar'
          width={100}
          height={100}
        />
      )}
    </span>
  )
}

export default Avatar
