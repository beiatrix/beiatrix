---
title: 'Mobile App'
subtitle: '@ Revolution Prep'
description: 'Mobile app for Revolution Prep students built with Ionic/Vue.'
slug: 'mobile-app'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/mobile-app-cover-horizontal.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2022
technologies: [
  'Ionic',
  'Vue'
]
private: false
featured: false
sequence: 4
---

::header-project-section
---
title: Overview
---
::

The Revolution Prep mobile app allows students to launch live help sessions with their tutors and easily score practice exams using their camera. It is available for download on the App Store and Google Play Store.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/mobile-app-cover.gif"
      alt="Mobile App" 
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::header-project-section
---
title: Login
---
::

When the student downloads the app for the first time, they see the home screen on the left below. Tapping "log in" takes them to the login form, where they can authenticate to enter the app. Alternatively, tapping "forgot password" allows the user to reset their password.

<div class="flex justify-between gap-3 mb-6">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/landing.jpg"
    alt="Landing View"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 30%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/login.jpg"
    alt="Login View"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 30%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/forgot-password.jpg"
    alt="Forgot Password View"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 30%; height: auto;"
  />
</div>

::header-project-section
---
title: Live Help
---
::

Upon logging in, the user is taken to the Live Help view by default.

If this is the user's first time ever logging in, they may tap "Let me see the sessions!" to opt into a free trial of Revolution Now – a service that allows students to connect with a tutor for quick questions or homework help.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/help-now-trial.jpg"
      alt="Help Now Trial"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Once the student is enrolled in Revolution Now, this is the default view they will see. At the top, chips indicate the next available session time and the number of free sessions available. The centerpiece is a slide group of cards displaying upcoming tutoring sessions. The lower half of the page contains list items of the student's study areas.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/live-help.jpg"
      alt="Live Help"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Tapping the "What is this anyway?" banner opens a marketing modal with more information about the Revolution Now program.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/marketing-modal.gif"
      alt="Marketing Modal"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

At the bottom of the page, students can tap "Edit Subjects" to open a subject selection modal. Adding a subject allows the student to view sessions for that subject right away.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/select-subjects-modal.gif"
      alt="Select Subjects Modal"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

In the slide group of session cards, a student can tap "Save Spot" to easily reserve their spot with a tutor. Tapping this button opens a detail view for their session. When they return to the main Live Help screen, they can now see their reservation under a section called "Reserved Sessions."

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/save-spot.gif"
      alt="Save Spot"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Below "Reserved Sessions" is a "Browse Schedules" session. Tapping a subject name allows the student to see all the upcoming tutoring availabilities for that subject.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/subject-show.gif"
      alt="Subject Show Page"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

To cancel a reservation, the student can tap an "Unreserve" button in the session detail view. They can do so by tapping either the "Details" button of a session card or a session list item under "Reserved Sessions."

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/unreserve.gif"
      alt="Unreserve Session"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::subheading-project-section
---
title: Empty States
level: 3
---
::

If a student has no subjects selected, an alert prompts them to pick some areas of study to get started.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/no-subjects.jpg"
      alt="No Subjects"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

If there are no upcoming sessions for a student's subjects, a "No Upcoming Sessions" banner appears in lieu of a session slide group.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/no-sessions.jpg"
      alt="No Sessions"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::header-project-section
---
title: Exams
---
::

::subheading-project-section
---
title: Exams View
level: 3
---
::

Tapping "Exams" in the footer tab navigator takes the student to the Exams view. Here, the student can see an overview of their exam scores, use their camera to score an exam, or use the self-proctor feature to administer a practice exam.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/exams.jpg"
      alt="Exams"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::subheading-project-section
---
title: Score Exam
level: 3
---
::

When the user taps "Score Exam" for the first time ever, they will see tutorial slides followed by a prompt to grant permission to access the camera.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/help-slides-preview.gif"
      alt="Help Slides - Preview"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Once permissions are granted, the student can use their camera to snap photos of their exam.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/score-exam.gif"
      alt="Score Exam"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Once all the images have been uploaded, a first-time user will see help slides showing the student how to review their submitted answers.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/help-slides-review.gif"
      alt="Help Slides - Review"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

The student has the option to tap the magnifying glass button to edit their answer bubbles directly on the photo.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/review-photo.gif"
      alt="Review - Photo"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

