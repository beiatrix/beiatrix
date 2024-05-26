# **Background**

# intro 

- propose some improvements to scheduling flow in student dashboard
- gather feedback from all of you
- before I jump into the new design mocks - i'll start with refreshing our memory on current state of scheduling flow

# existing scheduling flow

- schedule sessions button 
- enter a three step process
- step 1: choose a tutor
- step 2: choose a time
- step 3: book a session 
	- confirm session time, session length, subject, and repeat options
- success dialog
- after which student returns to their schedule and can see the session detail dialog

# issues with this flow

- we are encouraging the user to select one session time and repeat it for however many hours they have left
- we are not accounting for session frequency and duration in tandem
	- for example 3x 1-hour sessions per week, we're not encouraging them to do that 

# proposal for revised scheduling flow

## step 1

- purpose of this page is still to select a tutor 
	- student can have multiple tutors 
	- grouped by enrollment
- chip component for each enrollment - displays unscheduled hours
- on hover, can see 
	- scheduled
	- unscheduled
	- expiring hours
- case when 0 unscheduled hours 
	- leave schedule button enabled
	- on click, shows re-up opportunity
		- PT - add hours modal, info alert text
		- Back-Up Care - prompt to check their Bright Horizons benefits and contact their advisor 
- questions about step 1?
## step 2

- we have the contents of the existing steps 2 and 3 combined into one view
- this view now accounts for both frequency and duration in scheduling sessions
- call out - removed stepper because only 2 steps... ok to remove 
- left-hand side
	- blue info alert
	- calendar 
		- rebuild
		- changed from 4day view to full week view
			- full week view on desktop, day view on mobile
		- only click into light green areas when the tutor is available
		- creates blocks that are the duration selected
		- default hours - 6am-11pm
		- option to show 24 hour view with toggle
- right-hand side
	- card with enrollment details
		- enrollment name
		- tutor
		- unscheduled hours 
			- on hover, popover shows when hours expire 
		- conditionally render dropdown if other tutors
	- card with session details
		- session frequency
			- ex: 3x per week
		- session duration (minutes)
			- ex: 60 min 
		- session topic
			- ex: Algebra I
		- session frequency, duration, and topic fields should all be pre-selected
		- repeat this week's session for
			- no default should be be pre-selected
			- required field
			- only repeats the week that is currently viewable 
			- options to present in dropdown 
				- just schedule this selection
				- 1 week - 4 weeks
				- all remaining hours 
					- but only up to how many hours they have?
						- ex: 2x 1 hour session per week, only 4 back up care hours. repeat - up to 2 weeks
						- ex: 2x 1 hour session per week, have 24 PT hours. repeat - up to 4 weeks
			- once user makes a selection, text appears below with either:
				- if tutor is not available for some of the repeat sessions, list those dates
					- <TUTOR_NAME> is available for every repeat session except the following: [list of dates]
				- otherwise, totally available
					- <TUTOR_NAME> is totally available!
		- progress bar 
			- shows how many hours were selected over total unscheduled hours
				- e.g. 12 (3 hours, repeated over 4 weeks) - 3 (tutor unavailable)
		- schedule hours button
			- disabled by default
			- once user make a repeat selection, book button becomes enabled
				- if user has NOT scheduled out all their available unscheduled hours:
					- show confirm dialog
				- if user has scheduled out all their unscheduled hours:
					- on click, opens success dialog 
## success dialog
- reusing our existing success dialog
- additional feature - prompting the user to add sessions to their calendar 
- that concludes the proposed scheduling improvements! any questions / feedback?