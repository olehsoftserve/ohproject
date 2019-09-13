import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { posters } from '../../movies';
import MovieItem from './MovieItem';

export default props => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.co/api/films/`)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results)
      })
  }, []);

  return (

    <Container maxWidth="sm">

      {movies.map((movie, index) => {
        movie.poster = posters[index];
        return <MovieItem movie={movie} key={movie.id} />

      })}
    </Container>
  )
}