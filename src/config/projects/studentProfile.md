# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Student Profile project encompasses several forms: the Consult Intake form, Student Profile form, and Tutor Matching form. These forms are used by Revolution Prep employees to help recommend academic products to students and match them up with a perfect tutor.

![Student Profile - Cover](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-cover.gif)

## **<a style="color: var(--ion-color-dark);" name="consult-intake">Consult Intake</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

when a Revolution Prep academic advisor receives a lead, they complete consultations. previously, manually took notes, and information collected is not standardaized across company. now capture data in form.

![Consult](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/consult.gif)

## **<a style="color: var(--ion-color-dark);" name="student-profile">Student Profile</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

The Student Profile form is where Revolution Prep admins and tutors can view and edit information about student

all cards, all forms have read mode and edit mode

form fields update on blur

![Student Profile](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile.gif)

tutor package panels

![Student Profile - Tutor Package Panels](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-tutor-package-panels.gif)

edit sibling

![Student Profile - Edit Siblings](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-edit-siblings.gif)

edit academic

![Student Profile - Edit Academics](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-edit-academics.gif)

edit test prep -- add exam

![Student Profile - Add Exam](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-add-exam.gif)

edit test prep -- add official score

![Student Profile - Add Official Score](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-add-official-score.gif)


## **<a style="color: var(--ion-color-dark);" name="tutor-matching">Tutor Matching</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

Used by Tutor Matching team to help find perfect tutor for students.

![Tutor Matching](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/tutor-matching.gif)

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

todo 

**![TODO](wireframes recevied from product team)**

in nuxt / vue monorepo containing student dashboard and next admin and next tutor dashboards.

reusable components across pages
- edit student notes (consult, profile, tutor matching)
- edit test prep form (consult, student profile)
- edit parent form (consult, student profile)
- source link autocomplete (what is this again?)

- student profile form
  - tutor package expansion panels component
- consult 
  - edit consult form on right-hand side
- tutor matching form
  - edit tutor package component
- all pages: styling and skeleton loaders


vuex stores for state management for various business objects - event, enrollment, study areas, availability, tier, session, tutoring history, tutoring, tutor