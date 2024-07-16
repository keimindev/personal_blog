'use client'

import Link from '@/components/Link'
import MainCharacter from '@/components/MainCharacter'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

export default function Home({ posts }) {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <section className="aspect-ratio">
          <MainCharacter />
        </section>
        <section className="w-full">
          <div className="text-4xl">
            hello, I'm <span className="font-bold">Frontend Developer</span>
          </div>
          <div>
            A frontend developer who prioritizes creating better user value over simply making a
            product.
          </div>
          <div className="flex w-full items-center justify-between p-5">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  )
}
