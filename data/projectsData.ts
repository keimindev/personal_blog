interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: "Ming's devlog",
    description: `Ming tech blog & portfolio`,
    imgSrc: '/static/images/project/personal_blog.png',
    href: '/blog/projects/personal-blog',
  },
  {
    title: 'SafeMoney',
    description: `A 1:1 trading platform for secure transactions.`,
    imgSrc: '/static/images/project/safemoney-1.png',
    href: '/blog/projects/safemoney',
  },
  {
    title: 'T.O.T',
    description: `A time tracking platform`,
    imgSrc: '/static/images/project/tot.png',
    href: '/blog/projects/tot',
  },
  {
    title: 'Netflix OX Quiz',
    description: `A Netflix content-based OX quiz webpage. `,
    imgSrc: '/static/images/project/netflix_ox.png',
    href: '/blog/projects/netflix-ox-quiz',
  },
]

export default projectsData
