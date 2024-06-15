# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Tutor Matching Form is designed for students who have just signed up for a Revolution Prep Private Tutoring enrollment. It allows them to confirm their program details and submit their availability for tutoring.

![Tutor Matching Form](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-cover.gif)

## **<a style="color: var(--ion-color-dark);" name="step-1">Step 1</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

First, a customer receives an email with a magic link to access the Tutor Matching Form. They will land on Step 1, where they can validate the details of their enrollment and select their tutoring start date. If any corrections are needed, they have the option to indicate changes on this page.

![Tutor Matching Form - Step 1](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-step-1.jpg)

## **<a style="color: var(--ion-color-dark);" name="step-2">Step 2</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

In Step 2, the user indicates their availability for tutoring by clicking on the calendar. The user can click and drag an availability block to move it or click the X to remove it. A counter chip in the upper right-hand corner displays how many required blocks of availability have been selected. Once the user has selected enough time in the calendar, the "Next" button in the bottom right-hand corner of the page becomes enabled.

![Tutor Matching Form - Step 2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-step-2.gif)

In 2024, we launched an improved version of this calendar, rebuilt in FullCalendar. Rather than clicking a time to generate an availability block, the user now has the flexibility to click and drag to select ranges of availability. A progress bar displays how much required availability has been selected, along with a validation card to provide more context.

![Tutor Matching Form - Step 2 - v2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-step-2-v2.gif)

Once the user has selected a sufficient amount of availability, they can click "Next" to move on to Step 3.

## **<a style="color: var(--ion-color-dark);" name="step-3">Step 3</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

In the final step, students can add "blockout" dates, or dates when they are *not* available for tutoring.

![Tutor Matching Form - Step 3](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-step-3.gif)

## **<a style="color: var(--ion-color-dark);" name="success">Success</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

Success! Now that the form has been submitted, the Revolution Prep Tutor Matching team can start finding the perfect tutor for the student's needs. A success dialog appears, communicating the next steps.

![Tutor Matching Form - Success](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-success.jpg)

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

For this project, I provided UI/UX design in Adobe XD, built a static prototype in Vue for my team to work from, and implemented the components for Step 1 and Step 2 of the form.

Here is a screenshot of design work done in XD:

![Tutor Matching Form - Designs](https://beiatrix.s3.us-west-1.amazonaws.com/projects/tutor-matching-form/tutor-matching-form-designs.jpg)

As this form is part of the **[Student Dashboard](/projects/student-dashboard#my-contributions)**, it is built in Nuxt and Vue. In Step 1, I built the Program Details and Confirmation form cards. In Step 2, I built the Student Availability Calendar: both the original version (in Vuetify) and the updated version (in FullCalendar). As a finishing touch, I added skeleton loaders for all three pages that display during page loading.