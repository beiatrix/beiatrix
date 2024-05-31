// types
import { Project } from '@/types'

// content
import examPlayerContent from './examPlayer.md'
import enrollmentWizardContent from './enrollmentWizard.md'
import mobileAppContent from './mobileApp.md'
import mobileChatContent from './mobileChat.md'
import schedulingWizardContent from './schedulingWizard.md'
import studentDashboardContent from './studentDashboard.md'
import studentProfileContent from './studentProfile.md'
import tutorMatchingContent from './tutorMatching.md'

export const projects: Project[] = [
  {
    title: 'Wordle',
    subtitle: 'guess the five-letter word',
    description: 'I literally just wanted to play Wordle more than once a day, so I built this app.',
    url: 'https://wordle-by-beiatrix.vercel.app/',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/wordle/wordle.gif',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: '',
    private: false
  },
  {
    title: 'Student Dashboard',
    subtitle: 'Revolution Prep • Student Dashboard',
    description: 'Dashboard for Revolution Prep students built with Nuxt.',
    slug: 'student-dashboard',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/student-dashboard-cover.gif',
    year: 2021,
    company: 'Revolution Prep',
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: studentDashboardContent,
    private: false
  },
  {
    title: 'Chat App',
    subtitle: 'Revolution Prep • Mobile Chat App',
    description: 'Real-time chat messaging app for iOS and Android, built with Ionic/Vue and Ruby on Rails.',
    slug: 'chat-app',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue',
      'Ruby on Rails'
    ],
    content: mobileChatContent,
    private: true
  },
  {
    title: 'Enrollment Wizard',
    subtitle: 'Revolution Prep • Enrollment Wizard',
    description: 'Revolution Prep enrollment wizard',
    slug: 'enrollment-wizard',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: enrollmentWizardContent,
    private: true
  },
  {
    title: 'Scheduling Wizard',
    subtitle: 'Revolution Prep • Scheduling Wizard',
    description: 'Revolution Prep Scheduling wizard',
    slug: 'scheduling-wizard',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: schedulingWizardContent,
    private: true
  },
  {
    title: 'Exam Player',
    subtitle: 'Revolution Prep • Exam Player',
    description: 'Revolution Prep exam player',
    slug: 'exam-player',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: examPlayerContent,
    private: true
  },
  {
    title: 'Mobile App',
    subtitle: 'Revolution Prep • Mobile App',
    description: 'Mobile app for Revolution Prep students built with Ionic/Vue.',
    slug: 'mobile-app',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: mobileAppContent,
    private: true
  },
  {
    title: 'Tutor Matching Form',
    subtitle: 'Revolution Prep • Tutor Matching Form',
    description: 'Form to help students to match with a tutor',
    slug: 'tutor-matching',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: tutorMatchingContent,
    private: true
  },
  {
    title: 'Student Profile Forms',
    subtitle: 'Revolution Prep • Student Profile Forms',
    description: 'Forms for gathering student information',
    slug: 'student-profile',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: studentProfileContent,
    private: true
  },
  {
    title: 'Documentation Samples',
    subtitle: 'Revolution Prep • Engineering Documentation',
    description: 'Samples of documentation written for Revolution Prep Engineering',
    slug: 'documentation-samples',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    company: 'Revolution Prep',
    year: 'ongoing',
    technologies: [],
    content: '',
    private: true
  },
]