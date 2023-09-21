import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { MovieIn } from '../pages/Home';


type Props = {
    movie: MovieIn;
}

const MovieShort: FC<Props> = ({ movie }) => {

    return (
        <>
            <Typography
                variant='h1'
                sx={{
                    m: '5px',
                    fontSize: '20px',
                    color: '#01013b'
                }}
            >
                {movie.Title}
            </Typography>

            <Typography
                variant='h2'
                sx={{
                    m: '5px',
                    fontSize: '15px'
                }}
            >
                Made: {movie.Year} 
                Released: {movie.Released}
            </Typography>

            <Typography
                variant='h2'
                sx={{
                    m: '5px',
                    fontSize: '15px'
                }}
            >
                {movie.Plot}
            </Typography>
        </>
    )
}

export default MovieShort;