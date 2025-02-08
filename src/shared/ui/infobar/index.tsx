import cln from '@/shared/helpers/classname'
import Link from 'next/link'
import { ElementType, FC, ReactNode } from 'react'

export interface IProps<E extends ElementType = ElementType> {
  as?: E | typeof Link
  label: string
  item?: ReactNode
  className?: string
}

const InfoBar: FC<IProps> = ({ label, item, as = 'div', className }) => {
  const Element = as

  return (
    <div
      className={cln(
        'border-b-solid border-b-ttLightGray flex h-[50px] w-full items-center justify-between border-b-[1.5px] last:border-none',
        className
      )}
    >
      <Element
        className='w-full justify-self-start pr-5 outline-none'
        placeholder={label}
      >
        {as === 'input' ? null : label}
      </Element>
      {item}
    </div>
  )
}

export default InfoBar
