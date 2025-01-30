'use client'

import cln from '@/shared/helpers/classname'
import Link from 'next/link'

import Nav from './nav'

const Header = () => {
  return (
    <div className='bg-ttUltraLightGray my-auto mb-8'>
      <div className={cln('mx-auto flex h-25 max-w-[1792px] items-center justify-between px-10')}>
        <Link
          href='/'
          className='text-ttBlue text-xl font-extrabold'
        >
          TASK TYCOON
        </Link>
        <Nav />
      </div>
    </div>
  )
}

export { Header }
