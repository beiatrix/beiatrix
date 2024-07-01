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
import tutorMatchingFormContent from './tutorMatchingForm.md'

export const projects: Project[] = [
  {
    title: 'Wordle',
    subtitle: 'guess the five-letter word',
    description: 'I literally just wanted to play Wordle more than once a day, so I built this app.',
    url: 'https://wordle-by-beiatrix.vercel.app/',
    githubUrl: 'https://github.com/beiatrix/wordle',
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
    subtitle: '@ Revolution Prep',
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
    title: 'Mobile Chat',
    subtitle: '@ Revolution Prep',
    description: 'Real-time chat messaging app for iOS and Android, built with Ionic/Vue and Ruby on Rails.',
    slug: 'mobile-chat',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/mobile-chat/mobile-chat-cover.gif',
    company: 'Revolution Prep',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue',
      'Ruby on Rails'
    ],
    content: mobileChatContent,
    private: false
  },
  {
    title: 'Enrollment Wizard',
    subtitle: '@ Revolution Prep',
    description: 'Revolution Prep Enrollment Wizard',
    slug: 'enrollment-wizard',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4.gif',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: enrollmentWizardContent,
    private: false
  },
  {
    title: 'Scheduling Wizard',
    subtitle: '@ Revolution Prep',
    description: 'Revolution Prep Scheduling Wizard',
    slug: 'scheduling-wizard',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-2.gif',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: schedulingWizardContent,
    private: false
  },
  {
    title: 'Mobile App',
    subtitle: '@ Revolution Prep',
    description: 'Mobile app for Revolution Prep students built with Ionic/Vue.',
    slug: 'mobile-app',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/mobile-app/mobile-app-cover-horizontal.gif',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: mobileAppContent,
    private: false
  },
  {
    title: 'Exam Player',
    subtitle: '@ Revolution Prep',
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
    title: 'Tutor Matching Form',
    subtitle: '@ Revolution Prep',
    description: 'Form to help students match with a tutor',
    slug: 'tutor-matching-form',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-cover.gif',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: tutorMatchingFormContent,
    private: false
  },
  {
    title: 'Student Profile',
    subtitle: '@ Revolution Prep',
    description: 'Forms for gathering student information',
    slug: 'student-profile',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile.gif',
    company: 'Revolution Prep',
    year: 2022,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: studentProfileContent,
    private: false
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