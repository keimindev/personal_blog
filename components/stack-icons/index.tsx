import {
  React,
  Appwrite,
  Nextjs,
  ReactNative,
  Typescript,
  Recoil,
  Redux,
  Firebase,
  Mongodb,
  Tailwindcss,
} from './icons'

const components = {
  react: React,
  appwrite: Appwrite,
  nextjs: Nextjs,
  typescript: Typescript,
  recoil: Recoil,
  redux: Redux,
  reactnative: ReactNative,
  firebase: Firebase,
  mongodb: Mongodb,
  tailwindcss: Tailwindcss,
}

type TechStackIconProps = {
  kind: keyof typeof components
  size?: number
}

const TechStackIcon = ({ kind, size = 8 }: TechStackIconProps) => {
  const TechStackSvg = components[kind]

  return (
    <>
      <span className="sr-only">{kind}</span>
      {TechStackSvg && (
        <TechStackSvg
          className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
        />
      )}
    </>
  )
}

export default TechStackIcon
