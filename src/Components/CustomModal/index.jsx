import React, { useState } from 'react'
import Modal from './Modal';
import './modal.css'

export default function CustomModal() {

    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal)
    }

    const handleOnClose = () => {
        setShowModal(false);
    }

  return (
    <div className='modal-container'>
        <button onClick={handleModalToggle}>Click here for Custom Modal</button>
        {showModal && <Modal id={"1"} header={<h2>Some Custom Header</h2>} footer={<h1>Some Custom Footer</h1>} body={<h3>Customized Body Content</h3>} onClose={handleOnClose} />}
    </div>
  )
}
