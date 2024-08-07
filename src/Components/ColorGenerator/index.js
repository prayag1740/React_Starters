import React, { useState } from 'react'
import "./styles.css"

function ColorGenerator() {

    const [type, setType] = useState("HEX")
    const [color, setColor] = useState("#000000") ;
    
    const changeColorType = (type) => {
        setType(type);
        type === "HEX" ? generateHexColorCode() : generateRGBColorCode() 
    }

    function getRandomNumber(length) {
        return Math.floor(Math.random() * length);
    }
    

    const generateHexColorCode = () => {
        let hexcolor = "#"
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        for (let i=0 ; i < 6 ; i++) {
            hexcolor += hex[getRandomNumber(hex.length)]
        }
        setColor(hexcolor);
    }

    const generateRGBColorCode = () => {
        const r = getRandomNumber(256)
        const g = getRandomNumber(256)
        const b = getRandomNumber(256)

        setColor(`rgb(${r},${g}, ${b})`);
    }

  return (
    <div className='container' style={{backgroundColor: color}}>
        <div className='button-grp'>
        <button onClick={() => changeColorType("HEX")}>Generate Hex Color</button>
        <button onClick={() => changeColorType("RGB")}>Generate RGB Color</button>
        <button onClick={() => changeColorType(type)}>Generate Random Color</button>
        </div>
        <h2>{type} Color</h2>
        <h1>{color}</h1>
    </div>
  )
}

export default ColorGenerator