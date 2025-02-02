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
  base: 'text-ttLightBlack rounded-ttBase disabled:border-ttLightGray disabled:text-ttLightGray flex h-25 cursor-pointer items-center justify-center gap-5 border border-[1.5px] px-7 leading-12 font-medium transition-all active:scale-98 disabled:pointer-events-none disabled:bg-transparent',
  variants: {
    color: {
      primary: 'border-ttGray hover:border-ttLightBlack hover:bg-ttUltraLightGray bg-white',
      danger: 'border-ttRed text-ttRed bg-ttLightRed hover:bg-ttRed hover:text-ttWhite',
      accent: 'border-ttBlue bg-ttLightBlue hover:bg-ttBlue hover:text-ttWhite',
    },
    border: {
      outline: '',
      inline: 'border-none bg-transparent',
    },
  },
  compoundVariants: [
    {
      color: 'danger',
      border: 'inline',
      class: 'hover:bg-ttLightRed hover:text-ttRed bg-transparent',
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
  type = 'button',
  ...props
}) => {
  const Element = as || 'button'

  return (
    <Element
      className={cln(button({ color, border }), className)}
      href={href}
      type={type}
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
