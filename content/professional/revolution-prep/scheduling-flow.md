---
title: 'Scheduling Flow'
subtitle: '@ Revolution Prep'
description: 'Revolution Prep Scheduling Flow'
slug: 'scheduling-flow'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-2.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2024
technologies: [
  'Nuxt',
  'Vue'
]
private: false
featured: false
sequence: 8
---

::header-project-section
---
title: Overview
---
::

In 2024, we launched an updated version of the Revolution Prep **[Student Dashboard - Schedule Sessions](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}** feature.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions
---
::

::header-project-section
---
title: Schedule Sessions | Version 1
---
::

To summarize Version 1 of the Schedule Sessions flow:

Beginning on the Schedule page, a student with a tutoring enrollment clicks the green "Schedule Sessions" button.

<div class="flex justify-center">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-dashboard/schedule.jpg"
    alt="Schedule Page v1"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 75%; height: auto;"
  />
</div>

Step 1: The student selects a tutor and clicks "Schedule."

<div class="flex justify-center">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-dashboard/schedule-step-1.jpg"
    alt="Schedule Sessions v1 - Step 1" 
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 75%; height: auto;"
  />
</div>

Step 2: The student selects a session time and duration. The green blocks represent their tutor's availability, broken up into chunks based on the duration selected. Clicking a time in the calendar moves them on to the next step.

<div class="flex justify-center">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-dashboard/schedule-step-2.gif"
    alt="Schedule Sessions v1 - Step 2" 
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 75%; height: auto;"
  />
</div>

Step 3: Finally, the student confirms their session details. They have the option to book repeat sessions at the same time slot for multiple weeks ahead.

<div class="flex justify-center">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-dashboard/schedule-step-3.jpg"
    alt="Schedule Sessions v1 - Step 3" 
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 75%; height: auto;"
  />
</div>

Success! Upon completing a booking, a dialog displays the list of time(s) booked. Finally, clicking "Back to my Schedule" navigates the student back to their calendar.

<div class="flex justify-center">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-dashboard/schedule-success.jpg"
    alt="Schedule Sessions v1 - Success" 
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 75%; height: auto;"
  />
</div>

**The Problem:** This user flow encourages users to select just one session time, then repeat that time slot until all their tutoring hours are consumed. However, the tutoring packages students sign up for indicate a session frequency – for example, "three 1-hour sessions per week" – that is not accounted for.

**The Solution:** Design and build a scheduling tool that incorporates session frequency alongside session duration and session time. Students will then be able to book multiple sessions per week, multiple weeks at a time, all in one go – until all their tutor package hours are consumed.

::header-project-section
---
title: Schedule Sessions | Version 2
---
::

::subheading-project-section
---
title: Schedule Page
level: 3
---
::

The student begins on the schedule page, now with a number of improvements.

We introduce the ability for students to subscribe to their tutoring calendar, so that their sessions can now appear on their personal Apple or Google calendar.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-schedule.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Schedule
---
::

In addition, the Hours Summary menu is revamped to accommodate multiple kinds of enrollments. Students can view information about all of their programs at a glance and can click a button to renew their enrollment or add more tutoring hours.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-hours-summary.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Hours Summary
---
::

As part of upgrading the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}**, the calendar is rebuilt in FullCalendar, resulting in code that is more readable and easy to maintain.

Clicking the green "Schedule Sessions" button takes the student to Step 1.

::subheading-project-section
---
title: Step 1
level: 3
---
::

The purpose of Step 1 is still the same: select a tutor to work with.

To show students more information about their enrollments, we introduce a chip component that displays the number of hours they have scheduled and how many are remaining.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-1.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 1
---
::

We also improve how we handle the case when the student has run out of tutoring hours. Clicking "Schedule" opens a call-to-action dialog that prompts the student to purchase more hours or contact customer support.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-1-reup-hours.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 1 - Re-up Hours
---
::

Clicking "Schedule" next to a tutor's name moves the student onward to Step 2.

::subheading-project-section
---
title: Step 2
level: 3
---
::

::subheading-project-section
---
title: Scheduling Calendar
level: 4
---
::

On Step 2, we introduce an improved scheduling calendar.

The light green areas indicate when the tutor is available, while the outlined rectangles indicate when the student is available. Now, the student can easily locate where their availabilities overlap and can pick an ideal time.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-2.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 2
---
::

