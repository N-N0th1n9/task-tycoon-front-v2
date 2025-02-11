import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import cln from '@src/shared/helpers/classname'

import { PrivateLinks, PublicLinks } from '../config'

const Nav = ({ isVisible }: { isVisible: boolean }) => {
  const pathname = usePathname()
  const [isAuth, setIsAuth] = useState(true)

  // useEffect(() => {
  //   const token = Cookies.get('accessToken')
  //   setIsAuth(!!token)
  // }, [Cookies.get('accessToken')])

  const links = isAuth ? PrivateLinks : PublicLinks

  const getLinkProps = (href: string) => pathname === href

  return (
    <nav
      className={cln(
        'flex items-center gap-1 transition-all duration-300 ease-in-out max-lg:flex-col max-lg:overflow-hidden',
        isVisible
          ? 'max-lg:h-73 max-lg:translate-y-0 max-lg:opacity-100'
          : 'max-lg:h-0 max-lg:-translate-y-5 max-lg:opacity-0'
      )}
    >
      {links.map(({ name, href }) => {
        const isActive = getLinkProps(href)
        return (
          <Link
            key={href}
            href={href}
            className={cln(
              'px-10 py-4 text-sm font-medium text-nowrap transition-all active:scale-[0.98]',
              { 'text-ttBlue': isActive },
              { 'hover:text-ttBlack': !isActive }
            )}
          >
            {name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
