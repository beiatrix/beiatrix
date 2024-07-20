// ionic
import {
  brush,
  chatbubbleEllipses,
  create,
  list,
  logoHtml5,
  logoCss3,
  people,
  rocket,
  school,
  search,
  server,
  telescope
} from 'ionicons/icons'

// types
import { Item } from '@/types'

export const technicalSkillItems: Item[] = [
  {
    logo: require('@/assets/images/logos/vue.png'),
    text: 'Vue'
  },
  {
    logo: require('@/assets/images/logos/nuxt.png'),
    text: 'Nuxt'
  },
  {
    logo: require('@/assets/images/logos/ionic.png'),
    text: 'Ionic'
  },
  {
    logo: require('@/assets/images/logos/react.png'),
    text: 'React'
  },
  {
    logo: require('@/assets/images/logos/graphql.png'),
    text: 'GraphQL'
  },
  {
    logo: require('@/assets/images/logos/typescript.png'),
    text: 'TypeScript'
  },
  {
    logo: require('@/assets/images/logos/javascript.png'),
    text: 'JavaScript'
  },
  {
    icon: logoHtml5,
    iconColor: 'html-orange',
    text: 'HTML'
  },
  {
    icon: logoCss3,
    iconColor: 'css-blue',
    text: 'CSS'
  },
  {
    icon: require('@/assets/images/logos/ruby.svg'),
    iconColor: 'ruby-red',
    text: 'Ruby on Rails'
  },
  {
    icon: server,
    iconColor: 'jay',
    text: 'SQL'
  }
]

export const designSkillItems: Item[] = [
  {
    logo: require('@/assets/images/logos/adobe-after-effects.png'),
    text: 'Adobe AfterEffects'
  },
  {
    logo: require('@/assets/images/logos/adobe-illustrator.png'),
    text: 'Adobe Illustrator'
  },
  {
    logo: require('@/assets/images/logos/adobe-in-design.png'),
    text: 'Adobe InDesign'
  },
  {
    logo: require('@/assets/images/logos/adobe-photoshop.png'),
    text: 'Adobe Photoshop'
  },
  {
    logo: require('@/assets/images/logos/adobe-xd.png'),
    text: 'Adobe XD'
  },
  {
    logo: require('@/assets/images/logos/final-cut-pro.png'),
    text: 'Final Cut Pro'
  },
  {
    icon: brush,
    iconColor: 'eggplant',
    text: 'Hand-Drawn Illustration'
  }
]

export const interpersonalSkillItems: Item[] = [
  {
    icon: search,
    iconColor: 'forest',
    text: 'Attention to Detail'
  },
  {
    icon: people,
    iconColor: 'forest',
    text: 'Collaboration'
  },
  {
    icon: chatbubbleEllipses,
    iconColor: 'forest',
    text: 'Communication'
  },
  {
    icon: school,
    iconColor: 'forest',
    text: 'Continuous Learning'
  },
  {
    icon: create,
    iconColor: 'forest',
    text: 'Documentation'
  },
  {
    icon: list,
    iconColor: 'forest',
    text: 'Organization'
  },
  {
    icon: rocket,
    iconColor: 'forest',
    text: 'Project Management'
  },
  {
    icon: telescope,
    iconColor: 'forest',
    text: 'Proactivity'
  }
]

export const skillItems = {
  technical: technicalSkillItems,
  design: designSkillItems,
  interpersonal: interpersonalSkillItems
}
