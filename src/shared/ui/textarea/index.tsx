import { FC, TextareaHTMLAttributes } from 'react'

import cln from '@src/shared/helpers/classname'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  initialHeight?: number
}

const Textarea: FC<IProps> = ({ label, error, initialHeight = 120, ...props }) => {
  return (
    <div className='relative flex max-h-200 flex-col transition'>
      {label && <label className='text-ttDarkGray mb-1 text-sm'>{label}</label>}
      <textarea
        className={cln(
          `group rounded-ttBase border-ttLightGray focus-within:border-ttLightBlack hover:border-ttGray flex resize-y gap-5 border px-6 py-5 text-base outline-none`,
          { 'border-ttRed': error }
        )}
        style={{ minHeight: initialHeight || 'auto' }}
        {...props}
      />
      {error && <p className='text-ttRed mt-1 text-sm'>{error}</p>}
    </div>
  )
}

export default Textarea
