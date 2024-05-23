## **Background**

The Student Dashboard is a web app where Revolution Prep students can schedule and join sessions with their tutors, take practice exams, and access many other resources.

#### **Activity Feed**

Upon logging in, the student lands on their home page: the Activity Feed. Here, the student receives a variety of personalized updates, such as welcome messages upon enrolling in tutoring or test prep programs, reminders for upcoming sessions, and calls to action to score their practice exams.

![Activity Feed](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/student-dashboard.jpg)


#### **Schedule**

On the Schedule page, the student can manage their sessions.

**[TODO] calendar view**

The calendar displays their schedule at a glance.
Past sessions are shown in grey, launchable sessions are green, sessions that are not editable are in a darker blue with a lock icon, and editable sessions are shown in a lighter blue.

**[TODO] list view**

They also have the option to view their sessions in a list.

**[TODO] session detail**

Selecting a session in the calendar or list opens the session detail dialog, where the student can upload attachments for their tutor to review.

**[TODO] edit session dialog**

The student may also have the option to edit their session by clicking "Edit Session." Here the student can update the session time, duration, and subject(s).

**[TODO] event dialog**

Selecting a date in the calendar opens the Event Dialog, where a student can add or modify events.

**[TODO] menu hours summary**

A student can manage their sessions by selecting the Menu Hours Summary.

**[TODO] add hours**

Students with Private Tutoring enrollments have the ability to add more hours to their program in this purchase dialog.

#### **Schedule Sessions**

Clicking "Schedule Sessions" on the Schedule page launches the scheduling flow: a 3-step process.

**[TODO] Schedule Step 1**

Step 1: First, the student selects a tutor.

**[TODO] Schedule Step 2**

Step 2: Next, the student selects a session time and duration. The green blocks represent their tutor's availability, broken up into chunks based on the duration selected.

**[TODO] Schedule Step 3**

Step 3: Finally, the student confirms their session details.

#### **Help Now**

Help Now is a service that allows students to receive on-demand homework help from a tutor via text chat or video.

First, a dialog appears, prompting the student to select a delivery method. They always have the option to toggle between video and chat by making a selection in the app bar.

If they select video,

If they select text,

![Help Now - Delivery Method](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/help-now-delivery-method.gif)

![Help Now - Subjects](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/help-now-subjects.jpg)

![Help Now - Live Now](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/help-now-live-now.jpg)

![Help Now - Upcoming](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/help-now-upcoming.jpg)

**[TODO] Reviews modal**

#### **Videos**

On the Videos page, the student can access helpful content across various test-prep related subjects.

![Videos](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/videos.jpg)

Upon clicking a subject, the student can browse the videos in that showcase:
![Videos Subject](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/videos-subject.jpg)

They can also click the magnifying glass to perform a quick search:
![Videos Search](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/videos-search.jpg)

Selecting a video title brings the student to the viewing page:
![Videos Watch](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/videos-watch.jpg)

#### **Exams**

On the Exams page, the student can view transcripts for their practice exams. A chart tracks their progress if they have multiple scores.

![Exams](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/exams.jpg)

The Download Exams button opens a dialog where the student can download practice exams and answer sheets.

**[TODO] download exams**

Clicking the Self Proctor button launches a flow to self-administer a practice exam.

**[TODO] self proctor**

The Score Exam button launches an exam scoring flow, where the student submits their practice exam answers and receives a score.

**[TODO] score exam**

Finally, the Take Digital Exam button launches our [Digital SAT Exam Player](/projects/digital-exam-player).

#### **Profile**

The Profile page is where the student can edit their personal details.

![Profile](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/profile.jpg)

It also has one of my favorite features I've worked on: the avatar editor!

![Profile Avatar](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/profile-avatar.jpg)

#### **Help**

The Help page contains a quick reference for students find answers to frequently asked questions about the student dashboard or Revolution Prep programs, or access customer support.

![Help](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/help.jpg)


## **My Contributions**

___

For the initial launch of the Student Dashboard, I helped gather requirements, design UI/UX with Adobe XD, build features in Vue and Nuxt, write unit tests with Jest, and provide continuous improvements and bug fixes post-launch. 

This Student Dashboard is the successor to a legacy app built in AngularJS. I was instrumental in crafting the modern look and feel of the next-generation apps. Here are some screenshots of the legacy student dashboard:

**[TODO] legacy dashboard**

Here are some screenshots of work done in XD to refresh the design:

**[TODO] XD designs**

I had my hand in the design and development of every single page. Among my biggest code contributions were in the Schedule page and Schedule Sessions views, which contained a critical functionality: allowing students to schedule and manage sessions with their tutors. I built the calendar components initially with Vuetify before rewriting them in FullCalendar. Realtime updates to sessions and availabilities are powered by Pusher.

This student dashboard is part of a monorepo that also contains the next generations of our internal admin and tutor dashboards. Another contribution I made (that can't be seen in screenshots!) is an NPM package for reusable fixtures, used for writing unit testing across multiple apps and repositories across the organization. This package helped [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) up our testing code and improve our team's Developer Experience.

Over the years, we continued to add many features to support key business initiatives, such as the addition of [Student Profile Forms](/projects/student-profile), [Digital SAT Exam Player](/projects/digital-exam-player), and [Enrollment Wizard](/projects/enrollment-wizard).

In 2024 we released a major update to the platform: a rewrite of the entire monorepo from Nuxt 2 / Vue 2 to Nuxt 3 / Vue 3. For this upgrade, I challenged myself to improve my DevOps skills by architecting an automated CI/CD pipeline that handled versioning and publishing with Changesets, deployment with Vercel, bundling packages in Turborepo with `tsup`, and GitHub Actions to build,lint, and test our feature PRs.
