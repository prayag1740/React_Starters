import React, { useRef } from 'react'

export default function Scrollsection() {

    const ref = useRef() ;

    const handleSectionClick = () => {
        ref.current.scrollIntoView({behaviour : "smooth", block : "nearest" })
    }

    const data = [
        {
            label : "First card",
            style : {
                width : "100%",
                height : "600px",
                background : "red"
            }
        },
        {
            label : "Second card",
            style : {
                width : "100%",
                height : "600px",
                background : "green"
            }
        },
        {
            label : "Third card",
            style : {
                width : "100%",
                height : "600px",
                background : "orange"
            }
        },
        {
            label : "Fourth card",
            style : {
                width : "100%",
                height : "600px",
                background : "violet"
            }
        },
        {
            label : "Fifth card",
            style : {
                width : "100%",
                height : "600px",
                background : "pink"
            }
        }
    ]

  return (
    <div className='scroll-container'>
        <h1>Click to Scroll Section Functionality</h1>
        <button onClick={handleSectionClick}>Click me</button>
        {
            data.map((di, index) => {
              return ( 
                <div ref={index == 2 ? ref : null} style={di.style}>
                <h3>{di.label}</h3>
               </div> ); 
            })
        }
    </div>
  )
}
