# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Enrollment Wizard is a 5-step form for incoming customers from affiliate companies to register for Revolution Prep tutoring.

![Enrollment Wizard](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-cover.gif)

## **<a style="color: var(--ion-color-dark);" name="step-1">Step 1</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

First, a parent enters the Enrollment Wizard by clicking a magic link sent to their email. In Step 1, they confirm profile information for themselves and their student. For convenience, the parent's details are pre-filled with information from their affiliate reservation.

![Enrollment Wizard - Step 1](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-1.gif)

Form validation prevents a parent from moving forward without completing all required fields.

![Enrollment Wizard - Step 1 - Validation](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-1-validation.gif)

## **<a style="color: var(--ion-color-dark);" name="step-2">Step 2</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

In Step 2, the parent selects a subject for their child's tutoring. The list of subjects shown in the dropdown is tailored to the student's grade selected in the previous step.

![Enrollment Wizard - Step 2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-2.gif)

Once a subject is selected, two more fields appear: frequency (times per week to meet) and duration (length of tutoring sessions). An alert indicates the default recommendation to meet: 3 times a week for 30-minute sessions (for younger students) or 60-minute sessions (for high schoolers). The frequency and duration fields are pre-populated with these defaults depending on the student's grade.

Many subjects are offered for tutoring, but if the customer is seeking a subject that is not listed, an alert prompts them to connect with a Revolution Prep team member.

![Enrollment Wizard - Step 2 - Not Listed](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-2-not-listed.jpg)

## **<a style="color: var(--ion-color-dark);" name="step-3">Step 3</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

In Step 3, the user indicates their availability for tutoring. The calendar is a revamped version of the availability calendar in the **[Tutor Matching Form](/projects/tutor-matching-form)** – now with an improved click-and-drag UX.

![Enrollment Wizard - Step 3](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-3.gif)

A progress bar on the right-hand side shows how many required hours of availability have been selected and responds in real-time to the user's inputs in the calendar.

The blue alert text indicates the minimum required availability – for example, "four 120-minute time slots across four days" – which is enforced by the red validation card on the right-hand side. This requirement varies based on the frequency and duration selected on the previous screen.

## **<a style="color: var(--ion-color-dark);" name="step-4">Step 4</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

In Step 4, we generate recommendations for tutors whose availabilities align with the times selected in Step 3.

![Enrollment Wizard - Step 4](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4.jpg)

The parent can explore different tutors by clicking the cards in the slide group. Below, they can examine the tutor's availability in the calendar in light green and see how it overlaps with their student's availability in the darker green outlined rectangles.

![Enrollment Wizard - Step 4 - Tutor Availabilities](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4.gif)

Finally, parents can learn more about the selected tutor by reading their bio.

![Enrollment Wizard - Step 4 - Profile](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4-profile.gif)

## **<a style="color: var(--ion-color-dark);" name="step-5">Step 5</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

In Step 5, the user reviews a summary of the information submitted thus far. Once they review and agree to the Terms and Conditions, they can click "Complete" to finish their enrollment.

![Enrollment Wizard - Step 5](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-5.jpg)

## **<a style="color: var(--ion-color-dark);" name="complete">Complete</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

Success! The complete page confirms that the enrollment has been processed and illustrates next steps. They can now log in to the **[Student Dashboard](/projects/student-dashboard)** using the default credentials provided.

![Enrollment Wizard - Complete](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-complete.gif)

A new user landing on the Student Dashboard for the first time must set their password.

![Enrollment Wizard - Set Password](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-set-password.gif)

Finally, they may begin **[scheduling their first tutoring sessions](/projects/scheduling-wizard)**.

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

For this project, I worked with my teammates to gather product requirements, organized scoping meetings, crafted an architecture document, designed mocks for every screen in Adobe XD, and implemented the features in Step 3 and Step 4 of the Enrollment Wizard.

Here is a screenshot of the UI designs created in Adobe XD.

![Enrollment Wizard - Designs](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-designs.jpg)

In collaboration with another developer, we created an architecture document proposing a strategy for implementing the frontend. Moreover, I organized six meetings to collaborate on ticket creation and grooming, app walkthroughs, and requirements gathering for features such as the availability calendar.

Regarding my code contributions, I rebuilt the improved Student Availability Calendar in FullCalendar, now with an enhanced click-and-drag UX, a progress bar that responds to the user's inputs in the calendar, and validation to ensure that the user submits the required amount of availability. I implemented the calendar to be reusable in both Step 3 of this Enrollment Wizard and Step 2 of the **[Tutor Matching Form](/projects/tutor-matching-form)**. 

Furthermore, I built nearly all of the components on the page in Step 4: the tutor slide group, tutor availability calendar, and tutor profile card. These calendar components, which help align the user's desired tutoring schedule with those of Revolution Prep's tutors, are critical to the enrollment process.

