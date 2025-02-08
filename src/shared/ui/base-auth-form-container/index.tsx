import { FC, ReactNode } from 'react'

import Button from '../button'

interface IProps {
  children: ReactNode
  title: string
  btnText: string
}

const BaseAuthFormContainer: FC<IProps> = ({ title, btnText, children }) => {
  return (
    <section className='flex flex-col items-center gap-15'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <form className='flex w-full max-w-200 flex-col gap-9'>
        <div className='[&>*:not(:last-child)]:mb-4'>{children}</div>
        <Button>{btnText}</Button>
      </form>
    </section>
  )
}

export default BaseAuthFormContainer
