import React from 'react'
import MenuList from './menu-list';

function TreeView( {menus = []} ) {
    
  return (
    <div className='tree-view-container'>
        <MenuList menus={menus} />
    </div>
  )
}

export default TreeView ;