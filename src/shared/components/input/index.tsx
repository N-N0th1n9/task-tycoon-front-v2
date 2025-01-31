import cln from '@/shared/helpers/classname'
import React, { FC, ReactNode } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
}

const Input: FC<IProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className='relative flex flex-col transition'>
      {label && <label className='mb-1 text-gray-700'>{label}</label>}

      <div
        className={cln(
          'group rounded-ttBase border-ttLightGray focus-within:border-ttLightBlack hover:border-ttGray flex h-25 gap-5 border px-6 text-base',
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
