'use client'

import Link from '@/components/Link'
import headerNavLinks from '@/data/headerNavLinks'
import { Fit, Layout, useRive } from '@rive-app/react-canvas'

export default function Home({ posts }) {
  const { rive, RiveComponent } = useRive({
    src: '/min.riv',
    animations: 'EyeBlink',
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Cover,
    }),
  })

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <section className="aspect-ratio">
          <RiveComponent onMouseEnter={() => rive && rive.play()} />
        </section>
        <section className="mt-20 w-full text-center md:mt-0 md:text-start">
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
