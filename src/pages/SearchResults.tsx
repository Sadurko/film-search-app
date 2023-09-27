import { IconButton, Grid, Typography, Container } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import MovieList from '../components/MovieList';
import { MovieIn } from "./Home";



const SearchResults: FC = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const search = searchParams.get('search');
    const [page, setPage] = useState(searchParams.get('page'));
    const [pageIndexes, setPageIndexes] = useState<number[]>([]);

    let pages = 1;

    const [movies, setMovies] = useState<MovieIn[]>([]);

    // load API key from .env file
    const apiKey = process.env.REACT_APP_APIKEY;


    // get movie from OMBD API
    const fetchJson = async() => {
        const URL = `https://www.omdbapi.com/?s=${search}&page=${page}&apikey=${apiKey}`;
        const response = await fetch(URL);

        console.log(`Fetching results for ${search} on page: ${page}`);

        const json = await response.json();
        return json;
    }

    

    useEffect(() => {
        
        fetchJson().then((value) => {
            console.log('Fetch succesful');

            setMovies(value.Search);
            
            // get number of pages that will have to be rendered
            // OMDB returns max 10 results per page
            pages = (Math.floor(value.totalResults/10) || 1);
            setPageIndexes(Array.from(Array(pages).keys()));
        })
        .catch((e) => {
            console.error(e);
            // TODO: handle error
        })
    }, [page])



    return (
        <>
            <Container>
                <MovieList movies={movies} />
            </Container>
        
            <Typography sx={{ textAlign: 'center' }}>Pages</Typography>

            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>

                {/* Switching pages */}
                {pageIndexes.map(i => (
                    <Grid item key={i} xs={0.25}>
                        <IconButton 
                            disabled={ page === `${i + 1}` }
                            onClick={() => {
                                setPage(`${i + 1}`);
                                navigate({
                                    pathname: '/searchmovies',
                                    search: `search=${search}&page=${i + 1}`
                                })
                            }}
                        >{i + 1}</IconButton>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SearchResults;