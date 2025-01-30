import cln from '@/shared/helpers/classname'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { PrivateLinks, PublicLinks } from '../config'

const Nav = () => {
  const pathname = usePathname()
  const [isAuth, setIsAuth] = useState(true)

  // useEffect(() => {
  //   const token = Cookies.get('accessToken')
  //   setIsAuth(!!token)
  // }, [Cookies.get('accessToken')])

  const links = isAuth ? PrivateLinks : PublicLinks

  const getLinkProps = (href: string) => pathname === href

  return (
    <div>
      <nav className='flex items-center gap-1'>
        {links.map(({ name, href }) => {
          const isActive = getLinkProps(href)
          return (
            <Link
              key={href}
              href={href}
              className={cln(
                'px-10 py-4 text-sm font-medium transition-all active:scale-[0.98]',
                { 'text-ttBlue': isActive },
                { 'hover:text-ttBlack': !isActive }
              )}
            >
              {name}
            </Link>
          )
        })}
        {/* <button
          className={cln(styles['button'], 'hidden')}
          onClick={() => toggleIsOpen()}
        >
          <MenuImg />
        </button> */}
      </nav>
    </div>
  )
}

export default Nav