They also have the option to tap the "Edit" button to check their answers in a modal.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/review-modal.gif"
      alt="Review - Modal"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

When they're finished reviewing their answers, clicking "Submit" opens a celebratory score announcement modal if this is the first exam score they've ever submitted.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/score-announcement-modal.gif"
      alt="Score Announcement Modal"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

For returning users, tapping "Submit" takes the student to their transcript page.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/submit-score.gif"
      alt="Submit Score"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

To learn more, the student can tap a list item to view an in-depth score report.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/score-report.gif"
      alt="Score Report"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::subheading-project-section
---
title: Self Proctor
level: 3
---
::

From the Exams home page, tapping "Self Proctor" takes them to a view where the student can select an exam to proctor. They have the option to proctor a full exam or target specific sections.

<div class="flex justify-between gap-3">
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/self-proctor.jpg"
    alt="Self Proctor"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 30%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/self-proctor-sections.jpg"
    alt="Self Proctor - Sections"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 30%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/self-proctor-start.jpg"
    alt="Self Proctor - Start"
    class="drop-shadow-lg rounded-lg my-2"
    style="width: 30%; height: auto;"
  />
</div>

Tapping "Download Answersheet" allows the student to get an answer sheet PDF for their selected exam.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/download-answersheet.gif"
      alt="Download Answersheet"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Tapping "Start Exam" launches the proctoring feature. It comprises a timer with audible cues that notify the student when a section is beginning or ending, or announce a break in between sections. Ambient illustrations float in the background, with ambient room sounds that may be toggled on or off. The stop button allows the student to exit the flow, and the skip button enables them to skip to the next section.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/live-proctor.gif"
      alt="Live Proctor"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

If the student sends the app to the background, they can see a notification with details about their in-progress exam.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/self-proctor-notification.gif"
      alt="Self Proctor - Notification"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Once the proctored exam is complete, a "Congratulations" message appears, encouraging the student to score their exam. Tapping "Score Exam" takes the student to the exam scoring flow.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/self-proctor-congratulations.jpg"
      alt="Self Proctor - Congratulations"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::header-project-section
---
title: Header and Footer
---
::

The app bar that appears at the top of the Live Help and Exams views contains the page title and the student's avatar. The student can tap their avatar to open their profile menu, which contains their user information, Revolution Prep's company contact information, and a Logout button.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/profile-menu.gif"
      alt="Profile Menu"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

The footer tab navigator allows the user to switch between the main views of the app.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/footer.gif"
      alt="Footer"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::header-project-section
---
title: Notifications
---
::

A student logging in for the very first time will see a modal prompting them to allow notifications.

<div class="flex justify-center gap-6">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/notifications-modal.jpg"
      alt="Notifications Modal"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/notifications-prompt.jpg"
      alt="Notifications Prompt"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

Once permissions are granted, students can receive session reminders on their device. Tapping the notification opens a modal enabling the student to quickly join their session.

<div class="flex justify-center">
  <div style="width: 30%; height: auto;">
    <img 
      src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/mobile-app/session-notification.gif"
      alt="Session Notification"
      class="drop-shadow-lg rounded-lg my-2"
    />
  </div>
</div>

::header-project-section
---
title: My Contributions
---
::

As a developer, I built various features across the two main views of the app in Ionic and Vue, implemented state management in Pinia, wrote unit tests in Jest, helped prepare the app for publishing to the app stores, and provided bug fixes and improvements post-launch.

In the Exams view, I worked on the exam summary page, the score report page containing a ChartJS graph and list of scored exams, and the entirety of the self-proctor feature (comprising a start page, various modals, functions to interact with the filesystem for the "Download Answersheet" button, the timer feature with floating SVG images, and local notifications).

In the Live Help view, I developed the marketing card, the next live session and remaining sessions chips, and the "Browse Schedules" session.

Furthermore, I pitched in towards the push notifications feature and built the modal to request notification permissions.

I also worked on some global elements, including the header app bar and footer tab navigator, and performed a styling pass across all views of the app.

Finally, I prepared screenshots showcasing the mobile app for our App Store listings and helped submit the app to the App Store and Google Play Store for review and publishing.

In 2023, I was given the opportunity to lead the technical effort for a major update to the mobile app: the addition of **[Mobile Chat](/projects/professional/revolution-prep/revolution-prep/mobile-chat){class="text-primary underline font-semibold"}**.
