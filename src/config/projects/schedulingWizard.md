# **Overview**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

In 2024, we launched an updated version of the Revolution Prep **[Student Dashboard - Schedule Sessions](/projects/student-dashboard#schedule-sessions)** feature.

**[TODO] cover gif**

## **<a style="color: var(--ion-color-dark);" name="schedule-sessions-version-1">Schedule Sessions | Version 1</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

To summarize Version 1 of the Schedule Sessions flow:

Beginning on the Schedule page, a student with a tutoring enrollment clicks the green "Schedule Sessions" button.

<div 
  style="display: flex; flex-direction: row; justify-content: center"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/schedule.jpg"
    alt="Schedule Page v1"
    style="width: 75%; height: auto;"
  />
</div>

Step 1: The student selects a tutor and clicks "Schedule."

<div 
  style="display: flex; flex-direction: row; justify-content: center"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/schedule-step-1.jpg"
    alt="Schedule Sessions v1 - Step 1" 
    style="width: 75%; height: auto;"
  />
</div>

Step 2: The student selects a session time and duration. The green blocks represent their tutor's availability, broken up into chunks based on the duration selected. Clicking a time in the calendar moves them on to the next step.

<div 
  style="display: flex; flex-direction: row; justify-content: center"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/schedule-step-2.gif"
    alt="Schedule Sessions v1 - Step 2" 
    style="width: 75%; height: auto;"
  />
</div>

Step 3: Finally, the student confirms their session details. They have the option to book repeat sessions at the same time slot for multiple weeks ahead.

<div 
  style="display: flex; flex-direction: row; justify-content: center"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/schedule-step-3.jpg"
    alt="Schedule Sessions v1 - Step 3" 
    style="width: 75%; height: auto;"
  />
</div>

Success! Upon completing a booking, a dialog displays the list of time(s) booked. Finally, clicking "Back to my Schedule" takes the student back to their calendar.

<div 
  style="display: flex; flex-direction: row; justify-content: center"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-dashboard/schedule-success.jpg"
    alt="Schedule Sessions v1 - Success" 
    style="width: 75%; height: auto;"
  />
</div>

**The Problem:** This user flow encourages users to select just one session time, then repeat that time slot until all their tutoring hours are consumed. However, the tutoring packages students sign up for indicate a session frequency: for example, "three 1-hour sessions per week."

**The Solution:** Build a scheduling tool that accounts for session frequency alongside session duration and session time. Students will then be able to book multiple sessions per week, multiple weeks at a time, all in one go – until all their tutor package hours are consumed.

## **<a style="color: var(--ion-color-dark);" name="schedule-sessions-v2">Schedule Sessions | Version 2</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

The student begins on the schedule page, now with a number of improvements. 

We introduce the ability for students to subscribe to their tutoring calendar, so that their sessions can now appear on their personal Apple or Google calendar.

![Schedule Sessions - Schedule](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-schedule.jpg)

As part of upgrading the **[Student Dashboard](/projects/student-dashboard#my-contributions)**, the calendar is rebuilt in Full Calendar, resulting in code that is more readable and easy to maintain.

In addition, the Hours Summary menu is revamped to accommodate multiple kinds of enrollments. Students can view information about all of their programs at a glance, and can click a button to renew their enrollment or add more tutoring hours.

![Schedule Sessions - Hours Summary](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-hours-summary.gif)

Clicking the green "Schedule Sessions" button takes the student to Step 1.

### **<a style="color: var(--ion-color-dark);" name="step-1">Step 1</a>**

The purpose of Step 1 is still the same: select a tutor to work with.

To show students more information about their enrollments, we introduce a chip component that displays the number of hours they have scheduled and how many are remaining.

![Schedule Sessions - Step 1](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-1.gif)

We also improve how we handle the case when the student has run out of tutoring hours. Clicking "Schedule" opens a call-to-action dialog that prompts the student to purchase more hours or contact customer support.

![Schedule Sessions - Step 1 - Re-up Hours](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-1-reup-hours.gif)

Clicking "Schedule" next to a tutor's name takes the student to Step 2.

### **<a style="color: var(--ion-color-dark);" name="step-2">Step 2</a>**

### Scheduling Calendar

On step 2, the student views an improved scheduling calendar. 

**[TODO] Step 2 - still image**

The light green areas indicate when the tutor is available, while the outlined rectangles indicate when the student is available. Now, the student can easily locate where their availabilities overlap, and can pick an ideal time.

- previously, 4-day view. now full week view. (for mobile users, changes to day view)

- can now select multiple times at once

- clicking a time shows a popover indicating that this same day and time can be repeated in future weeks

- rebuilt in fullcalendar

![Schedule Sessions - Step 2](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-2.gif)

### Enrollment Details

card with enrollment details
		- enrollment name
		- tutor
		- unscheduled hours 
			- on hover, popover shows when hours expire 
		- conditionally render dropdown if other tutors

![Schedule Sessions - Step 2 - Enrollment Details](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-2-enrollment-details.gif)

### Session Details

	- card with session details
		- session frequency
			- ex: 3x per week
		- session duration (minutes)
			- ex: 60 min 
		- session topic
			- ex: Algebra I
		- session frequency, duration, and topic fields should all be pre-selected

![Schedule Sessions - Step 2 - Duration](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-2-duration.gif)

### Update Availability

In all steps of scheduling flow "Update Availability" button 
	- self-update availability
		- students can now tell us in real time when their availability changes, eliminating the need for an advisor to collect the availability manually
- reuse calendar in **[Tutor Matching Form](/projects/tutor-matching)**

![Schedule Sessions - Step 2 - Update Availability](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-2-availability.gif)


### **<a style="color: var(--ion-color-dark);" name="step-3">Step 3</a>**

On step 3, we show a table allowing the student to configure repeat options.

![Schedule Sessions - Step 3](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-3.jpg)

There is one row table for each of the session times selected in Step 2. 

The session time is listed in the left-most column, "Sessions Pending Scheduled."

The "Repeat For" column contains a dropdown with repeat options. 
By default, we set the amount of repeats to consume all the student's available tutoring hours.

![Schedule Sessions - Step 3 - Repeat Dropdown](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-3-repeat-dropdown.gif)

The third column, "Available Repeat Sessions," contains a list of checkboxes that allows the user to fine-tune exactly which session dates they would like to repeat. Small help text indicates if there is a holiday or if the tutor is not available on a particular date.

Configuring repeat sesssions updates the progress bar in real-time.

![Schedule Sessions - Step 3 - Checkboxes](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-3-checkboxes.gif)


We encourage the student to use all their tutoring hours. If they reserve fewer than all of their available hours, clicking the "Schedule Hours" button opens a call to action dialog.

![Schedule Sessions - Step 3 - Are You Sure](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-step-3-are-you-sure.gif)

Otherwise, if the student has selected all their remaining hours to be scheduled, clicking "Schedule Hours" takes them direectly to the final view: the success dialog!

### **<a style="color: var(--ion-color-dark);" name="success">Success</a>**

- reusing our existing success dialog
- additional feature - prompting the user to add sessions to their calendar 

![Schedule Sessions - Success](https://beiatrix.s3.us-west-1.amazonaws.com/projects/scheduling-wizard/schedule-sessions-success.jpg)

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

- frontend architecture document + proposed strategy
		- create tickets
	- design mocks in xd
		- collaboration with Julie

**[TODO] XD design screenshots**

- implementation
	- rebuild student availability calendar with improvements to UX, like drag and drop (used in tutor matching, enrollment wizard, and update availability dialog)
	- rebuild v2 of scheduling calendar (in step 2 of schedule sessions flow)
- led [X # of] meetings to present new UI/UX designs to stakeholders


Impact:
- new calendar booking system. velocity scheduling
		- families and advisors (soon tutors) can book multiple recurring sessions in one go.
		- new UX encourages students to use up all their hours. ideally for business, they can purchase more
	- subscribe to tutoring calendar
		- because tutoring sessions can now appear on student's personal calendar, they no longer need to login to our student dashboard to remember when sessions are. improve adherence to attending sessions.
	- self-update availability
		- students can now send updates to their availability real-time. previously, only had one chance to do it, at very beginning of enrollment. if it ever changed, a RP employee would update it manually.
