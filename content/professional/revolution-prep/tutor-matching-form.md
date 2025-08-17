---
title: 'Tutor Matching Form'
subtitle: '@ Revolution Prep'
description: 'Form to help students match with a tutor'
slug: 'tutor-matching-form'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-cover.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2022
technologies: [
  'Nuxt',
  'Vue'
]
private: false
featured: false
sequence: 3
---

::header-project-section
---
title: Overview
---
::

The Tutor Matching Form is designed for students who have just signed up for a Revolution Prep Private Tutoring enrollment. It allows them to confirm their program details and submit their availability for tutoring.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form
---
::

Revolution Prep team members use the information gathered in this form in order to hand-select a perfect tutor match for the student. This process is further optimized in the **[Tutor Self-Match](/projects/professional/revolution-prep/revolution-prep/tutor-self-match){class="text-primary underline font-semibold"}** flow.

::header-project-section
---
title: Step 1
---
::

First, a customer receives an email with a magic link to access the Tutor Matching Form. They will land on Step 1, where they can validate the details of their enrollment and select their tutoring start date. If any corrections are needed, they have the option to indicate changes on this page.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-step-1.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form - Step 1
---
::

::header-project-section
---
title: Step 2
---
::

In Step 2, the user indicates their availability for tutoring by clicking on the calendar. The user can click and drag an availability block to move it or click the X to remove it. A counter chip in the upper right-hand corner displays how many required blocks of availability have been selected. Once the user has selected enough time in the calendar, the "Next" button in the bottom right-hand corner of the page becomes enabled.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-step-2.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form - Step 2
---
::

In 2024, we launched an improved version of this calendar, rebuilt in FullCalendar. Rather than clicking a time to generate an availability block, the user now has the flexibility to click and drag to select ranges of availability. A progress bar displays how much required availability has been selected, along with a validation card to provide more context.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-step-2-v2.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form - Step 2 - v2
---
::

Once the user has selected a sufficient amount of availability, they can click "Next" to move on to Step 3.

::header-project-section
---
title: Step 3
---
::

In the final step, students can add "blockout" dates, or dates when they are *not* available for tutoring.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-step-3.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form - Step 3
---
::

::header-project-section
---
title: Success
---
::

Success! Now that the form has been submitted, the Revolution Prep Tutor Matching team can start finding the perfect tutor for the student's needs. A success dialog appears, communicating the next steps.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-success.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form - Success
---
::

::header-project-section
---
title: My Contributions
---
::

For this project, I provided UI/UX design in Adobe XD, built a static prototype in Vue for my team to work from, and implemented the components for Step 1 and Step 2 of the form.

Here is a screenshot of design work done in XD:

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-matching-form/tutor-matching-form-designs.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching Form - Designs
---
::

As this form is part of the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}**, it is built in Nuxt and Vue. In Step 1, I built the Program Details and Confirmation form cards. In Step 2, I built the Student Availability Calendar: both the original version (in Vuetify) and the updated version (in FullCalendar). As a finishing touch, I added skeleton loaders for all three pages that display during page loading.