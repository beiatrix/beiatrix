# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Student Profile project encompasses several forms: the Consult Intake form, Student Profile form, and Tutor Matching form. These forms are used by Revolution Prep employees to help consolidate information about students, recommend them academic products, and match them up with the perfect tutor.

![Student Profile - Cover](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-cover.gif)

## **<a style="color: var(--ion-color-dark);" name="consult-intake">Consult Intake</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

When a Revolution Prep academic advisor receives a new lead, they complete a consult to learn more about the customer's needs with the goal of recommending a product such as Private Tutoring or a Small Group Course.

A consult can cover various topics, such as an Academic Strategy Session for a student looking to improve their grades, or a Score Report Review for a student working on test prep.

![Consult](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/consult.gif)

The left side of the page contains cards to capture information about the parent, student, siblings, notes, academics, and test prep. On the right, the advisor notes the outcome of the consult in a recommendation form. Every card has a "read mode" and an "edit mode" toggle.

Nearly all of the form fields automatically submit data on blur, reducing the number of clicks for the user.

Previously, this process involved manual note-taking, and the information collected was not standardized across the company. Now, this data is captured in a form and can be used across our internal CRM (Customer Relationship Management) system.

## **<a style="color: var(--ion-color-dark);" name="student-profile">Student Profile</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

Information captured from the Consult page is propagated to the Student Profile form. Here, Revolution Prep admins and tutors can view and edit information about a student.

![Student Profile](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile.gif)

A user can click the tutor package expansion panels to learn more about the student's tutoring programs. Clicking "View Completed Matches" opens a table displaying any existing tutor matches, and clicking "Initiate Tutor Match" opens the [Tutor Matching page](/projects/student-profile#tutor-matching).

![Student Profile - Tutor Package Panels](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-tutor-package-panels.gif)

Below are cards containing information about the parent and student. They should look familiar! All the cards on this page are reusable components – the same ones used on the Consult page.

The sibling card allows the admin to add a sibling to the student’s record.

![Student Profile - Edit Siblings](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-edit-siblings.gif)

The text areas below allow the employee to add notes about the student’s personal and academic goals.

Next is the academics card, where the user can record the student’s GPA, grades, or learning differences and accommodations.

![Student Profile - Edit Academics](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-edit-academics.gif)

Finally, the test prep card displays the exams the student is preparing for. An employee can record the student’s current and target scores, view scores from practice exams, or add scores from official exams the student has taken.

![Student Profile - Edit Test Prep](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-edit-test-prep.gif)

## **<a style="color: var(--ion-color-dark);" name="tutor-matching">Tutor Matching</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

The Tutor Matching form is used by Tutor Matching team members to help find the perfect tutor for students.

![Tutor Matching](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/tutor-matching.jpg)

On all the Student Profile pages, form validation occurs on blur of a field, ensuring that all required fields are filled.

![Tutor Matching - Error](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/tutor-matching-error.gif)

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

The Student Profile pages are built in Nuxt and Vue, in a monorepo containing the **[Student Dashboard](/projects/student-dashboard#my-contributions)** and next Admin and Tutor Dashboards.

To begin, we received wireframes from our Product team:

![Student Profile - Design](https://beiatrix.s3.us-west-1.amazonaws.com/projects/student-profile/student-profile-design.jpg)

We built reusable card and form components to be used across all three pages. I was responsible for building the Edit Notes component, Edit Test Prep component, and Edit Parent component. In addition, I built the tutor package expansion panels in the Student Profile page, the Edit Recommendation form in the Consult Page, and the Edit Tutor Package component in the Tutor Matching page. Furthermore, I worked on Vuex stores for state management of our various business objects. Finally, on all pages, I refined styling and added skeleton loaders.

