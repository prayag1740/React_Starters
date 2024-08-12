import React from 'react'
import Accordion from './Components/Accordian'
import ColorGenerator from './Components/ColorGenerator'
import StarRating from './Components/StarRating'
import ImageSlider from './Components/ImageSlider'
import NewPage from './Components/NewPage'
import LoadMoreData from './Components/LoadMoreData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TreeView from './Components/TreeView'
import  {menus } from './Components/TreeView/data'

function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path='/' element ={
        <>
         <Accordion />
      <ColorGenerator />
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://dummyjson.com/products"} />
      <NewPage message={"click here for load more data project"} color = {"#d73b19"} navigate = {'/load-more-data'} />
      <NewPage message={"click here for Tree View project"} color = {"#4C3356"} navigate = {'/tree-view'} />
        </>
      } />
        <Route path='/load-more-data' element={<LoadMoreData />} />
        <Route path='tree-view' element={<TreeView menus={menus} />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App
