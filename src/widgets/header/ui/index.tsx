'use client'

import Link from 'next/link'

import Nav from './nav'

export const Header = () => {
  return (
    <header className='bg-ttUltraLightGray mb-8'>
      <div className={'mx-auto flex h-25 max-w-[1620px] items-center justify-between pl-10'}>
        <Link
          href='/'
          className='text-ttBlue text-xl font-extrabold'
        >
          TASK TYCOON
        </Link>
        <Nav />
      </div>
    </header>
  )
}
