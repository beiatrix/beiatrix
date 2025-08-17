---
title: 'Exam Player'
subtitle: '@ Revolution Prep'
description: 'Revolution Prep exam player'
slug: 'exam-player'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/exam-player-cover.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2023
technologies: [
  'Ionic',
  'Vue'
]
private: false
featured: false
sequence: 6
---

::header-project-section
---
title: Overview
---
::

In response to the launch of the Digital SAT in 2023, Revolution Prep developed an exam player to offer students a practice exam experience that closely mirrors the official test.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/exam-player-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Exam Player - Cover
---
::

::header-project-section
---
title: Launching An Exam
---
::

To launch an exam, the student begins on the Exams page of the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}**.

Clicking the "Take Digital Exam" button opens the exam player, where the student lands on the Configure page.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/start-exam.gif
class: drop-shadow-lg rounded-lg my-2
alt: Start Exam
---
::

::header-project-section
---
title: Configure Page
---
::

On the Configure page, the student selects a test from the dropdown menus. Once an exam is selected, the "Launch Exam Now" button becomes enabled.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/configure-page.gif
class: drop-shadow-lg rounded-lg my-2
alt: Configure Page
---
::

Optionally, the student can turn on "Practice Mode," which allows them to proceed to the next portion of the exam at their earliest convenience. They may also toggle on Accommodations and Supports, such as extended time for Reading, Math, or Breaks.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/configure-page-accommodations.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Configure Page - Accommodations
---
::

::header-project-section
---
title: Instructions Page
---
::

The instruction page contains information about the exam experience.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/instructions-page.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Instructions Page
---
::

Clicking "Next" brings the student to the first question of the exam.

::header-project-section
---
title: Exam Player Panels
---
::

The exam player view is divided into two main panels: a left panel containing a passage or instructions, and a right panel with a question and answer choices. These panels may expand and collapse to conform to the student's viewing preferences.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/panels.gif
class: drop-shadow-lg rounded-lg my-2
alt: Panels
---
::

::header-project-section
---
title: Mark For Review
---
::

Clicking the bookmark icon next to a question number allows the student to mark a question for review later.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/mark-for-review.gif
class: drop-shadow-lg rounded-lg my-2
alt: Mark For Review
---
::

::header-project-section
---
title: Option Eliminator
---
::

Clicking the strikethrough "ABC" icon enables a "cross-out" feature for eliminating answer choices.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/cross-out.gif
class: drop-shadow-lg rounded-lg my-2
alt: Cross Out
---
::

::header-project-section
---
title: Question Navigator
---
::

In the footer of the exam player, a button labeled "Question X of X" keeps track of the student's progress. Clicking this button opens a popover that allows students to quickly see which questions are still unanswered or marked for review and navigate freely between the questions in the current module.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/question-navigator.gif
class: drop-shadow-lg rounded-lg my-2
alt: Question Navigator
---
::

::header-project-section
---
title: Timing
---
::

In the center of the header, a timer counts down the time remaining in the current exam module. The student can control whether the timer is visible or hidden.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/timer.gif
class: drop-shadow-lg rounded-lg my-2
alt: Timer
---
::

When a module is about to run out of time, an alert appears indicating that there are 5 minutes remaining. If time expires before the student completes the module, the answers they have submitted so far will still be saved.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/timer-5-minute-warning.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Timer - 5-Minute Warning
---
::

::header-project-section
---
title: Review Page
---
::

At the end of a module, the student can see an overview of all its questions. Here, they have an opportunity to revisit unanswered or bookmarked questions before moving forward.

In "Test Day Mode," the student is automatically advanced to the next module once the timer elapses.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/review-page-test-day-mode.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Review Page - Test Day Mode
---
::

In "Practice Mode," the student can click "Next" to move onward at any time.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/review-page-practice-mode.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Review Page - Practice Mode
---
::

::header-project-section
---
title: Reading and Writing Section
---
::

In the upper left, the directions popover describes the format of the Reading and Writing section. This popover opens automatically at the beginning of each module.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/reading-and-writing-directions.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Reading and Writing - Directions Popover
---
::

In the Reading and Writing questions, a student can highlight a portion of a passage, then click "Annotate" to write an annotation, which appears over the highlighted areas upon creation and on mouseover. The student can edit and delete their annotations as well.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/reading-and-writing-annotations.gif
class: drop-shadow-lg rounded-lg my-2
alt: Reading and Writing - Annotations
---
::

::header-project-section
---
title: Break
---
::

The Break page appears in the middle of the exam, between the Reading and Writing Section and the Math Section. It contains a timer for 10 minutes.

If a student had selected an accommodation for extended time or more frequent breaks on the Configure page, the Break page would adjust accordingly.

