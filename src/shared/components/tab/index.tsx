'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const matchFunc = (href: string, pathname: string) => {
  if (href[0] == '.') {
    return href.slice(1) == pathname.slice(pathname.length - href.length + 1)
  }
  return href == pathname
}

interface IProps {
  href: string
  name: string
  title: string
}

const Tab: FC<IProps> = ({ href, name, title }) => {
  const pathname = usePathname()
  return (
    <div className='has-[input:checked]:text-ttBlue text-ttBlack has-[input:checked]:border-b-ttBlue border-b-solid border-b-ttLightGray h-[50px] w-full border-b-[1.5px] transition-all has-[input:checked]:border-b-2 has-[input:checked]:font-medium'>
      <Link
        className='grid h-full w-full place-items-center transition-all'
        href={href}
      >
        {title}
      </Link>
      <input
        className='absolute hidden'
        name={name}
        type='radio'
        readOnly
        checked={matchFunc(href, pathname)}
      />
    </div>
  )
}

export default Tab
