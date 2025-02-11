'use client'

import clsx from 'clsx'
import { FC, SelectHTMLAttributes, useState } from 'react'

import ArrowSideIcon from '../../../../public/assets/icons/arrow-side'

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: string[]
}

const SelectInput: FC<IProps> = ({ label, options, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative w-full'>
      {label && <label className='text-ttDarkGray mb-2 block text-sm'>{label}</label>}

      <div className='relative'>
        <select
          className='border-ttLightGray rounded-ttBase h-25 w-full appearance-none border-[1.5px] bg-transparent px-8 outline-none'
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          {...props}
        >
          {options.map((option, index) => (
            <option
              key={index}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        <ArrowSideIcon
          className={clsx(
            'absolute top-1/2 right-4 mr-4 -translate-y-1/2 transition-transform duration-200',
            isOpen ? 'rotate-90' : '-rotate-90'
          )}
        />
      </div>
    </div>
  )
}

export default SelectInput
