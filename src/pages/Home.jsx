import MovieCard from "../components/MovieCard";

//hooks;
import { UseFetch } from "../hooks/UseFetch";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const url = `${moviesURL}top_rated?${apiKey}`;

const Home = () => {

  const {topMovies, loading} = UseFetch(url)

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;