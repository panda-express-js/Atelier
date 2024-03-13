import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';



export default function AddReview ({ isModalOpen, closeModal, shouldCloseOnOverlayClick, product }) {

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson, " this is the form data")
    closeModal()
  }

  return (
  <Modal isOpen={isModalOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={shouldCloseOnOverlayClick} className="Modal"
  overlayClassName="Overlay">

    <form method="post" onSubmit={handleSubmit}>
      <div>Write Your Review</div>
      <div>About the {product.name}</div>

      <div>Star Rating Selector Goes Here</div>

      <>Do you Recommend this Product? </>
      <input type="radio" id="yes" name="recommend" value="yes" defaultChecked />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="recommend" value="no" />
    <label htmlFor="no">No</label>

    <label className="review-input" htmlFor="summary">summary</label>
    <input className="review-input" name="summary" id="summary" type="text" placeholder="Example: Best purchase ever!" style={{"width": "60ch"}}/>

    <label htmlFor="body">body</label>
    <textarea name="body" className="review-input" id="body" placeholder="Why did you like the product or not?" rows="5" cols="33" style={{"width": "60ch"}} />

    <label htmlFor="name">nickname</label>
    <input name="name" className="review-input" id="name" type="text" placeholder="Example: jackson11!" />

    <label htmlFor="email">email</label>
    <input name="email" className="review-input" id="email" type="email" placeholder="Example: jackson11@email.com" />

    <label htmlFor="photos">load photos </label>
    <input className="review-input" name="photos" id="photos" type="file" />

      <button className="review-input" type="submit">Submit Review</button>
    </form>
</Modal>
)
}