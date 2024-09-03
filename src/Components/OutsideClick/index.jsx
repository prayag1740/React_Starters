import React, { useRef, useState } from 'react'
import useOutsideClick from './useOutsideClick';

function OutsideClick() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef() ;
    useOutsideClick(ref, () => setShowContent(false));

    

  return (
    <div>
        {showContent ? (<div ref={ref}>
            <h3>This is some random content</h3>
            <p>Please click outside to hide this random content</p>
        </div>) : (<button onClick={() => setShowContent(true)}>Show Content</button>)}
    </div>
  )
}

export default OutsideClick