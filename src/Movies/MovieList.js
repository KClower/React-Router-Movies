import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function MovieList(props) {


  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const getMovies = () => {
  //     axios
  //       .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
  //       .then(response => {
  //         console.log(response.data)
  //         setMovies(response.data)
  //         // Study this response with a breakpoint or log statements
  //         // and set the response data as the 'movies' slice of state
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   }
  //   getMovies();
  // }, []);

console.log(props)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <Link to={`/Movies/${id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
}
