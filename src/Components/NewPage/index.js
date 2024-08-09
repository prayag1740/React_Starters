import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function NewPage(props) {

    const navigate = useNavigate() ;

    const handleClick = () => {
       navigate(props.navigate) 
    }

  return (
    <div className='new-page-container' style={{backgroundColor: props.color}}>
    <button className='np-button' onClick={handleClick}>{props.message}</button>
    </div>
  )
}

export default NewPage