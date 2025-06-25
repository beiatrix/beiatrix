# **<a style="color: var(--ion-color-dark);" name="overview">Overview</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

In this project, we enhanced the Closinglock client portal payments flow to give clients the ability to choose between different transfer speeds when sending funds for real estate transactions—enabling them to deliver money to the title company faster or slower, depending on their needs.

[image]

## **<a style="color: var(--ion-color-dark);" name="client-portal">Client Portal</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />


**Payment Summary**

In the final step of the Payments flow – after the user has selected a payment amount, confirmed their bank account information, and completed an identity verification step – the client sees a Payment Summary page. Here, the client can choose to send a payment using the fastest option for a premium fee, or a choose a slower option for a discounted rate.

![Payment Summary Page](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary.jpg)

The fastest transfer time is selected by default. As the user toggles between different transfer speeds, fields such as the processing fee, total amount due, and expected delivery time dynamically update.
[gif]

If it is already past the bank cutoff time for a same-day transfer, the premium option for same-day transfer won't be shown.

![Payment Summary - Past Bank Cutoff](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary-past-cutoff.jpg)

If a user lands on this page before the bank cutoff time but delays submitting their payment until after the cutoff has passed, we handle this edge case by displaying an alert upon clicking the "Transfer" button to notify them that same-day transfer is no longer available.
[img // TODO !!!]

**Fee Breakdown Side Sheet**

If the user wishes to understand more about what each fee covers, they can click the text links to open a side sheet to learn more.

![Payment Summary - Fee Breakdown](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary-fee-breakdown.jpg)

**Confirm Transfer Speed Dialog**

If the user chooses one of the slower payment transfer speeds, clicking the "Transfer" button displays a dialog confirming their selection. This dialog does not appear for the premium option, so the user is encouraged to select the fastest speed.

![Payment Summary - Confirm](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary-confirm.jpg)

**Payment Confirmation**

Once the client successfully submits their payment, they see a Payment Confirmation screen with their payment details.

![Payment Confirmation Page](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-confirmation.jpg)

**Payment Details Side Sheet**

Clicking "Back to home" in the confirmation screen returns the user to their Client Portal, where they can view the details of their payment in a side sheet.

![Payment Details](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-details.jpg)

## **<a style="color: var(--ion-color-dark);" name="employee-portal">Employee Portal</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary-tint);" />

**Payment Tier Editor**

Finally, in our internal employee portal, we made an update that allows employees to view and edit pricing for the different payment transfer speeds.

![Payment Tier Editor](https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-tier-editor.jpg)

# **<a style="color: var(--ion-color-dark);" name="my-contributions">My Contributions</a>**

<hr style="border-bottom: 2px solid var(--ion-color-secondary);" />

As the primary frontend contributor on this project, I interpreted the Product Requirements Document and Figma designs to break down frontend work into actionable tickets, then populated the Jira epic and technical documentation with these tasks. Working under a tight timeline, I was responsible for implementing updates to the Employee Portal and all Client Portal UI changes (excluding the confirmation dialog). 

We developed this new payments experience behind a feature flag, enabling a controlled rollout to a subset of customers while preserving the existing flow for others. Below are images of the previous experience on the left, and the new speed-based pricing features on the right.

<div 
  style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 1rem; gap: 0.5rem;"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary-old.jpg"
    alt="Payment Summary - Old" 
    style="width: 50%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-summary.jpg"
    alt="Payment Summary - New" 
    style="width: 50%; height: auto;"
  />
</div>

<div 
  style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 1rem; gap: 0.5rem;"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-confirmation-old.jpg"
    alt="Payment Confirmation - Old" 
    style="width: 50%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-confirmation.jpg"
    alt="Payment Confirmation - New" 
    style="width: 50%; height: auto;"
  />
</div>

<div 
  style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 1rem; gap: 0.5rem;"
>
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-details-old.jpg"
    alt="Payment Details - Old" 
    style="width: 50%; height: auto;"
  />
  <img 
    src="https://beiatrix.s3.us-west-1.amazonaws.com/projects/speed-based-pricing/payment-details.jpg"
    alt="Payment Details - New" 
    style="width: 50%; height: auto;"
  />
</div>

I also scoped and implemented analytics events, sending them to Amplitude to support data-driven decision-making by the Product team. Finally, I provided thorough QA bug fixes and followed up with additional UI improvements post-release.