In "Test Day Mode," testing resumes once the break timer is over.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/break-page-test-day-mode.gif
class: drop-shadow-lg rounded-lg my-2
alt: Break Page - Test Day Mode
---
::

In "Practice Mode," the student may end their break and continue testing at any time.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/break-page-practice-mode.gif
class: drop-shadow-lg rounded-lg my-2
alt: Break Page - Practice Mode
---
::

::header-project-section
---
title: Math Section
---
::

The Directions popover outlines information about the Math Section and its two types of questions: multiple-choice questions and student-produced response questions.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/math-directions.gif
class: drop-shadow-lg rounded-lg my-2
alt: Math - Directions Popover
---
::

In the Math questions, a graphing calculator is available for the student to use.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/math-calculator.gif
class: drop-shadow-lg rounded-lg my-2
alt: Math - Calculator
---
::

Additionally, the student may open a reference sheet containing handy formulas and diagrams.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/math-reference.gif
class: drop-shadow-lg rounded-lg my-2
alt: Math - Reference
---
::

The student-produced response questions contain an input field and a preview area that renders math expressions.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/math-student-produced-response.gif
class: drop-shadow-lg rounded-lg my-2
alt: Math - Student Produced Response
---
::

::header-project-section
---
title: More Menu
---
::

In the upper right, clicking "More" opens a menu with additional options and resources.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/more-menu.jpg
class: drop-shadow-lg rounded-lg my-2
alt: More Menu
---
::

Clicking "Help" opens a modal with more information about the exam player.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/more-menu-help-modal.gif
class: drop-shadow-lg rounded-lg my-2
alt: More Menu - Help Modal
---
::

Another menu item is a toggle to turn "Practice Mode" on or off. The dashed border lines at the header and footer of the app provide a quick visual indicator: the grey border indicates that the student is in "Practice Mode," whereas the colorful dashed border indicates that the student is in "Test Day Mode."

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/more-menu-practice-mode.gif
class: drop-shadow-lg rounded-lg my-2
alt: More Menu - Practice Mode
---
::

Clicking the "Save and Exit" menu item opens a modal confirming that the student wishes to exit the test. Clicking "Save and Exit" in the modal allows the student to save their progress on their current device before being redirected back to the Student Dashboard.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/more-menu-save-and-exit.jpg
class: drop-shadow-lg rounded-lg my-2
alt: More Menu - Save and Exit
---
::

::header-project-section
---
title: Completing an Exam
---
::

When the student completes all the modules of the exam, they see the Complete Page.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/complete-page.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Complete Page
---
::

Clicking the "View Your Score" call-to-action button navigates the student back to the Student Dashboard Exams Page, where they can see their score report.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/view-score.jpg
class: drop-shadow-lg rounded-lg my-2
alt: View Score
---
::

::header-project-section
---
title: Mobile Modal
---
::

Because the Exam Player is optimized for larger screens, we display a modal to mobile users, encouraging them to use a desktop browser for the best experience.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/mobile-modal.gif
class: drop-shadow-lg rounded-lg my-2
alt: Mobile Modal
---
::

::header-project-section
---
title: Demo Version
---
::

We also created a **[Demo Version](https://digital-demo.revolutionprep.com/){class="text-primary underline font-semibold"}** of the app that is available to everyone, with no authentication required. The Demo app contains most of the same features as the Exam Player app but uses sample content.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/exam-player/demo.gif
class: drop-shadow-lg rounded-lg my-2
alt: Demo
---
::

::header-project-section
---
title: My Contributions
---
::

To develop this app, our team closely examined its precedent: the official College Board Digital SAT. We built our own recreation using Ionic and Vue 3, with Pinia for state management.

On the frontend, I was instrumental in creating a static prototype for nearly every component, providing a solid foundation on which our team could build. Early in the project, I led key pair programming sessions to collaborate on establishing the main user flows of the app. This involved setting the start of the flow on the Configure Page, followed by the Instructions page, and then conditionally rendering the Exam Player, Review page, or Break page, culminating in the Complete page.

Some of the components I worked on included the exam player header; the Help, Accommodations, and Mobile modals; the timing feature, including the 5-minute warning alert; directions in the popovers and the left panel for Student Produced Responses; and draggable containers for the Calculator and Reference Sheet. I also integrated the Desmos script for the graphing calculator and the MathJax script to render math expressions in the browser.

As a designer, I created custom icons and SVG assets in Adobe Illustrator, particularly the conditionally-colored dashed borders of the header and footer. Additionally, I worked to improve the quality of the images.

For the Demo app, I designed and built the branded header and handled some DevOps tasks, such as setting up the Vercel environment and assigning custom domains to our `main`, `staging`, and `release` branches.
