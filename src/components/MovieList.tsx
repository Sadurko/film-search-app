import { Grid, CardMedia, Card, Typography } from '@mui/material';
import React, { FC } from 'react';
import { MovieIn } from '../pages/Home';
import { useNavigate } from 'react-router-dom';

type Props = {
    movies: Array<MovieIn>;
}

const MovieList: FC<Props> = ({ movies }) => {

    const navigate = useNavigate();
    const navigateTo = (movieName: string) => {
        navigate({
            pathname: '/movieinfo',
            search: `movie=${movieName}`
        })
    } 

    // indexes for rendering
    const indexes = Array.from(Array(movies.length).keys());
    console.log(movies[0])

    // TODO: write text if poster is not added

    return(
        <>
            <Grid container>
                {indexes.map(i => (
                    <Grid item key={i} xs={2}>
                        <Card
                            onClick={() => navigateTo(movies[i].Title)}
                            sx={{
                                width: 320,
                                maxWidth: { xs: 320, md: 220 },
                                mr: '10px',
                                mt: '10px',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                            
                        >
                            <CardMedia
                                component='img'
                                sx={{
                                    height: 428,
                                    width: 300,
                                    maxHeight: { xs: 428, md: 285 },
                                    maxWidth: { xs: 300, md: 200},
                                    mx: 'auto',
                                    mt: '10px',
                                    mb: '5px'
                                }}
                                image={movies[i].Poster}
                                alt={movies[i].Title}
                            />

                            <Typography 
                                sx={{ textAlign: 'center' }}
                            >
                                {movies[i].Title} ({movies[i].Year})
                            </Typography>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default MovieList;