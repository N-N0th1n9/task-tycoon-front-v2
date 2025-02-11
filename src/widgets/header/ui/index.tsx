'use client'

import Link from 'next/link'
import { useState } from 'react'

import cln from '@src/shared/helpers/classname'
import BurgerMenu from '@src/shared/ui/burger'

import Nav from './nav'

export const Header = () => {
  // TODO: fix the open menu (when opening the site on mobile, the menu is open)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <header className='bg-ttUltraLightGray mb-22 h-auto transition'>
      <div
        className={cln(
          'mx-auto flex max-w-[1620px] items-center justify-between py-4 pl-10 max-lg:flex-col max-lg:gap-4',
          {
            '!gap-0': !isVisible,
          }
        )}
      >
        <div className='flex w-full items-center justify-between pr-10'>
          <Link
            href='/'
            className='text-ttBlue text-xl font-extrabold'
          >
            TASK TYCOON
          </Link>
          <BurgerMenu
            isVisible={isVisible}
            onClick={() => setIsVisible(prev => !prev)}
          />
        </div>
        <Nav isVisible={isVisible} />
      </div>
    </header>
  )
}
