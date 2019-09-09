import React from 'react';
import Container from '@material-ui/core/Container';

import { movies } from '../../movies';
import MovieItem from './MovieItem';

export default props => {
  return (

    <Container maxWidth="sm">
      

       {movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}

    </Container>
  )
}