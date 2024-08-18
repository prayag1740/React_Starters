import React from 'react'
import './modal.css'

export default function Modal({id, header, body, footer, onClose}) {
  return (
    <div id={id || "Modal"} className='modal'>
        <div className='modal-content'>
            <div className='header'>
                <span className='close-modal-icon' onClick={onClose}>&times;</span>
                <h2>{header ? header : 'Some Custom Header'}</h2>
            </div>
            <div className='body'>
            {
                body ? body : <div>"Some Custom Body"</div>
            }
            </div>
            <div className='footer'>
                {
                    footer ? footer : <div>"Some Custom Footer"</div>
                }
            </div>
        </div>
    </div>
  )
}
