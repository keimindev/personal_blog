interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  github?: string
  stack?: string[]
}

const projectsData: Project[] = [
  // {
  //   title: "Ming's devlog",
  //   description: `Ming tech blog & portfolio`,
  //   imgSrc: '/static/images/project/personal_blog.png',
  //   href: '/blog/projects/personal-blog',
  // },
  {
    title: 'T.O.T App ver',
    description: `A time tracking platform`,
    imgSrc: '/static/images/project/tot-app.png',
    href: '/blog/projects/tot-app',
    github: '',
    stack: ['reactnative', 'tailwindcss', 'recoil', 'appwrite'],
  },
  {
    title: 'SafeMoney',
    description: `A 1:1 trading platform for secure transactions.`,
    imgSrc: '/static/images/project/safemoney-1.png',
    href: '/blog/projects/safemoney',
    github: '',
    stack: ['nextjs', 'recoil'],
  },
  {
    title: 'T.O.T (NextJS)',
    description: `A time tracking platform`,
    imgSrc: '/static/images/project/tot.png',
    href: '/blog/projects/tot',
    github: 'https://github.com/keimindev/tot',
    stack: ['nextjs', 'recoil', 'mongodb', 'tailwindcss'],
  },
  {
    title: 'Netflix OX Quiz',
    description: `A Netflix content-based OX quiz webpage. `,
    imgSrc: '/static/images/project/netflix_ox.png',
    href: '/blog/projects/netflix-ox-quiz',
    github: 'https://github.com/keimindev/OX_Quiz',
    stack: ['react', 'redux', 'firebase'],
  },
]

export default projectsData
