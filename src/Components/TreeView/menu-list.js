import React from 'react'
import MenuItem from './menu-item'
import './styles.css'

function MenuList({menus = []}) {
    
  return (
    <ul className='menu-list-container'>
        {
            menus && menus.length ? 
            menus.map( (i, idx) => {
                return <MenuItem item={i} key={idx} />
            } ):
            null
        }
    </ul>
  )
}

export default MenuList ;