import React, { Fragment } from 'react';
// import Headline from './Headline';
// import Greeting from './Greeting';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({

root: {
  height: '88.2vh',
  marginTop: 20
},
poster: {
  height: 400
}

}));

export const MovieDetails = ({ movie, match }) => {
  const classes = useStyles();
  console.log(movie);

  return (
    
    <Fragment>

      <Container fixed maxWidth="lg" className={classes.root} >

      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.episode_id}>Episode_id: </span>{movie.episode_id}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.title}>Title: </span>{movie.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.release_date}>Year: </span>{movie.release_date}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.director}>Director: </span>{movie.director}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.producer}>Producer: </span>{movie.producer}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.opening_crawl}>Description: </span>{movie.opening_crawl}
      </Typography>

      </Container>

    </Fragment>
  )
};

