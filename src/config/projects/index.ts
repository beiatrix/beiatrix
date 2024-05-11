// types
import { Project } from '@/types'

// content
import mobileAppContent from './mobileApp.md'
import mobileChatContent from './mobileChat.md'
import studentDashboardContent from './studentDashboard.md'

export const projects: Project[] = [
  {
    title: 'Wordle',
    subtitle: 'guess the five-letter word',
    description: 'I literally just wanted to play Wordle more than once a day, so I built this app.',
    url: 'https://wordle-by-beiatrix.vercel.app/',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/wordle.png',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: ''
  },
  {
    title: 'Mobile Chat App',
    subtitle: 'Revolution Now for Mobile',
    description: 'Real-time chat messaging app for iOS and Android, built with Ionic/Vue and Ruby on Rails.',
    slug: 'mobile-chat',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue',
      'Ruby on Rails'
    ],
    content: mobileChatContent
  },
  {
    title: 'Mobile App',
    subtitle: 'Revolution Prep Mobile App',
    description: 'Mobile app for Revolution Prep students built with Ionic/Vue.',
    slug: 'mobile-app',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: mobileAppContent
  },
  {
    title: 'Student Dashboard',
    subtitle: 'Revolution Prep Student Dashboard',
    description: 'Dashboard for Revolution Prep students built with Nuxt.',
    slug: 'student-dashboard',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    year: 2021,
    company: 'Revolution Prep',
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: studentDashboardContent
  }
]