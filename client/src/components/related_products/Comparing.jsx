import React from 'react';
import Modal from 'react-modal';

const Comparing = ({ isModalOpen, closeModal }) => {

  return (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Modal Content</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
  );
}

export default Comparing;