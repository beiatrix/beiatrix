---
title: 'Trials'
subtitle: '@ Revolution Prep'
description: 'Revolution Prep Trials'
slug: 'trials'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/trials-cover.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2024
technologies: [
  'Nuxt',
  'Vue'
]
private: false
featured: false
sequence: 10
---

::header-project-section
---
title: Overview
---
::

In 2024, Revolution Prep introduced Trial tutoring enrollments as a new purchase option.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/trials-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Trials
---
::

::header-project-section
---
title: Quiz Landing Page
---
::

The journey begins on the Revolution Prep website's quiz landing page. Here, the user selects one of four key concerns: high-stakes exam, AP exam, academics, or executive functioning.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/quiz.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Trials
---
::

Clicking the "Take the Quiz" button launches an embedded Typeform questionnaire designed to assess the user's specific tutoring needs.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/quiz-typeform.gif
class: drop-shadow-lg rounded-lg my-2
alt: Trials - Typeform
---
::

::header-project-section
---
title: Quiz Result Landing Page
---
::

Upon completing a quiz, the user advances to results page where they receive a personalized tutoring recommendation along with a discounted trial enrollment.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/quiz-result.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Trials - Quiz Result
---
::

To claim the offer, they enter an email and click the "Let's Go" call-to-action button.

::header-project-section
---
title: Checkout
---
::

The user then proceeds through the checkout flow to secure their trial enrollment.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/checkout.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Trials - Checkout
---
::

::header-project-section
---
title: Tutor Self-Match
---
::

Upon a successful purchase, they are automatically logged in to the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}**, where they can go through the **[Tutor Self-Match](/projects/professional/revolution-prep/revolution-prep/tutor-self-match){class="text-primary underline font-semibold"}** process to select their tutor and schedule their trial sessions.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/trial-self-match.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Trials - Self-Match
---
::

::header-project-section
---
title: Emails
---
::

Two automated reminder emails support this process:

If the user hasn't booked their trial tutoring yet and there are seven days before the trial expires, they receive a reminder email encouraging them to do so.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/email-reminder-1.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Trials - Email Reminder 1
---
::

If the user still hasn't started their trial and there are two days before the trial expires, they receive a final reminder email.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/trials/email-reminder-2.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Trials - Email Reminder 2
---
::

::header-project-section
---
title: My Contributions
---
::

This project presented an intriguing challenge due to its integration of multiple platforms: landing pages built in Wordpress and HubSpot, quizzes developed with Typeform, emails powered by Vero, and a checkout cart app built in Angular.

One of my key contributions was implementing the quiz landing page on the WordPress site, where I embedded the Typeform as a modal for a seamless user experience. 

I also developed the quiz result landing pages in HubSpot, particularly the AP Exams and Executive Functioning key concerns.

A critical integration I managed was redirecting users from the HubSpot quiz result pages to the Angular checkout cart app. This included pre-populating the cart with a trial tutor package and the user's email for a smoother transition.

Additionally, I created both trial reminder emails in Vero.

During QA rounds, I addressed and resolved bugs across various platforms and pages.

Finally, I led the implementation of analytics using Mixpanel. This work was crucial in enabling seamless tracking of the user journey across platforms, providing valuable insights to improve the experience.