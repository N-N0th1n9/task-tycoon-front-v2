import { FC } from 'react'

interface IProps {
  name: string
  value: string
}

const ListEntry: FC<IProps> = ({ name, value }) => {
  return (
    <div className='border-b-ttLightGray grid h-25 w-full grid-cols-2 border-b-[1.5px] last:border-none'>
      <div className='text-ttBlack border-r-ttLightGray flex h-full items-center justify-end border-r-[1.5px] px-9'>
        {name}
      </div>
      <div className='text-ttLightBlack flex items-center justify-start px-9'>{value}</div>
    </div>
  )
}

export default ListEntry
