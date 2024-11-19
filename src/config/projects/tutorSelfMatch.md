# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Tutor Self-Match flow enables students to match with their own Revolution Prep tutor based on their preferred tutoring subject and availability.

![Tutor Self-Match](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/self-match-cover.gif)

This flow is the successor to a manual process where a Revolution Prep team member would gather information from the **[Tutor Matching Form](/projects/tutor-matching-form)** to hand-select a tutor for the student.

## **<a style="color: var(--ion-color-dark);" name="add-a-tutor">Add A Tutor</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

The process begins on the Schedule Sessions page of the **[Student Dashboard](/projects/student-dashboard)**. Clicking the "Add A Tutor" button takes them to Step 1 of the matching form.

![Tutor Self-Match - Begin](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/self-match-begin.jpg)

## **<a style="color: var(--ion-color-dark);" name="step-1">Step 1</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

On Step 1, the student chooses their desired tutoring subject, session duration, and frequency for tutoring. After completing these fields, they can click "Continue: Availability" to move on to the next step.

![Tutor Self-Match - Step 1](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-1-subject.jpg)

## **<a style="color: var(--ion-color-dark);" name="step-2">Step 2</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

On Step 2, the student indicates their availability on the calendar. Help text indicates how much availability is required, while the progress bar keeps track of how much time has been selected. Once the progress bar turns green, the student can click "Continue: Schedule" to move on to the final step.

![Tutor Self-Match - Step 2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-2-availability.gif)

This availability calendar is re-used in a few other places, such as the **[Scheduling Flow](/projects/scheduling-flow)** and **[Enrollment Wizard](/projects/enrollment-wizard)**.

## **<a style="color: var(--ion-color-dark);" name="step-3">Step 3</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

As the student enters Step 3 of the flow, an interstitial plays as the tutor-matching algorithm calculates a best match.

![Tutor Self-Match - Step 3 - Interstitial](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-interstitial.gif)

A dialog then presents the student with their recommended tutor.

![Tutor Self-Match - Step 3 - Result Dialog](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-result-dialog.jpg)

The student can now select their desired session times with their recommended tutor.

![Tutor Self-Match - Step 3 - Select Times](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-select-times.gif)

They have the option to expand "See alternative tutors" and browse their schedules as well.

![Tutor Self-Match - Step 3 - Alternative Tutors](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-alternative-tutors.jpg)

Clicking "Read more" opens a dialog with the tutor's profile information.

![Tutor Self-Match - Step 3 - Tutor Dialog](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-tutor-dialog.jpg)

If the student selects fewer than all of their available hours, a dialog appears encouraging them to book more.

![Tutor Self-Match - Step 3 - Underbooked Hours Dialog](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-underbooked-hours-dialog.jpg)

Once their preferred session times are booked, a success modal appears.

![Tutor Self-Match - Step 3 - Success Dialog](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/step-3-success-dialog.jpg)

Closing this modal returns them to the Schedule Sessions page. Now, they may click "Book Session" with their existing tutor to access the **[Scheduling Flow](/projects/scheduling-flow)**, or click "Add A Tutor" to match with another tutor once more.

![Tutor Self-Match - End](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/self-match-end.jpg)

# **<a style="color: var(--ion-color-dark);" name="emails">Emails</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

This project also involves some smart reminder emails.

When a student first purchases their tutoring enrollment, they'll receive an automated email prompting them to enter the Self-Match flow. Clicking the call-to-action button navigates them to the Student Dashboard, with their login information pre-populated (for first-time users), and a smart redirect into the Schedule Sessions page.

![Tutor Self-Match - Email](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/self-match-email.jpg)

If it has been a couple of days and the student still hasn't initiated the matching process, a reminder email is sent.

![Tutor Self-Match - Email Reminder](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-self-match/self-match-email-reminder.jpg)

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

My contributions to this project include scoping and building out the Schedule Sessions page, the Step 1 (Subject) page, and Step 2 (Availability) page in our Nuxt/Vue Student Dashboard app. Under the hood, I did foundational work spanning across all of the Self-Match pages, including a new layout, shared components such as the footer, and composables to house reusable logic. During periods of QA, I addressed bug fixes across all pages.

Additionally, I worked on the Self-Match reminder emails in Vero, and enhanced the Student Dashboard login page by enabling auto-population of login credentials and redirecting to a specified page upon authentication. Further, I updated our checkout cart app, built in Angular, to automatically log users into the Student Dashboard upon completing checkout, streamlining the experience by saving extra clicks.

Finally, I led the implementation of analytics for this product. I partnered with the Product team to define requirements, scoped and ticketed the body of work, selected an analytics vendor, and integrated Mixpanel to track events and build funnel reports. This initiative enables the team to identify drop-off points in the flow and to continually improve the experience for our users.