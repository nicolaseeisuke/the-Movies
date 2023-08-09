import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

//hooks
import { UseFetch } from "../hooks/UseFetch";

const searchURL = import.meta.env.VITE_SEARCH ;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const url = `${searchURL}?query=${query}&${apiKey}`
  const {topMovies: movies, loading}= UseFetch(url)  

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {loading && <p>carregando...</p>}
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;