import React, { useState } from "react";
import './modal.css'
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalReact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>React Modal</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} 
      style={{content:{top:'25%',left:'25%',right:'25%',bottom:'25%'}}} closeTimeoutMS={400}>
        <h1>Modal Title</h1>
        <p>Modal Body</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalReact;
