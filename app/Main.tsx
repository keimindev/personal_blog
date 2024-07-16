'use client'

import Link from '@/components/Link'
import MainCharacter from '@/components/MainCharacter'
import headerNavLinks from '@/data/headerNavLinks'

export default function Home({ posts }) {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <section className="aspect-ratio">
          <MainCharacter />
        </section>
        <section className="w-full">
          <div className="text-4xl">
            <p>Hello,</p>
            <p>
              I'm <span className="text-5xl font-bold">Frontend Developer</span>
            </p>
          </div>
          <div className="py-5">
            A frontend developer who prioritizes creating better user value over simply making a
            product.
          </div>
          <div className="mt-10 flex w-full items-center justify-between px-5">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden text-xl font-bold text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
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
