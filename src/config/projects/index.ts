// types
import { Project } from '@/types'

// content
import examPlayerContent from './examPlayer.md'
import enrollmentWizardContent from './enrollmentWizard.md'
import mobileAppContent from './mobileApp.md'
import mobileChatContent from './mobileChat.md'
import schedulingFlowContent from './schedulingFlow.md'
import speedBasedPricingContent from './speedBasedPricing.md'
import studentDashboardContent from './studentDashboard.md'
import studentProfileContent from './studentProfile.md'
import trialsContent from './trials.md'
import tutorMatchingFormContent from './tutorMatchingForm.md'
import tutorSelfMatchContent from './tutorSelfMatch.md'

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
    private: false,
    featured: true
  },
  {
    title: 'Aff(ai)rmations',
    subtitle: 'Daily affirmations powered by AI',
    description: 'daily affirmations, powered by AI 💫 built using Nuxt, Vue, Gemini, and Tailwind',
    url: 'https://aff-ai-rmations.vercel.app/',
    githubUrl: 'https://github.com/beiatrix/aff-ai-rmations',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/aff-ai-rmations/aff-ai-rmations.jpg',
    year: 2025,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: '',
    private: false,
    featured: true
  },
  {
    title: 'Seasonal Foods',
    subtitle: 'What\'s in season right now?',
    description: 'What\'s in season right now? 👩🏻‍🌾 🥬 built with React, Gatsby, Tailwind, and Firebase',
    url: 'https://seasonalfoods.netlify.app/',
    githubUrl: 'https://github.com/beiatrix/seasonal-foods',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/seasonal-foods/seasonal-foods.gif',
    year: 2024,
    technologies: [
      'Firebase',
      'React'
    ],
    content: '',
    private: false,
    featured: true
  },
  {
    title: 'Animal Crossing Art Guide',
    subtitle: 'real vs fake art',
    description: 'A guide to Redd\'s real vs fake art 🦊 built with React, Gatsby, GraphQL, Tailwind, and Contentful',
    url: 'https://animal-crossing-art-guide.netlify.app/',
    githubUrl: 'https://github.com/beiatrix/animal-crossing-art-guide',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/animal-crossing-art-guide/animal-crossing-art-guide.gif',
    year: 2024,
    technologies: [
      'Gatsby',
      'React'
    ],
    content: '',
    private: false,
    featured: true
  },
  {
    title: 'Portfolio Website',
    subtitle: 'I made a website for my mom',
    description: 'Portfolio Website built with Nuxt, Sanity, and Tailwind',
    url: 'https://cynthiapedrasa.com/',
    githubUrl: 'https://github.com/beiatrix/cynthia-pedrasa-v2',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/portfolio-website/portfolio-website-cover.gif',
    year: 2024,
    technologies: [
      'Nuxt',
      'Sanity'
    ],
    content: '',
    private: false,
    featured: true
  },
  {
    title: 'Speed-Based Pricing',
    subtitle: '@ Closinglock',
    description: 'Choose your payment transfer speed for real estate transactions',
    slug: 'speed-based-pricing',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary-dynamic-fields.gif',
    company: 'Closinglock',
    year: 2025,
    technologies: [
      'Vue'
    ],
    content: speedBasedPricingContent,
    private: true,
    featured: false
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
    private: false,
    featured: true
  },
  {
    title: 'Mobile Chat',
    subtitle: '@ Revolution Prep',
    description: 'Real-time chat messaging app for iOS and Android, built with Ionic/Vue and Ruby on Rails.',
    slug: 'mobile-chat',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/mobile-chat/mobile-chat-cover-horizontal.gif',
    company: 'Revolution Prep',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue',
      'Ruby on Rails'
    ],
    content: mobileChatContent,
    private: false,
    featured: true
  },
  {
    title: 'Enrollment Wizard',
    subtitle: '@ Revolution Prep',
    description: 'Revolution Prep Enrollment Wizard',
    slug: 'enrollment-wizard',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-cover.gif',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: enrollmentWizardContent,
    private: false,
    featured: true
  },
  {
    title: 'Scheduling Flow',
    subtitle: '@ Revolution Prep',
    description: 'Revolution Prep Scheduling Flow',
    slug: 'scheduling-flow',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-flow/schedule-sessions-step-2.gif',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: schedulingFlowContent,
    private: false,
    featured: true
  },
  {
    title: 'Tutor Self-Match',
    subtitle: '@ Revolution Prep',
    description: 'A flow that enables students to match with a tutor by themselves',
    slug: 'tutor-self-match',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/self-match-cover.gif',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: tutorSelfMatchContent,
    private: false,
    featured: true
  },
  {
    title: 'Trials',
    subtitle: '@ Revolution Prep',
    description: 'Revolution Prep Trials',
    slug: 'trials',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/trials/trials-cover.gif',
    company: 'Revolution Prep',
    year: 2024,
    technologies: [
      'Nuxt',
      'Vue'
    ],
    content: trialsContent,
    private: false,
    featured: false
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
    private: false,
    featured: false
  },
  {
    title: 'Exam Player',
    subtitle: '@ Revolution Prep',
    description: 'Revolution Prep exam player',
    slug: 'exam-player',
    image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/exam-player/exam-player-cover.gif',
    company: 'Revolution Prep',
    year: 2023,
    technologies: [
      'Ionic',
      'Vue'
    ],
    content: examPlayerContent,
    private: false,
    featured: false
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
    private: false,
    featured: false
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
    private: true,
    featured: false
  },
]
