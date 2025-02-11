import { ElementType, FC, ReactNode } from 'react'

import cln from '@src/shared/helpers/classname'

interface IProps<E extends ElementType = ElementType> {
  className?: string
  children?: ReactNode
  as?: E
}

const Container: FC<IProps> = ({ className, children, as = 'div', ...props }) => {
  const Element = as

  return (
    <Element
      className={cln('rounded-ttBase border-ttLightGray border p-7', className)}
      {...props}
    >
      {children}
    </Element>
  )
}

Container.displayName = 'Container'

export default Container
