import cln from '@/shared/helpers/classname'
import { FC, TextareaHTMLAttributes } from 'react'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea: FC<IProps> = ({ label, error, className, ...props }) => {
  return (
    <div className='relative flex max-h-200 flex-col transition'>
      {label && <label className='mb-1 text-xs text-gray-700'>{label}</label>}
      <textarea
        className={cln(
          'group rounded-ttBase border-ttLightGray focus-within:border-ttLightBlack hover:border-ttGray flex h-25 resize-y gap-5 border px-6 text-base outline-none',
          { 'border-ttRed': error }
        )}
        {...props}
      />
      {error && <p className='text-ttRed mt-1 text-sm'>{error}</p>}
    </div>
  )
}

export default Textarea
