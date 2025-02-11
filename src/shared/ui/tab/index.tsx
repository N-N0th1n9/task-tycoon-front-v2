'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import cln from '@src/shared/helpers/classname'

const isPathEqual = (href: string, pathname: string) => {
  return href.slice(2) === pathname.split('/').pop()
}

interface IProps {
  href: string
  title: string
}

const Tab: FC<IProps> = ({ href, title }) => {
  const pathname = usePathname()
  return (
    <div
      className={cln(
        'text-ttBlack border-b-ttLightGray h-[50px] w-full border-b-[1.5px] transition-all',
        {
          'text-ttBlue border-b-ttBlue border-b-solid border-b-2 font-medium': isPathEqual(
            href,
            pathname
          ),
        }
      )}
    >
      <Link
        className='grid h-full w-full place-items-center transition-all'
        href={href}
      >
        {title}
      </Link>
    </div>
  )
}

export default Tab
