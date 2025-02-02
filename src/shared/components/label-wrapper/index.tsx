import { ElementType, FC, ReactNode } from 'react'

interface IProps<E extends ElementType = ElementType> {
  as: E
  label: string
  children: ReactNode
}

const Labeled: FC<IProps> = ({ label, children, as = 'div' }) => {
  const Element = as

  return (
    <Element className='flex w-full flex-col gap-1'>
      <label className='text-ttDarkGray text-[12px] font-medium'>{label}</label>
      {children}
    </Element>
  )
}

export default Labeled
