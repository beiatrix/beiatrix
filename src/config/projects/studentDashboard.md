## Background

The Student Dashboard is a web app where Revolution Prep students can schedule and join sessions with their tutors, take practice exams, and access many other resources.

#### Activity Feed

![Activity Feed](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/student-dashboard.png)

Upon logging in, the student lands on their home page: the Activity Feed. Here, the student receives a variety of personalized updates, such as welcome messages upon enrolling in tutoring or test prep programs, reminders for upcoming sessions, and calls to action to score their practice exams.

#### Schedule

On the Schedule page, the student can manage their sessions.

[img: calendar view]

The calendar displays their schedule at a glance.
Past sessions are shown in grey, launchable sessions are green, sessions that are not editable are in a darker blue with a lock icon, and editable sessions are shown in a lighter blue.

[img: list view]

They also have the option to view their sessions in a list.

[img: session detail]

Selecting a session in the calendar or list opens the session detail dialog, where the student can upload attachments for their tutor to review.

[img: edit session dialog]

The student may also have the option to edit their session by clicking "Edit Session." Here the student can update the session time, duration, and subject(s).

[img: event dialog]

Selecting a date in the calendar opens the Event Dialog, where a student can add or modify events.

[img: menu hours summary]

A student can manage their sessions by selecting the Menu Hours Summary.

[img: add hours]

Students with Private Tutoring enrollments have the ability to add more hours to their program in this purchase dialog.

#### Schedule Sessions

Clicking "Schedule Sessions" on the Schedule page launches the scheduling flow: a 3-step process.

Step 1: First, the student selects a tutor.

Step 2: Next, the student selects a session time and duration. The green blocks represent their tutor's availability, broken up into chunks based on the duration selected.

Step 3: Finally, the student confirms their session details.

#### Help Now

Help Now is our on-demand tutoring service that allows students to receive homework help from a tutor via text chat or video.

First, the student selects which modality they prefer. They always have the option to toggle between video and chat by making a selection in the app bar.

If they select video,

If the yselect text,

#### Videos

On the Videos page, the student can access helpful content across various test-prep related subjects.

#### Exams

On the Exams page, the student can view transcripts for their practice exams. A chart tracks their progress if they have multiple scores.

The Download Exams button opens a dialog where the student can download practice exams and answer sheets.

Clicking the Self Proctor button launches a flow to self-administer a practice exam.

The Score Exam button launches an exam scoring flow, where the student submits their practice exam answers and receives a score.

Finally, the Take Digital Exam button launches our Digital SAT Exam Player.

#### Profile

#### Help

#### Global components

My subjects modal

Live Now banner

Notification toasts?

Snackbar - refresh to update?

Reviews?

## My Contributions


- gather requirements, design UI with Adobe XD, build features in Vue and Nuxt, test, and provide improvements and bug fixes for Student Dashboard.
- was instrumental in executing the modern look and feel.
- had my hand in the design and development of every single page and made the greatest quantity of contributions to the codebase.
    - Activity Feed
    - Schedule page, heartbeat of the application - students schedule sessions with tutors
        - realtime updates with Pusher
        - calendar ticket: https://revolutionprep.atlassian.net/browse/HD-145
    - Help Now! (formerly "homework help")
    - Videos page
    - Exams page
    - Profile page
    - Help page
    - Subjects modal
- continue to add features to support key business initiatives, such as addition of Revolution Now (Chat) product and Digital Exams
- created NPM package for reusable fixtures, used for testing across multiple repositories across our organization
    - DRY up code and improve developer experience
- 2024 update: upgrade of the entire system. rewrite Nuxt 2 / Vue 2 to Nuxt 3 / Vue 3.
  - challenged myself to improve my devops skills: automated CI/CD pipeline
  - architected versioning and publishing strategy
  - deployment
  - bundle packages