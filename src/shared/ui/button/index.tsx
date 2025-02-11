'use client'

import type Link from 'next/link'
import { type ButtonHTMLAttributes, type ElementType, FC, type ReactNode } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

import cln from '@src/shared/helpers/classname'

interface IProps<E extends ElementType = ElementType>
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof button> {
  as?: E | typeof Link // Link(Nextjs), button, a, etc.
  href?: string
  icon?: ReactNode // maybe create start and end icon
}

const button = tv({
  base: 'text-ttLightBlack rounded-ttBase disabled:border-ttLightGray disabled:text-ttLightGray disable:bg-transparent flex cursor-pointer items-center justify-center gap-5 border-[1.5px] bg-white px-7 leading-12 font-medium transition-all active:scale-98 disabled:pointer-events-none',
  variants: {
    color: {
      primary: 'border-ttGray hover:border-ttLightBlack hover:bg-ttUltraLightGray',
      danger: 'border-ttRed text-ttRed bg-ttLightRed hover:bg-ttRed hover:text-ttWhite',
      accent: 'border-ttBlue bg-ttLightBlue hover:bg-ttBlue hover:text-ttWhite',
    },
    border: {
      outline: '',
      inline: 'border-none bg-transparent',
    },
    iconOnly: {
      true: '!p-0',
    },
    size: {
      xs: 'h-23',
      md: 'h-25',
    },
  },
  compoundVariants: [
    {
      color: 'danger',
      border: 'inline',
      class: 'hover:bg-ttLightRed hover:text-ttRed bg-transparent',
    },
    {
      iconOnly: true,
      size: 'xs',
      class: 'w-23',
    },
    {
      iconOnly: true,
      size: 'md',
      class: 'w-25',
    },
  ],
  defaultVariants: {
    color: 'primary',
    border: 'outline',
    size: 'md',
    iconOnly: false,
  },
})

const Button: FC<IProps> = ({
  as,
  color,
  icon,
  iconOnly,
  border,
  size,
  children,
  href,
  className,
  type = 'button',
  ...props
}) => {
  const Element = as || 'button'

  return (
    <Element
      className={cln(button({ color, border, iconOnly, size }), className)}
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
