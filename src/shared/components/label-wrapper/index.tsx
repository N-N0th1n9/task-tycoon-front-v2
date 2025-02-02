import { FC, ReactNode } from 'react'

interface IProps {
  label: string
  children: ReactNode
}

const Labeled: FC<IProps> = ({ label, children }) => {
  return (
    <div className='flex w-full flex-col gap-1'>
      <label className='text-ttDarkGray text-[12px] font-medium'>{label}</label>
      {children}
    </div>
  )
}

export default Labeled
