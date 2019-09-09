import React from 'react';
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


const MovieItem = (props) => {

  const classes = useStyles();
  return (

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.movie.poster}
        title={props.movie.title}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movie.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.movie.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>Year: </span>{props.movie.year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
          <span>Cast: </span>{props.movie.cast.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Button classes={{ root: classes.btn, label: classes.text }} size="small" color="inherit" className={classes.navLink} >
        Share
          </Button>

      <Link to={`/movies/${props.movie.id}`} className={classes.navLink}>
        <Button classes={{ root: classes.btn, label: classes.text }} size="small" color="inherit">
          Learn More
            </Button>
        </Link>

      </CardActions>

    </Card>
    

  );
};

export default MovieItem;