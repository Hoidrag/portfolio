export type ProjectIdea = {
  number: string
  title: string
  description: string
  tools: string
}

export const projectIdeas: ProjectIdea[] = [
  {
    number: '01',
    title: 'Analytics dashboard',
    description:
      'A clear, responsive dashboard for exploring data and keeping track of what matters.',
    tools: 'React · TypeScript',
  },
  {
    number: '02',
    title: 'E-commerce experience',
    description:
      'A thoughtful storefront concept focused on smooth browsing and a simple checkout.',
    tools: 'React · UI',
  },
  {
    number: '03',
    title: 'End-to-end test toolkit',
    description:
      'Reusable browser tests that make essential user journeys easier to trust.',
    tools: 'Cypress · Playwright',
  },
]
