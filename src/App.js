import React from 'react'
import Accordion from './Components/Accordian'
import ColorGenerator from './Components/ColorGenerator'
import StarRating from './Components/StarRating'

function App() {
  return (
    <div>
      <Accordion />
      <ColorGenerator />
      <StarRating noOfStars={10} />
    </div>
  )
}

export default App
