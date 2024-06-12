# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Student Profile project encompasses several forms: the Consult Intake form, Student Profile form, and Tutor Matching form. These forms are used by Revolution Prep employees to help recommend academic products to students and match them up with a perfect tutor.

**![TODO](cover image)**

## **<a style="color: var(--ion-color-dark);" name="consult-intake">Consult Intake</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

when a Revolution Prep academic advisor receives a lead, they complete consultations. previously, manually took notes, and information collected is not standardaized across company. now capture data in form.

**![TODO](consult image)**

## **<a style="color: var(--ion-color-dark);" name="student-profile">Student Profile</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

Information from the initial Consult Intake form is populated in the Student Profile form. It is available to Revolution Prep admins and tutors.

all cards, all forms have read mode and edit mode

**![TODO](student profile image)**

## **<a style="color: var(--ion-color-dark);" name="tutor-matching">Tutor Matching</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

Used by Tutor Matching team to help find perfect tutor for students.

**![TODO](tutor matching image)**

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