'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Rive from '@rive-app/react-canvas'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 font-greeting">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Rive src="jains_avatar.riv" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="relative inline-block font-medium text-gray-900 before:absolute
    before:bottom-0.5 before:left-0 before:-z-10 before:h-[13px]
    before:w-full before:origin-left before:scale-x-0
    before:rounded-sm before:bg-primary-500 before:opacity-70 before:transition-transform
    before:duration-300 hover:before:scale-x-100"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
