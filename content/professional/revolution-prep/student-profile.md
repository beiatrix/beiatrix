---
title: 'Student Profile'
subtitle: '@ Revolution Prep'
description: 'Forms for gathering student information'
slug: 'student-profile'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile.gif'
company: 'Revolution Prep'
organization: 'revolution-prep'
year: 2022
technologies: [
  'Nuxt',
  'Vue'
]
private: true
featured: false
sequence: 2
---

::header-project-section
---
title: Overview
---
::

The Student Profile project encompasses several forms: the Consult Intake form, Student Profile form, and Tutor Matching form. These forms are used by Revolution Prep employees to help consolidate information about students, recommend them academic products, and match them up with the perfect tutor.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile-cover.gif
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile - Cover
---
::

::header-project-section
---
title: Consult Intake
---
::

When a Revolution Prep academic advisor receives a new lead, they complete a consult to learn more about the customer's needs with the goal of recommending a product such as Private Tutoring or a Small Group Course.

A consult can cover various topics, such as an Academic Strategy Session for a student looking to improve their grades, or a Score Report Review for a student working on test prep.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/consult.gif
class: drop-shadow-lg rounded-lg my-2
alt: Consult
---
::

The left side of the page contains cards to capture information about the parent, student, siblings, notes, academics, and test prep. On the right, the advisor notes the outcome of the consult in a recommendation form. Every card has a "read mode" and an "edit mode" toggle.

Nearly all of the form fields automatically submit data on blur, reducing the number of clicks for the user.

Previously, this process involved manual note-taking, and the information collected was not standardized across the company. Now, this data is captured in a form and can be used across our internal CRM (Customer Relationship Management) system.

::header-project-section
---
title: Student Profile
---
::

Information captured from the Consult page is propagated to the Student Profile form. Here, Revolution Prep admins and tutors can view and edit information about a student.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile.gif
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile
---
::

A user can click the tutor package expansion panels to learn more about the student's tutoring programs. Clicking "View Completed Matches" opens a table displaying any existing tutor matches, and clicking "Initiate Tutor Match" opens the Tutor Matching page.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile-tutor-package-panels.gif
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile - Tutor Package Panels
---
::

Below are cards containing information about the parent and student. They should look familiar! All the cards on this page are reusable components – the same ones used on the Consult page.

The sibling card allows the admin to add a sibling to the student's record.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile-edit-siblings.gif
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile - Edit Siblings
---
::

The text areas below allow the employee to add notes about the student's personal and academic goals.

Next is the academics card, where the user can record the student's GPA, grades, or learning differences and accommodations.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile-edit-academics.gif
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile - Edit Academics
---
::

Finally, the test prep card displays the exams the student is preparing for. An employee can record the student's current and target scores, view scores from practice exams, or add scores from official exams the student has taken.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile-edit-test-prep.gif
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile - Edit Test Prep
---
::

::header-project-section
---
title: Tutor Matching
---
::

The Tutor Matching form is used by Tutor Matching team members to help find the perfect tutor for students.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/tutor-matching.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching
---
::

On all the Student Profile pages, form validation occurs on blur of a field, ensuring that all required fields are filled.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/tutor-matching-error.gif
class: drop-shadow-lg rounded-lg my-2
alt: Tutor Matching - Error
---
::

::header-project-section
---
title: My Contributions
---
::

The Student Profile pages are built in Nuxt and Vue, in a monorepo containing the **[Student Dashboard](/projects/professional/revolution-prep/revolution-prep/student-dashboard){class="text-primary underline font-semibold"}** and next Admin and Tutor Dashboards.

To begin, we received wireframes from our Product team:

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/revolution-prep/student-profile/student-profile-design.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Student Profile - Design
---
::

We built reusable card and form components to be used across all three pages. I was responsible for building the Edit Notes component, Edit Test Prep component, and Edit Parent component. In addition, I built the tutor package expansion panels in the Student Profile page, the Edit Recommendation form in the Consult Page, and the Edit Tutor Package component in the Tutor Matching page. Furthermore, I worked on Vuex stores for state management of our various business objects. Finally, on all pages, I refined styling and added skeleton loaders.

