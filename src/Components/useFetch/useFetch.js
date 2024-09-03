import React, { useEffect, useState } from 'react'

export default function useFetch(url, options={}) {

  const [data, setData] = useState(null) ;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false) ;


  const fetchDatafromUrl = async () => {
    try {
        setLoading(true) ;
        const response = await fetch(url, {...options})
        if (!response.ok) throw new Error(response.statusText);
        const res = await response.json()
        setData(res);
        setLoading(false);

    } catch (e)
    {
        setError(e) ;
        setLoading(false) ;
    }
  }

  useEffect(() => {
    fetchDatafromUrl()
  }, [url])

  return {data, loading, error} ;
}
