import React, { useEffect, useState } from 'react'
import "../ImageSlider/styles.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

function ImageSlider({url, page = 1, limit=10}) {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0) ;
    const [error, setError] = useState(null);

    const manageImageData = (data) => {
        let images = [] ;
        data.products.forEach((ele) => {
            let data = {
                "id" : ele.id,
                "img" : ele.images[0]
            }
            images.push(data);
        })
        setImages(images) ;
    }

    const fetchImages = async (baseUrl) => {
        try {
            setLoading(true);
            const url = `${baseUrl}?page=${page}&limit=${limit}` ;
            const response = await fetch(url);
            const data = await response.json() ;
            manageImageData(data);
            setLoading(false);

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    const handlePrevClick = () => {
       const curr =  (currentSlide === 0) ? images.length - 1 : currentSlide - 1 
       setCurrentSlide(curr)
    }

    const handleNextClick = () => {
        const curr = (currentSlide === images.length-1) ? 0 : currentSlide + 1
        setCurrentSlide(curr)
    }

    useEffect( () => {
        fetchImages(url)
    }, []);
    if (loading) {
        return <div>Loading Data !! Please wait...</div>
    }

    if (error !== null) {
        return <div>Error Occured</div>
    }

  return (
    <div className='is-container'>
    <BsArrowLeftCircleFill onClick={handlePrevClick} className='arrow' />
      {images && images.length ? (
        images.map((i, idx) => (
            <img key={i.id} src = {i.img} className={currentSlide === idx ? 'current-image' : 'current-image hide-current-image'} />
        ))
      ) : (null)}
      <span className='circle-indicators'>
      {images && images.length ? (
        images.map((i, idx) => (
            <button key={idx} className={currentSlide === idx ? 'current-indicator' : 'current-indicator inactive'} />
        ))
      ) : (null)}
      </span>
      <BsArrowRightCircleFill onClick={handleNextClick} className='arrow' />
    </div>
  )
}

export default ImageSlider