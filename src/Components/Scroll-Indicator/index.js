import React, { useEffect, useState } from 'react'
import "./styles.css";

export default function ScrollIndicator({url}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0) ;

    const fetchData = async (getUrl) => {
        try {
            setLoading(true) ;
            const response = await fetch(getUrl)
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])
    
    const handleScrollPercentage = () => {
        
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((scrolled / height)*100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage); //useEffect is only called once during initial render and it sets the handleScrollPercentage function such that everytime the scroll is done is done, handleScrollPercentage function is called. After everything, during unmount we attach an empty function to scroll event
        return () => {
            window.removeEventListener('scroll' , () => {})
        }
    }, [])

    if (loading) {
        return <div>Loading Data</div>
    }

    if (error) {
        return <div>Error !! Oops Please try again !</div>
    }

    return (
        <div>
          <div className="si-top-container">
            <h1 className='si-heading'>Custom Scroll Indicator</h1>
            <div className="scroll-progress-indicator">
              <div
                className="current-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="data-container">
            {data && data.length > 0
              ? data.map((dataItem) => <p>{dataItem.title}</p>)
              : null}
          </div>
        </div>
      );
}
