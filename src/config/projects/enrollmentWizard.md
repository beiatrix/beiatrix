# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

This Enrollment Wizard is a 5-step form for incoming customers from affiliate companies to register for Revolution Prep tutoring.

![Enrollment Wizard](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-cover.gif)

## **<a style="color: var(--ion-color-dark);" name="step-1">Step 1</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

First, a parent enters the Enrollment Wizard by clicking a magic link sent in their email. On Step 1, they confirm profile information for themself and their student. For convenience, the parent's details are pre-filled with information from their affiliate reservation.

![Enrollment Wizard - Step 1](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-1.gif)

Form validation prevents a parent from moving forward without populating all required fields.

![Enrollment Wizard - Step 1 - Validation](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-1-validation.gif)

## **<a style="color: var(--ion-color-dark);" name="step-2">Step 2</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

On Step 2, the parent selects a subject for their child's tutoring. The list of subjects shown in the dropdown is scoped to the student's grade selected in the previous step.

![Enrollment Wizard - Step 2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-2.gif)

Only after a subject is selected, two more fields appear: frequency (times per week to meet) and duration (length of tutoring session). An alert indicates the default recommendation to meet: 3 times a week for 30-minute sessions (for younger students) or 60-minute sessions (for high schoolers). The frequency and duration fields are pre-popualted with these defaults depending on the student's grade.

Many subjects are offered for tutoring, but if the customer is seeking a subject that is not listed, an alert appears prompting them to connect with a Revolution Prep team member.

![Enrollment Wizard - Step 2 - Not Listed](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-2-not-listed.jpg)

## **<a style="color: var(--ion-color-dark);" name="step-3">Step 3</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

- based on your selection, changes the availabilities 
- let vendors know before we launch in January we will be deploying an improved tool for dragging and dropping availability

![Enrollment Wizard - Step 3](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-3.gif)

## **<a style="color: var(--ion-color-dark);" name="step-4">Step 4</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

- based on availability that parent selected, we generate some tutor recommendations with availabilities that align

![Enrollment Wizard - Step 4](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4.jpg)

- click tutor in slide group, look at availability calendar

![Enrollment Wizard - Step 4 - Tutor Availabilities](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4.gif)

- look at tutor profile 

![Enrollment Wizard - Step 4 - Profile](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-4-profile.gif)

## **<a style="color: var(--ion-color-dark);" name="step-5">Step 5</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

- review info submitted
- note terms and conditions card
- click terms and conditions links
	- check if Back Up Care link is live first?
- try clicking Complete without selecting checkbox
- then select checkbox and go to complete page

![Enrollment Wizard - Step 5](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-5.jpg)

## **<a style="color: var(--ion-color-dark);" name="complete">Complete</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

- student login info
- default pass

![Enrollment Wizard - Complete](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-complete.gif)

![Enrollment Wizard - Set Password](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-set-password.gif)

login to **[Student Dashboard](/projects/student-dashboard)** and begin **[scheduling sessions](/projects/scheduling-wizard)**.

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

In partnership with one other developer, we crafted a frontend architecture document.
- rebuilt the improved Student Availability Calendar in FullCalendar, now with drag-and-drop UX


- backup care wizard
	- collaborate max
		- frontend architecture document + proposed strategy
		- create tickets
	- design mocks in xd
		- collaboration with team
	- implementation
		- step 3 - rebuild availability calendar with improvements to UX, like drag and drop
		- step 4 - all components on page, like tutor slide group, tutor availability calendar
		- rebuild v2 of student availability calendar
		- scheduling = critical components!
	- led back up care improvements meetings (todo list how many)
		- UI/UX design - improve student dashboard scheduling
		- present to stakeholders (2023-11-13)

  prompted improvements to scheduling wizard. (should i mention this?)