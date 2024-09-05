import React, {useRef} from 'react'
import useFetch from '../useFetch/useFetch'

export default function ScrollTopBottom() {
  
    const {data, loading, error} = useFetch("https://dummyjson.com/products?limit=100", {}) ; 
    const bottomRef = useRef(null);

    if (loading) {
        return <h1>Loading, please wait</h1>
    }

    if (error) {
        return <h1>Error.. Please wait !!</h1>
    }

    


    function handleScrollToTop() {
        window.scrollTo({
            top:0, behavior: 'smooth'
        })
    }

    function handleScrollToBottom () {
        bottomRef.current.scrollIntoView({behavior:'smooth'})
    }
    
    return (
        <div>
            <h1>Scroll to Top and bottom functionality</h1>
            <h2>This is top section</h2>
            <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
            {
                data && data.products ? (data.products.map((p) => <li>{p.title}</li>)) : null
            }
            <h2>This is bottom section</h2>
            <button onClick={handleScrollToTop}>Scroll to Top</button>
            <div ref={bottomRef} ></div>
        </div>
    )

}
