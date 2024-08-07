import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import "./styles.css"

function StarRating({noOfStars=5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (idx) => {
        setRating(idx)
    }

    const handleMouseHover = (idx) => {
        setHover(idx)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }

  return (
    <div className='star-rating'>
        {[...Array(noOfStars)].map((_,idx) => {
            idx +=1
            return < FaStar className={idx <= (rating || hover) ? "active" : "inactive"}
                onClick={() => handleClick(idx)}
                onMouseMove={() => handleMouseHover(idx)}
                onMouseLeave={() => handleMouseLeave()}
            size={40}/>
        })}
    </div>
  )
}

export default StarRating