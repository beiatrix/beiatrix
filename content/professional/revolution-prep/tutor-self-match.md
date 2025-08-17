---
title: 'Tutor Self-Match'
subtitle: '@ Revolution Prep'
description: 'A flow that enables students to match with a tutor by themselves'
slug: 'tutor-self-match'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/self-match-cover.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2024
technologies: [
  'Nuxt',
  'Vue'
]
private: false
featured: false
sequence: 9
---

::header-project-section
---
title: Overview
---
::

The Tutor Self-Match flow enables students to match with their own Revolution Prep tutor based on their preferred tutoring subject and availability.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/self-match-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match
---
::

This flow is the successor to a manual process where a Revolution Prep team member would gather information from the **[Tutor Matching Form](/projects/professional/revolution-prep/revolution-prep/tutor-matching-form){class="text-primary underline font-semibold"}** to hand-select a tutor for the student.

::header-project-section
---
title: Add A Tutor
---
::

The process begins on the Schedule Sessions page of the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}**. Clicking the "Add A Tutor" button takes them to Step 1 of the matching form.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/self-match-begin.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Begin
---
::

::header-project-section
---
title: Step 1
---
::

On Step 1, the student chooses their desired tutoring subject, session duration, and frequency for tutoring. After completing these fields, they can click "Continue: Availability" to move on to the next step.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-1-subject.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 1
---
::

::header-project-section
---
title: Step 2
---
::

On Step 2, the student indicates their availability on the calendar. Help text indicates how much availability is required, while the progress bar keeps track of how much time has been selected. Once the progress bar turns green, the student can click "Continue: Schedule" to move on to the final step.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-2-availability.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 2
---
::

This availability calendar is re-used in a few other places, such as the **[Scheduling Flow](/projects/professional/revolution-prep/revolution-prep/scheduling-flow){class="text-primary underline font-semibold"}** and **[Enrollment Wizard](/projects/professional/revolution-prep/revolution-prep/enrollment-wizard){class="text-primary underline font-semibold"}**.

::header-project-section
---
title: Step 3
---
::

As the student enters Step 3 of the flow, an interstitial plays as the tutor-matching algorithm calculates a best match.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-interstitial.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Interstitial
---
::

A dialog then presents the student with their recommended tutor.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-result-dialog.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Result Dialog
---
::

The student can now select their desired session times with their recommended tutor.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-select-times.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Select Times
---
::

They have the option to expand "See alternative tutors" and browse their schedules as well.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-alternative-tutors.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Alternative Tutors
---
::

Clicking "Read more" opens a dialog with the tutor's profile information.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-tutor-dialog.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Tutor Dialog
---
::

If the student selects fewer than all of their available hours, a dialog appears encouraging them to book more.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-underbooked-hours-dialog.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Underbooked Hours Dialog
---
::

Once their preferred session times are booked, a success modal appears.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/step-3-success-dialog.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Step 3 - Success Dialog
---
::

Closing this modal returns them to the Schedule Sessions page. Now, they may click "Book Session" with their existing tutor to access the **[Scheduling Flow](/projects/professional/revolution-prep/revolution-prep/scheduling-flow){class="text-primary underline font-semibold"}**, or click "Add A Tutor" to match with another tutor once more.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/self-match-end.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - End
---
::

::header-project-section
---
title: Emails
---
::

This project also involves some smart reminder emails.

When a student first purchases their tutoring enrollment, they'll receive an automated email prompting them to enter the Self-Match flow. Clicking the call-to-action button navigates them to the Student Dashboard, with their login information pre-populated (for first-time users), and a smart redirect into the Schedule Sessions page.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/self-match-email.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Email
---
::

If it has been a couple of days and the student still hasn't initiated the matching process, a reminder email is sent.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/tutor-self-match/self-match-email-reminder.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Self-Match - Email Reminder
---
::

::header-project-section
---
title: My Contributions
---
::

My contributions to this project include scoping and building out the Schedule Sessions page, the Step 1 (Subject) page, and Step 2 (Availability) page in our Nuxt/Vue Student Dashboard app. Under the hood, I did foundational work spanning across all of the Self-Match pages, including a new layout, shared components such as the footer, and composables to house reusable logic. During periods of QA, I addressed bug fixes across all pages.

Additionally, I worked on the Self-Match reminder emails in Vero, and enhanced the Student Dashboard login page by enabling auto-population of login credentials and redirecting to a specified page upon authentication. Further, I updated our checkout cart app, built in Angular, to automatically log users into the Student Dashboard upon completing checkout, streamlining the experience by saving extra clicks.

Finally, I led the implementation of analytics for this product. I partnered with the Product team to define requirements, scoped and ticketed the body of work, selected an analytics vendor, and integrated Mixpanel to track events and build funnel reports. This initiative enables the team to identify drop-off points in the flow and to continually improve the experience for our users.