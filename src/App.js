import React from 'react'
import Accordion from './Components/Accordian'
import ColorGenerator from './Components/ColorGenerator'
import StarRating from './Components/StarRating'
import ImageSlider from './Components/ImageSlider'

function App() {
  return (
    <div>
      <Accordion />
      <ColorGenerator />
      <StarRating noOfStars={10} />
      < ImageSlider url={"https://dummyjson.com/products"} />
    </div>
  )
}

export default App
