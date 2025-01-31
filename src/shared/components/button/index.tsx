'use client'

import cln from '@/shared/helpers/classname'
import type Link from 'next/link'
import { type ButtonHTMLAttributes, type ElementType, FC, type ReactNode } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

interface IProps<E extends ElementType = ElementType>
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof button> {
  as?: E | typeof Link // Link(Nextjs), button, a, etc.
  href?: string
  icon?: ReactNode // maybe create start and end icon
  isChecked?: boolean
}

const button = tv({
  base: 'text-ttLightBlack rounded-ttBase disabled:border-ttLightGray disabled:text-ttLightGray flex cursor-pointer items-center justify-center gap-5 border px-7 py-6 leading-12 disabled:pointer-events-none disabled:bg-transparent',
  variants: {
    color: {
      primary: 'border-ttDarkGray',
      danger: 'border-ttRed text-ttRed bg-ttLightRed',
      accent: 'border-ttBlue bg-ttLightBlue',
    },
    border: {
      outline: '',
      inline: 'border-transparent',
    },
  },
  compoundVariants: [
    {
      color: 'danger',
      border: 'inline',
      class: 'bg-transparent',
    },
  ],
  defaultVariants: {
    color: 'primary',
    border: 'outline',
  },
})

const Button: FC<IProps> = ({
  as,
  color,
  icon,
  border,
  children,
  isChecked,
  href,
  className,
  ...props
}) => {
  const Element = as || 'button'

  return (
    <Element
      className={cln(button({ color, border }), className)}
      href={href}
      {...props}
    >
      {/* icon */}
      {icon && <span className=''>{icon}</span>}

      {/* text */}
      {children && <span className='text-center'>{children}</span>}
    </Element>
  )
}

export default Button
