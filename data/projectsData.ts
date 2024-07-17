interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'SafeMoney',
    description: `1:1 Transaction platform`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/projects/netflix-ox-quiz',
  },
  {
    title: 'Netflix OX Quiz',
    description: `A Netflix content-based OX quiz webpage. It is optimized for mobile and developed using React and Redux. It is a simple quiz game webpage where you can compare your score with others' scores.`,
    imgSrc: '/static/images/project/netflix_ox.png',
    href: '/blog/projects/netflix-ox-quiz',
  },
]

export default projectsData
