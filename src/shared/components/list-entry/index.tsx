import { FC } from 'react'

interface IProps {
  name: string
  value: string
}

const ListEntry: FC<IProps> = ({ name, value }) => {
  return (
    <div className='border-b-ttLightGray border-b-solid grid h-[50px] w-full grid-cols-2 border-b-[1.5px] last:border-none'>
      <div className='text-ttBlack border-r-ttLightGray border-r-solid flex h-full items-center justify-end border-r-[1.5px] px-[18px]'>
        {name}
      </div>
      <div className='text-ttLightBlack flex items-center justify-start px-[18px]'>{value}</div>
    </div>
  )
}

export default ListEntry
