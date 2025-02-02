import cln from '@/shared/helpers/classname'
import Link from 'next/link'
import { ElementType, FC, ReactNode } from 'react'

export interface IProps<E extends ElementType = ElementType> {
  as?: E | typeof Link
  nameTitle: string
  item?: ReactNode
  className?: string
}

const InfoBar: FC<IProps> = ({ nameTitle, item, as = 'div', className }) => {
  const Element = as

  return (
    <Element
      className={cln(
        'border-b-solid border-b-ttLightGray flex h-[50px] w-full items-center justify-between border-b-[1.5px] last:border-none',
        className
      )}
    >
      <p className='justify-self-start'>{nameTitle}</p>
      {item}
    </Element>
  )
}

export default InfoBar
