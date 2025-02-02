import { FC, InputHTMLAttributes } from 'react'

export interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  never?: never // why does eslint gaf about empty interfaces??
}

const Switch: FC<IProps> = props => {
  return (
    <label className='group border-ttLightGray has-[input:checked]:border-ttBlue has-[input:checked]:bg-ttBlue flex h-12 w-22 cursor-pointer items-center rounded-[12px] border-[1.5px] border-solid px-1.5 transition-all'>
      <span className='bg-ttLightGray aspect-square h-8 w-8 rounded-full transition-all group-has-[input:checked]:ml-9.5 group-has-[input:checked]:bg-white' />
      <input
        className='absolute hidden'
        type='checkbox'
        {...props}
      />
    </label>
  )
}

export default Switch
