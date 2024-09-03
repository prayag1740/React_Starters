import React from 'react'
import useFetch from './useFetch'

function CustomCompUseFetch() {
  
    const {data, loading, error} = useFetch("https://dummyjson.com/products", {});

    return (
            <div>
                <h1>Use Fetch Custom Hook</h1>
                {loading ? <h3>Loading Products .. Please Wait !!</h3> : null}
                {error ? <h3>Some error occured .. Try again </h3> : null}
                {data && data.products && data.products.length ? data.products.map((pi) => (<p key={pi.key}>{pi.title}</p>)) : null}
            </div>
    )

}

export default CustomCompUseFetch;
