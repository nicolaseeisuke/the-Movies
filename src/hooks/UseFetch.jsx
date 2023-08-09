import { useState, useEffect } from "react";

 export const UseFetch = (url) => {

  const [topMovies, setTopMovies] = useState([])
  const [loading, setLoading] = useState(false)

useEffect(() => {
  const getTopRateMovies = async() => {

    setLoading(true)

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results);
    console.log(data);
    setLoading(false)
  } 

  getTopRateMovies()

}, [url])

return {topMovies, loading}

}