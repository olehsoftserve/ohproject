import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { MovieDetails } from './MovieDetails';


export default () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/films/`)
            .then(res => {
                setMovies(res.data.results)
            })
    }, [])
    return (
        <ul>
            {movies.map(movie => <MovieDetails movie={movie}/>)}
        </ul>
    )
}
