---
title: 'Enrollment Wizard'
subtitle: '@ Revolution Prep'
description: 'Revolution Prep Enrollment Wizard'
slug: 'enrollment-wizard'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-cover.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2024
technologies: [
  'Nuxt',
  'Vue'
]
private: false
featured: true
sequence: 7
---

::header-project-section
---
title: Overview
---
::

The Enrollment Wizard is a 5-step form for incoming customers from affiliate companies to register for Revolution Prep tutoring.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard
---
::

::header-project-section
---
title: Step 1
---
::

First, a parent enters the Enrollment Wizard by clicking a magic link sent to their email. In Step 1, they confirm profile information for themselves and their student. For convenience, the parent's details are pre-filled with information from their affiliate reservation.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-1.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 1
---
::

Form validation prevents a parent from moving forward without completing all required fields.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-1-validation.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 1 - Validation
---
::

::header-project-section
---
title: Step 2
---
::

In Step 2, the parent selects a subject for their child's tutoring. The list of subjects shown in the dropdown is tailored to the student's grade selected in the previous step.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-2.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 2
---
::

Once a subject is selected, two more fields appear: frequency (times per week to meet) and duration (length of tutoring sessions). An alert indicates the default recommendation to meet: 3 times a week for 30-minute sessions (for younger students) or 60-minute sessions (for high schoolers). The frequency and duration fields are pre-populated with these defaults depending on the student's grade.

Many subjects are offered for tutoring, but if the customer is seeking a subject that is not listed, an alert prompts them to connect with a Revolution Prep team member.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-2-not-listed.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 2 - Not Listed
---
::

::header-project-section
---
title: Step 3
---
::

In Step 3, the user indicates their availability for tutoring. The calendar is a revamped version of the availability calendar in the **[Tutor Matching Form](/projects/professional/revolution-prep/revolution-prep/tutor-matching-form){class="text-primary underline font-semibold"}** – now with an improved click-and-drag UX.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-3.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 3
---
::

A progress bar on the right-hand side shows how many required hours of availability have been selected and responds in real-time to the user's inputs in the calendar.

The blue alert text indicates the minimum required availability – for example, "four 120-minute time slots across four days" – which is enforced by the red validation card on the right-hand side. This requirement varies based on the frequency and duration selected on the previous screen.

::header-project-section
---
title: Step 4
---
::

In Step 4, we generate recommendations for tutors whose availabilities align with the times selected in Step 3.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-4.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 4
---
::

The parent can explore different tutors by clicking the cards in the slide group. Below, they can examine the tutor's availability in the calendar in light green and see how it overlaps with their student's availability in the darker green outlined rectangles.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-4.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 4 - Tutor Availabilities
---
::

Finally, parents can learn more about the selected tutor by reading their bio.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-4-profile.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 4 - Profile
---
::

::header-project-section
---
title: Step 5
---
::

In Step 5, the user reviews a summary of the information submitted thus far. Once they review and agree to the Terms and Conditions, they can click "Complete" to finish their enrollment.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-step-5.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Step 5
---
::

::header-project-section
---
title: Complete
---
::

Success! The complete page confirms that the enrollment has been processed and illustrates next steps. They can now log in to the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}** using the default credentials provided.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-complete.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Complete
---
::

A new user landing on the Student Dashboard for the first time must set their password.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-set-password.gif
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Set Password
---
::

Finally, they may begin **[scheduling their first tutoring sessions](/projects/professional/revolution-prep/revolution-prep/scheduling-wizard){class="text-primary underline font-semibold"}**.

::header-project-section
---
title: My Contributions
---
::

For this project, I worked with my teammates to gather product requirements, organized scoping meetings, crafted an architecture document, designed mocks for every screen in Adobe XD, and implemented the features in Step 3 and Step 4 of the Enrollment Wizard.

Here is a screenshot of the UI designs created in Adobe XD.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/enrollment-wizard/enrollment-wizard-designs.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Enrollment Wizard - Designs
---
::

In collaboration with another developer, we created an architecture document proposing a strategy for implementing the frontend. Moreover, I organized six meetings to collaborate on ticket creation and grooming, app walkthroughs, and requirements gathering for features such as the availability calendar.

Regarding my code contributions, I rebuilt the improved Student Availability Calendar in FullCalendar, now with an enhanced click-and-drag UX, a progress bar that responds to the user's inputs in the calendar, and validation to ensure that the user submits the required amount of availability. I implemented the calendar to be reusable in both Step 3 of this Enrollment Wizard and Step 2 of the **[Tutor Matching Form](/projects/professional/revolution-prep/revolution-prep/tutor-matching-form){class="text-primary underline font-semibold"}**. 

Furthermore, I built nearly all of the components on the page in Step 4: the tutor slide group, tutor availability calendar, and tutor profile card. These calendar components, which help align the user's desired tutoring schedule with those of Revolution Prep's tutors, are critical to the enrollment process.

