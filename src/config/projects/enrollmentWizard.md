# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

*Overview of Enrollment Wizard*

![Enrollment Wizard](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-cover.gif)

## **<a style="color: var(--ion-color-dark);" name="step-1">Step 1</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

- magic link generated on receipt (ingestion) of reservation (from SFTP server)
- will be sent in email for parent to enroll
- form fields pre-filled from reservation CSV
- note: parent email - unique identifier - greyed out.

![Enrollment Wizard - Step 1](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-1.gif)

- click next before filling form required fields - show form validation

![Enrollment Wizard - Step 1 - Validation](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-1-validation.gif)

## **<a style="color: var(--ion-color-dark);" name="step-2">Step 2</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

- subjects are scoped to the student's grade selected in previous step
- click a subject
	- we see alert w default recommendations
	- 3 30 min sessions for younger student grades (middle school or younger)
	- 3 60 min grades for high school
- only see frequency / duration after selecting subject

![Enrollment Wizard - Step 2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/enrollment-wizard/enrollment-wizard-step-2.gif)

- click not listed - see alert 
	- click mailto
	- next btn disabled

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

**![TODO](tutor profile)**

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