import React, { useState } from 'react'
import './styles.css'

function Tabs() {

    const [button, selectButton] = useState("1");

    const handleButtonClick = (event) => {
        selectButton(event.target.id)
    }

  return (
    <div className='tab-container'>
        <div className='button-container'>
            <button id="1" onClick={handleButtonClick} className={button === "1" ? "tab-button active-button" : "tab-button"}>Tab1</button>
            <button id="2" onClick={(event) => handleButtonClick(event)} className={button === "2" ? "tab-button active-button" : "tab-button"}>Tab2</button>
            <button id="3" onClick={(event) => handleButtonClick(event)} className={button === "3" ? "tab-button active-button" : "tab-button"}>Tab3</button>
        </div>

        <div className='text-container'>
            {button === "1" && <div>Button 1 Text</div>}
            {button === "2" && <div>Button 2 Text</div>}
            {button === "3" && <div>Button 3 Text</div>}
        </div>

    </div>
  )
}

export default Tabs