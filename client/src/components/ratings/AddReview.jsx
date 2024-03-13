import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';


// At the bottom of the Ratings & Reviews module, a button will appear allowing users to create new reviews for the product. This button should always be available on any product page.
// Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Write Your Review” and subtitled “About the [Product Name Here]”.
// The product name should be inserted into the subtitle.
// The following inputs should appear on the review form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.
// 1.2.6.1. Overall rating (mandatory)
// The overall rating will be selected via five selectable star icons. Initially, the stars will all be outlines, and none will be solid. Clicking on a star will fill that star
// and all of the stars to the left of it with solid color. Customers will not be able to select fractions of a star. After selecting a star, text will appear to the right of the stars
// explaining the meaning of the selection. The text will vary as follows:
// 	1 star - “Poor”
// 	2 stars - “Fair”
// 	3 stars - “Average”
// 	4 stars - “Good”
// 	5 stars - “Great”
// 1.2.6.2. Do you recommend this product? (mandatory)
// Recommendation will be captured via a radio button array of “Yes” and “No”. Default radio button behavior will apply.
// 1.2.6.3. Characteristics (mandatory)
// Any characteristics designated as applicable for the current product will appear in this area. For these inputs, the title will be the characteristic title.
// This input will appear as an array of five radio buttons. The meaning of the lowest (1) and highest (5) selection will appear below the array of radio buttons.
// By default, no button will be selected.
// Above the five buttons, the meaning of the current selection will be explicitly presented. The default will be “none selected”. After making a selection,
// this should update as applicable for the given characteristic. The meaning of the selections is outlined below:

// SEE BRD's for chart

// 1.2.6.4. Review summary
// A text input allowing up to 60 characters.
// Placeholder text should read: “Example: Best purchase ever!”
// 1.2.6.5. Review body (mandatory)
// A text input allowing up to 1000 characters.
// Placeholder text should read: “Why did you like the product or not?”.
// The review must be over 50 characters long in order to be submitted. If the user tries to submit a review shorter than 50 characters,
// then the submission should fail in the same manner as it would for a blank mandatory field.
// Below the input for the Review body, a counter should appear. This counter should let the user know how many characters are needed to reach the 50 character minimum.
// It should appear in the format “Minimum required characters left: [##]”. As the user types, the count of characters should update. After the user reaches 50 characters,
// the counter should be replaced by a message stating “Minimum reached”.
// 1.2.6.6. Upload your photos
// A button will appear allowing users to upload their photos to the form.
// Clicking the button should open a separate window where the photo to be can be selected.
// After the first image is uploaded, a thumbnail showing the image should appear. A user should be able to add up to five images before the button to add disappears, preventing
// further additions.
// 1.2.6.7. What is your nickname (mandatory)
// A text input allowing up to 60 characters for the user’s display name.
// Placeholder text should read: “Example: jackson11!”.
// Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
// 1.2.6.8. Your email (mandatory)
// A text input allowing up to 60 characters.
// Placeholder text should read: “Example: jackson11@email.com”.
// Below this field, the text “For authentication reasons, you will not be emailed” will appear.
// 1.2.6.9. Submit review (button)
// A button by which the review can be submitted.
// Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear.
//This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The review body is less than 50 characters
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.

// I - review text
// O - make a modal to take in the review text, close the modal, submit the result for that product ID through the API
// C -
// E -

// Make it so that the overlay isn't closed automatically
// https://codepen.io/claydiffrient/pen/woLzwo
// https://reactcommunity.org/react-modal/examples/should_close_on_overlay_click/



export default function AddReview ({ isModalOpen, closeModal }) {

  return (
  <Modal isOpen={isModalOpen} onRequestClose={closeModal} className={"review-modal"}>

    Yo we here son!!
  {/* <form onSubmit={console.log("it's submitted")}>
   <input> Enter something</input>
   <button type="submit"></button>
   </form> */}
</Modal>
)
}