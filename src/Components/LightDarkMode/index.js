import React, { useState } from 'react'
import "./styles.css";
import useLocalStorage from './useLocalStorage';

function LightdarkMode() {

    const lightTheme = {buttonColor: 'black', h1Color : 'black' , buttonText: 'white', bgColor: 'white'}

    const darkTheme = {buttonColor: 'white', h1Color : 'white' , buttonText: 'black', bgColor: 'black'}

    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    console.log(theme);

  return (
    <div className='theme-container' style={{backgroundColor : theme.bgColor}}>
        <h1 className='h1-head' style={{color : theme.h1Color}}>Hello World !!!</h1>
        <button className='theme-button' onClick={toggleTheme} style={{backgroundColor: theme.buttonColor, color: theme.buttonText}}>Change Theme</button>
    </div>
  )
}

export default LightdarkMode