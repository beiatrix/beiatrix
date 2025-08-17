---
title: 'Speed-Based Pricing'
subtitle: '@ Closinglock'
description: 'Choose your payment transfer speed for real estate transactions'
slug: 'speed-based-pricing'
image: 'https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-dynamic-fields.gif'
company: 'Closinglock'
organization: 'closinglock'
year: 2025
technologies: [
  'Vue'
]
private: true
featured: false
sequence: 1
---

::header-project-section
---
title: Overview
---
::

In this project, we enhanced the Closinglock client portal payments flow to give clients the ability to choose between multiple transfer speeds when sending funds for real estate transactions—empowering them to deliver money to the title company faster or slower based on their needs.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-dynamic-fields.gif
class: drop-shadow-lg rounded-lg my-2
alt: Speed-Based Pricing
---
::

::header-project-section
---
title: Client Portal
---
::

**Payment Summary**

At the final step of the payments flow—after the client selects a payment amount, confirms their bank account, and completes identity verification—they land on the Payment Summary page. Here, they can choose to send their payment using the fastest option for a premium fee or opt for a slower transfer at a discounted rate.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Summary Page
---
::

The fastest option is selected by default. As users toggle between speeds, the processing fee, total amount due, and expected delivery time update dynamically.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-dynamic-fields.gif
class: drop-shadow-lg rounded-lg my-2
alt: Payment Summary - Dynamic Fields
---
::

If it’s already past the bank’s cutoff for same-day transfers, the premium (same-day) option is hidden.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-past-cutoff.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Summary - Past Bank Cutoff
---
::

For edge cases where users arrive before the cutoff but delay payment submission until after, we display an alert upon clicking the "Transfer" button to let them know that same-day delivery is no longer available.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-fastest-not-available.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Summary Page
---
::

**Fee Breakdown Side Sheet**

If the user wishes to understand more about what each fee includes, they can click the text links to open a side sheet to learn more.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-fee-breakdown.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Summary - Fee Breakdown
---
::

**Confirm Transfer Speed Dialog**

If a user selects a slower transfer speed, clicking “Transfer” opens a confirmation dialog. This dialog is skipped for the fastest option, encouraging clients to proceed with the premium speed.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-confirm.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Summary - Confirm
---
::

**Payment Confirmation**

After successfully submitting a payment, users see a confirmation screen with their payment details.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-confirmation.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Confirmation Page
---
::

**Payment Details Side Sheet**

From the confirmation screen, clicking “Back to home” returns the client to their dashboard, where they can view payment details in a side sheet.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-details.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Details
---
::

::header-project-section
---
title: Employee Portal
---
::

**Payment Tier Editor**

On the internal employee portal, we updated a tool that allows employees to view and edit pricing for the different transfer speed tiers.

::nuxt-img
---
src: https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-tier-editor.jpg
class: drop-shadow-lg rounded-lg my-2
alt: Payment Tier Editor
---
::

::header-project-section
---
title: My Contributions
---
::

As the primary frontend contributor on this project, I interpreted the Product Requirements Document and Figma designs to break down frontend work into actionable tickets, then populated the Jira epic and technical documentation with these tasks. 

Working under a tight timeline, I implemented all Client Portal UI changes (excluding the confirmation dialog) and updated the Employee Portal.

We developed this new payments experience behind a feature flag, enabling a controlled rollout to a subset of customers while preserving the existing flow for others. Below are images of the previous experience on the left, and the new speed-based pricing features on the right.

<div class="flex justify-between mb-2 gap-3">
  <img
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary-old.jpg"
    alt="Payment Summary - Old" 
    class="drop-shadow-lg rounded-lg" 
    style="width: 50%; height: auto;"
  />
  <img
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-summary.jpg"
    alt="Payment Summary - New" 
    class="drop-shadow-lg rounded-lg" 
    style="width: 50%; height: auto;"
  />
</div>

<div class="flex justify-between mb-2 gap-3">
  <img
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-confirmation-old.jpg"
    alt="Payment Confirmation - Old" 
    class="drop-shadow-lg rounded-lg" 
    style="width: 50%; height: auto;"
  />
  <img
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-confirmation.jpg"
    alt="Payment Confirmation - New" 
    class="drop-shadow-lg rounded-lg" 
    style="width: 50%; height: auto;"
  />
</div>

<div class="flex justify-between mb-2 gap-3">
  <img
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-details-old.jpg"
    alt="Payment Details - Old" 
    class="drop-shadow-lg rounded-lg" 
    style="width: 50%; height: auto;"
  />
  <img
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/professional/closinglock/speed-based-pricing/payment-details.jpg"
    alt="Payment Details - New" 
    class="drop-shadow-lg rounded-lg" 
    style="width: 50%; height: auto;"
  />
</div>

I also scoped and implemented analytics events in Amplitude to support data-driven decisions by the Product team. Post-release, I provided thorough QA bug fixes and followed up with additional UI refinements.
