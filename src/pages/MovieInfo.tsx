import React, { useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieIn } from "./Home";
import { Typography, Box } from "@mui/material";


const MovieInfo = () => {

    const [searchParams] = useSearchParams();
    const search = searchParams.get('movie');

    const [movie, setMovie] = useState<MovieIn>(Object);

    useLayoutEffect(() => {

        // getting api key from .env
        const apiKey = process.env.REACT_APP_APIKEY;

        // fetching movie info from OMDB API
        const fetchJson = async() => {
            const URL =  `https://www.omdbapi.com/?t=${search}&apikey=${apiKey}`;
            const response = await fetch(URL);

            const json = await response.json();
            return json;
        }   

        if (search !== '' || search !== null) {

            fetchJson().then((value) => {
                setMovie(Object.assign(value))
                console.log(value);
            })
            .catch((e) => {
                console.error(e);
            })
        }
    }, [])


    

    return (
        <>
            <Typography>
                {movie.Title}
            </Typography>
            

            <Box sx={{ display: 'flex' }}>
                <Typography>Made: {movie.Year}</Typography>
                <Typography sx={{ mx: '20px' }}>Released: {movie.Released}</Typography>
                <Typography>Genre: {movie.Genre}</Typography>
            </Box>

            <Typography sx={{ mt: '10px' }}>
                Cast: {movie.Actors}
            </Typography>


            <Typography sx={{ mt: '10px' }}>
                {movie.Plot}
            </Typography>
        </>
    )
}

export default MovieInfo;