Previously, this calendar spanned just a 4-day view. Now, the student sees a full week.

Furthermore, the student has the ability to select multiple session times.

Selecting a time shows a popover indicating that this same day and time can be repeated in future weeks.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-2.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 2
---
::

::subheading-project-section
---
title: Enrollment Details
level: 4
---
::
To continue to provide context for the student, we show a card with the name of the enrollment and tutor they are currently scheduling with. This additional reminder is helpful as a student may be working with any number of tutors across any number of Revolution Prep programs.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-2-enrollment-details.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 2 - Enrollment Details
---
::

We also display the same chip as in Step 1, with the number of tutoring hours the student has remaining.

If the student has multiple tutors, we conditionally show a "Choose another tutor" icon button. Clicking this button simply redirects the student back to Step 1.

::subheading-project-section
---
title: Session Details
level: 4
---
::

A new addition to this view is a dedicated card for the student's session details, where we show the number of times to meet per week and enable the student to update the duration and subject of their tutoring session. For convenience, all of these fields are pre-populated with the information listed on the student's enrollment.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-2-duration.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 2 - Duration
---
::

::subheading-project-section
---
title: Update Availability
level: 4
---
::

In all steps of this scheduling flow, we incorporate an "Update Availability" button. Clicking this button opens a dialog that allows students to specify when they are available and make changes in real time.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-2-availability.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 2 - Update Availability
---
::

This dialog contains a calendar that is re-used in the **[Tutor Matching Form](/projects/professional/revolution-prep/revolution-prep/tutor-matching-form){class="text-primary underline font-semibold"}** and **[Enrollment Wizard](/projects/professional/revolution-prep/revolution-prep/enrollment-wizard){class="text-primary underline font-semibold"}**. Once again, this calendar was also re-built in FullCalendar! We updated the UX to add a click-and-drag functionality to select ranges of availability.

Once the student is all done picking their times, they can click Next to move on to Step 3.

::subheading-project-section
---
title: Step 3
level: 3
---
::

Step 3 is dedicated to configuring repeat options for the session times selected in Step 2.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-3.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 3
---
::

We present a table with one row for each of the times selected in the previous step.

The left-most column, "Sessions Pending Scheduled," lists the session time.

The "Repeat For" column contains a dropdown with repeat options.
By default, we set the amount of repeats to consume all the student's available tutoring hours.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-3-repeat-dropdown.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 3 - Repeat Dropdown
---
::

The third column, "Available Repeat Sessions," contains checkboxes that allow the user to fine-tune exactly which sessions they would like to repeat. Small help text indicates if there is a holiday or if the tutor is not available on a particular date.

Modifying repeat options updates the progress bar in real time.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-3-checkboxes.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 3 - Checkboxes
---
::

We encourage the student to use all their tutoring hours. If they reserve fewer than all of their available hours, clicking the "Schedule Hours" button opens a confirmation dialog.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-step-3-are-you-sure.gif
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Step 3 - Are You Sure
---
::

Otherwise, if the student has selected all their remaining hours to be scheduled, clicking "Schedule Hours" takes them directly to the final view: the success dialog!

::subheading-project-section
---
title: Success
level: 3
---
::

This view re-uses the existing success dialog seen in v1 of the Schedule Sessions flow, this time with simplified copy.

We add a new feature prompting the user to add sessions to their personal calendar by clicking "Add to iCal" or "Add to Google Calendar." This alert component is also re-used in the Schedule page.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-success.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Success
---
::

::header-project-section
---
title: My Contributions
---
::

For this project's development in late 2023 and launch in early 2024, I collaborated closely with Product and Engineering team members to determine product requirements, designed UI/UX for every screen in Adobe XD, and built the critical calendar components.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/scheduling-flow/schedule-sessions-design.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Schedule Sessions - Design
---
::

Over two meetings, I presented the designs to stakeholders, gathered and incorporated feedback, and ultimately helped win buy-in to move forward with building our design. Furthermore, I led six meetings ranging across scoping, design reviews, development kickoff, and ticket creation & distribution.

As this scheduling flow is part of our **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}** and monorepo ecosystem, it is built in Nuxt and Vue. My primary contribution was implementing the revamped scheduling calendar, migrating from Vuetify to FullCalendar, and enabling real-time updates to the availability display with Pusher. Additionally, I made updates to the confirmation and success dialog components, and continuously provided bug fixes and improvements post-launch.