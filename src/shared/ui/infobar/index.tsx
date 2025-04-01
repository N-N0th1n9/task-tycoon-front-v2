import { JSX, ReactNode } from 'react'

import cln from '@src/shared/helpers/classname'

export type IProps = {
  label?: string
  item?: ReactNode
  className?: string
  as?: 'input' | 'div'
  error?: string
} & (JSX.IntrinsicElements['div'] | JSX.IntrinsicElements['input'])

const InfoBar = ({ label, item, className, as = 'div', error, ...props }: IProps) => {
  const isInput = as === 'input'

  return (
    <>
      <div
        className={cln(
          'border-b-solid border-b-ttLightGray flex h-[50px] w-full items-center justify-between border-b-[1.5px] last:border-none',
          { 'border-b-ttRed': error },
          className
        )}
      >
        {isInput ? (
          <input
            className='w-full justify-self-start pr-5 outline-none'
            placeholder={label}
            {...(props as JSX.IntrinsicElements['input'])}
          />
        ) : (
          <div
            className='w-full justify-self-start pr-5 outline-none'
            {...(props as JSX.IntrinsicElements['div'])}
          >
            {label}
          </div>
        )}
        {item}
      </div>
      {error && <span className='text-ttRed text-sm'>{error}</span>}
    </>
  )
}

export default InfoBar
