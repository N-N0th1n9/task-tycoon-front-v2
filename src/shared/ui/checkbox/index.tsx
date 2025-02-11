import { FC, InputHTMLAttributes } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import CheckboxArrowIcon from '../../../../public/assets/icons/checkbox-arrow'

interface IProps extends VariantProps<typeof checkbox>, InputHTMLAttributes<HTMLInputElement> {
  title?: string
  type: 'checkbox' | 'radio'
}

const checkbox = tv({
  base: 'peer hover:border-ttDarkGray disabled:border-ttLightGray border-ttGray checked:border-ttBlue checked:hover:border-ttBlue flex h-9 w-9 appearance-none items-center gap-2 border-[1.5px]',
  variants: {
    type: {
      checkbox: 'checked:bg-ttBlue rounded-sm',
      radio:
        'after:bg-ttBlue after:checked:bg-ttBlue rounded-full after:absolute after:right-1/4 after:hidden after:h-5 after:w-5 after:rounded-full checked:after:block',
    },
  },
})

const Checkbox: FC<IProps> = ({ type, title, ...props }) => {
  return (
    <label className='relative'>
      <input
        type={type}
        className={checkbox({ type })}
        {...props}
      />
      {type === 'checkbox' && (
        <CheckboxArrowIcon className='text-ttWhite absolute top-1/4 left-1/6 hidden peer-checked:block' />
      )}
      {title !== undefined && <p className='font-medium'>{title}</p>}
    </label>
  )
}

export default Checkbox
