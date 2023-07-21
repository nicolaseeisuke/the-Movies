import {useState, useEffect} from 'react'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [topMovies, setTopMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getTopRateMovies = async(url) => {

    setLoading(true)

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results);
    setLoading(false)
  } 

  useEffect(() => {
    
    const topRateUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRateMovies(topRateUrl)
  },[])

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {topMovies && topMovies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
    </div>
  )
}

export default Home