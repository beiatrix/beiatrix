// types
import { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Mobile Chat App',
    subtitle: 'Revolution Now for Mobile',
    description: 'Real-time chat messaging app for iOS and Android, built with Ionic Vue and Ruby on Rails.',
    slug: 'mobile-chat',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    year: 2023,
    technologies: [
      'Ionic Vue',
      'Ruby on Rails'
    ],
    content: 'lorem ipsum'
  },
  {
    title: 'Mobile App',
    subtitle: 'Revolution Prep Mobile App',
    description: 'Mobile app for Revolution Prep students built with Ionic Vue.',
    slug: 'mobile-app',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    year: 2022,
    technologies: [
      'Ionic Vue'
    ],
    content: 'lorem ipsum'
  },
  {
    title: 'Student Dashboard',
    subtitle: 'Revolution Prep Student Dashboard',
    description: 'Dashboard for Revolution Prep students built with Nuxt.',
    slug: 'student-dashboard',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    year: 2022,
    technologies: [
      'Ionic Vue'
    ],
    content: 'lorem ipsum'
  }
]