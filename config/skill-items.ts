import type { Item } from '@/types'
import { technologyIcons } from '@/config/technology-icons'

export const technicalSkillItems: Item[] = [
  {
    icon: technologyIcons.HTML,
    name: 'HTML'
  },
  {
    icon: technologyIcons.CSS,
    name: 'CSS'
  },
  {
    icon: technologyIcons.JavaScript,
    name: 'JavaScript'
  },
  {
    icon: technologyIcons.TypeScript,
    name: 'TypeScript'
  },
  {
    icon: technologyIcons.Vue,
    name: 'Vue'
  },
  {
    icon: technologyIcons.React,
    name: 'React'
  },
  {
    icon: technologyIcons.Angular,
    name: 'Angular'
  },
  {
    icon: technologyIcons.GraphQL,
    name: 'GraphQL'
  },
  {
    icon: technologyIcons['Ruby on Rails'],
    iconClass: 'text-ruby-red',
    name: 'Ruby on Rails'
  },
  {
    icon: technologyIcons.SQL,
    iconClass: 'text-jay',
    name: 'SQL'
  }
]

export const designSkillItems: Item[] = [
  {
    icon: 'logos:adobe-after-effects',
    name: 'Adobe AfterEffects'
  },
  {
    icon: 'logos:adobe-illustrator',
    name: 'Adobe Illustrator'
  },
  {
    icon: 'logos:adobe-indesign',
    name: 'Adobe InDesign'
  },
  {
    icon: 'logos:adobe-photoshop',
    name: 'Adobe Photoshop'
  },
  {
    icon: 'logos:adobe-xd',
    name: 'Adobe XD'
  },
  {
    icon: 'logos:figma',
    name: 'Figma'
  },
  {
    icon: 'custom:final-cut-pro',
    name: 'Final Cut Pro'
  },
  {
    icon: 'heroicons:paint-brush-16-solid',
    iconClass: 'text-eggplant',
    name: 'Hand-Drawn Illustration'
  }
]

export const interpersonalSkillItems: Item[] = [
  {
    icon: 'ion:search',
    iconClass: 'text-forest',
    name: 'Attention to Detail'
  },
  {
    icon: 'ion:people',
    iconClass: 'text-forest',
    name: 'Collaboration'
  },
  {
    icon: 'ion:chatbubble-ellipses',
    iconClass: 'text-forest',
    name: 'Communication'
  },
  {
    icon: 'ion:school',
    iconClass: 'text-forest',
    name: 'Continuous Learning'
  },
  {
    icon: 'ion:create',
    iconClass: 'text-forest',
    name: 'Documentation'
  },
  {
    icon: 'ion:list',
    iconClass: 'text-forest',
    name: 'Organization'
  },
  {
    icon: 'ion:rocket',
    iconClass: 'text-forest',
    name: 'Project Management'
  },
  {
    icon: 'ion:telescope',
    iconClass: 'text-forest',
    name: 'Proactivity'
  }
]

export const skillItems = {
  technical: technicalSkillItems,
  design: designSkillItems,
  interpersonal: interpersonalSkillItems
}
