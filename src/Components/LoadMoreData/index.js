import React, { useEffect, useState } from 'react'
import './styles.css'

function LoadMoreData() {

  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count+1);
  }

  const fetchImages = async () => {
    try {
      let skip = count * 20 ;
      const url = `https://dummyjson.com/products?limit=20&skip=${skip}` ;
      const response = await fetch(url);
      const data = await response.json() ;
      let imagesCopy = [...images]
      setImages(imagesCopy.concat(data.products));
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [count])
  

  return (
    <>    
    <div className='image-container'>
      {images.map((i, _) => {
        return (
          <div className='image-box' key={i.id} >
          <img key={i.id} src={i.images[0]} alt={i.title}/>
          </div>)
      })}
    </div>
    <div className='button-grp'>
    {count < 5 ? (<button onClick={handleCount}>Load More data</button>) : (<button disabled>You have reached 100 products</button>)
    }
    
    </div>
    </>
  )
}

export default LoadMoreData