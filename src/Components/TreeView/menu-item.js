import React, { useState } from 'react'
import MenuList from './menu-list';
import { FaMinus, FaPlus } from "react-icons/fa"

function MenuItem(  {item}   ) {
    
    const [displayCurrentchildren, setdisplayCurrentchildren] = useState({});

    const handleToggleChildren = (getCurrentLabel) => {
        setdisplayCurrentchildren({
            ...displayCurrentchildren,
            [getCurrentLabel] : !displayCurrentchildren[getCurrentLabel]
        })
    }
    

  return (
    <li>
        <div className='menu-item'>
           <p> {item.label} </p>
           {
            item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>{
                displayCurrentchildren[item.label] ? <FaMinus color='#fff' size={25} /> : <FaPlus color='#fff' size={25} /> }</span> : null 
           }
        </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentchildren[item.label] ? 
            <MenuList menus={item.children} />
            : null
        }

    </li>
  )
}

export default MenuItem