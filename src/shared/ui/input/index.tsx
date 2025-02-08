import cln from '@/shared/helpers/classname'
import React, { FC, ReactNode } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
}

const Input: FC<IProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className={cln('relative flex w-full flex-col transition-all', className)}>
      {label && <label className='text-ttDarkGray mb-1 text-sm'>{label}</label>}

      <div
        className={cln(
          'group rounded-ttBase [&:not(:focus-within)]:hover:border-ttGray border-ttLightGray focus-within:border-ttLightBlack flex h-25 gap-5 border-[1.5px] px-6 text-base transition-all focus-within:bg-white',
          { 'border-ttRed': error }
        )}
      >
        {icon && (
          <span
            className={cln(
              'text-ttLightGray group-focus-within:text-ttLightBlack group-hover:text-ttGray flex items-center',
              { 'text-ttRed': error }
            )}
          >
            {icon}
          </span>
        )}

        <input
          className='w-full outline-none'
          {...props}
        />
      </div>

      {error && <p className='text-ttRed mt-1 text-sm'>{error}</p>}
    </div>
  )
}

export default Input
