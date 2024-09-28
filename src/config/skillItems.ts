// ionic
import {
  brush,
  chatbubbleEllipses,
  create,
  list,
  logoAngular,
  // logoCss3,
  // logoHtml5,
  logoIonic,
  logoReact,
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
    logo: require('@/assets/images/logos/vue.svg'),
    text: 'Vue'
  },
  {
    logo: require('@/assets/images/logos/nuxt.svg'),
    text: 'Nuxt'
  },
  {
    icon: logoReact,
    iconColor: 'react-blue',
    text: 'React'
  },
  {
    icon: logoAngular,
    iconColor: 'angular-red',
    text: 'Angular'
  },
  {
    icon: logoIonic,
    iconColor: 'ionic-blue',
    text: 'Ionic'
  },
  {
    logo: require('@/assets/images/logos/graphql.svg'),
    text: 'GraphQL'
  },
  {
    logo: require('@/assets/images/logos/gatsby.svg'),
    text: 'Gatsby'
  },
  {
    logo: require('@/assets/images/logos/turborepo.svg'),
    text: 'Turborepo'
  },
  {
    logo: require('@/assets/images/logos/firebase.svg'),
    text: 'Firebase'
  },
  {
    logo: require('@/assets/images/logos/sanity.svg'),
    text: 'Sanity'
  },
  {
    logo: require('@/assets/images/logos/typescript.svg'),
    text: 'TypeScript'
  },
  {
    logo: require('@/assets/images/logos/javascript.svg'),
    text: 'JavaScript'
  },
  // {
  //   icon: logoHtml5,
  //   iconColor: 'html-orange',
  //   text: 'HTML'
  // },
  // {
  //   icon: logoCss3,
  //   iconColor: 'css-blue',
  //   text: 'CSS'
  // },
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
    logo: require('@/assets/images/logos/adobe-after-effects.svg'),
    text: 'Adobe AfterEffects'
  },
  {
    logo: require('@/assets/images/logos/adobe-illustrator.svg'),
    text: 'Adobe Illustrator'
  },
  {
    logo: require('@/assets/images/logos/adobe-in-design.svg'),
    text: 'Adobe InDesign'
  },
  {
    logo: require('@/assets/images/logos/adobe-photoshop.svg'),
    text: 'Adobe Photoshop'
  },
  {
    logo: require('@/assets/images/logos/adobe-xd.svg'),
    text: 'Adobe XD'
  },
  {
    logo: require('@/assets/images/logos/final-cut-pro.svg'),
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
