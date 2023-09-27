import { Grid, CardMedia, Card, Typography, Box } from '@mui/material';
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
                    <Grid item key={i} xs={4} lg={2.4}>
                        <Card
                            onClick={() => navigateTo(movies[i].Title)}
                            sx={{
                                width: 220,
                                height: 375,
                                mr: '10px',
                                mt: '10px',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}
                            
                        >
                            { (movies[i].Poster === 'N/A') // in case there is no poster for the movie
                            ? <Box
                                sx={{
                                    width: 200,
                                    height: 285,
                                    mx: 'auto',
                                    mt: '10px',
                                    mb: '5px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography>Poster not yet added</Typography>
                            </Box>
                            : <CardMedia
                                component='img'
                                sx={{
                                    height: 285,
                                    width: 200,
                                    mx: 'auto',
                                    mt: '10px',
                                    mb: '5px'
                                }}
                                image={movies[i].Poster}
                                alt={movies[i].Title}
                            />
                            }

                            <Box sx={{ height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography 
                                    sx={{
                                        textAlign: 'center',
                                        // limiting text for only 3 lines max
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                    }}
                                >
                                    {movies[i].Title} ({movies[i].Year})
                                </Typography>
                            </Box>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default MovieList;