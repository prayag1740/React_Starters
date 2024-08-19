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
import QrCodeGenerator from './Components/QrCodeGenerator'
import ThemeSwitch from './Components/ThemeSwitch'
import LightdarkMode from './Components/LightDarkMode'
import ScrollIndicator from './Components/Scroll-Indicator'
import Tabs from './Components/Tabs'
import CustomModal from './Components/CustomModal'
import GitHubProfile from './Components/GithubProfile'

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
      <NewPage message={"click here for Qr Code Generator Project"} color = {"#47a262"} navigate = {'/qr-code'} />
      <ThemeSwitch />
      {/* <LightdarkMode /> */}
      <NewPage message={"click here for Scroll Indicator Project"} color = {"#9a47a2"} navigate = {'/scroll-indicator'} />
      <Tabs />
      <NewPage message={"click here for Custom Modal Project"} color = {"#ec1d68"} navigate = {'/custom-modal'} />
      <NewPage message={"click here for Github Profile Page Project"} color = {"#1dece6"} navigate = {'/github-profile'} />
        </>
      } />
        <Route path='/load-more-data' element={<LoadMoreData />} />
        <Route path='tree-view' element={<TreeView menus={menus} />} />
        <Route path='/qr-code' element={<QrCodeGenerator menus={menus} />} />
        <Route path='/scroll-indicator' element={<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />} />
        <Route path='/custom-modal' element={<CustomModal />} />
        <Route path='/github-profile' element={<GitHubProfile />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App
