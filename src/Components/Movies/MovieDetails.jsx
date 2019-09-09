import React, { Fragment } from 'react';
import Headline from './Headline';
import Greeting from './Greeting';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { movies } from '../../movies'
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

export const MovieDetails = props => {

  const classes = useStyles();
  
  // console.log(props);

  const movie = movies.find(item => item.id === parseInt(props.match.params.id, 10));
  console.log(movie)

  return (
    
    <Fragment>

      <Container fixed maxWidth="lg" className={classes.root} >

      <Typography variant="body2" color="textSecondary" component="p">
            <img className={classes.poster} src={movie.poster} alt="poster"/>
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            {'Movie id: ' + parseInt(props.match.params.id, 10)}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.title}>Title: </span>{movie.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.year}>Year: </span>{movie.year}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.cast}>Cast: </span>{movie.cast.join(', ')}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.description}>Description: </span>{movie.description}
      </Typography>

          <Headline />
          <Greeting id={this.props.id} name={this.props.name} age={this.props.age}/>
          <p>Testing rendering with JSX</p>
      </Container>

    </Fragment>
  )
};

