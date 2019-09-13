import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDetails } from './MovieDetails';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import { Link } from 'react-router-dom';


const useStyles = makeStyles({

  card: {
    maxWidth: 536,
    margin: 24,
  },
  media: {
    height: 140,
  },
  btn: {
    backgroundColor: '#F5C518',

  },
  text: {
    color: '#000',

  },
  navLink: {
    textDecoration: 'none'
  }
});


const MovieItem = ({movie}) => {

  const classes = useStyles();
  return (

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={movie.poster}
        title={movie.title}
      />
      <CardActionArea>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {movie.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>Year: </span>{movie.year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <span>Cast: </span>{movie.cast.join(', ')}
          </Typography> */}
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
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button classes={{ root: classes.btn, label: classes.text }} size="small" color="inherit" className={classes.navLink} >
          Share
          </Button>

        <Link to={`/movies/${movie.id}`} className={classes.navLink}>
          <Button classes={{ root: classes.btn, label: classes.text }} size="small" color="inherit">
            Learn More
            </Button>
        </Link>

      </CardActions>

    </Card>


  );
};

export default MovieItem;