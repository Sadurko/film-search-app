import React, { ChangeEvent, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

interface MovieIn {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: Array<any>;
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
}

let movie = {} as MovieIn;

const Home = () => {

    const [searchMovie, setSearchMovie] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const lowerCase = e.target.value.toLowerCase();

        setSearchMovie(lowerCase);
    }


    // load APIKEY from .env file
    const apiKey = process.env.REACT_APP_APIKEY;

    const fetchJson = async(name: string) => {
        console.log(`Fetching movie: ${name}`);

        const URL = `https://www.omdbapi.com/?t=${name}&apikey=${apiKey}`;
        const response = await fetch(URL);

        const json = await response.json();
        return json;
    }

    const search = (name: string) => {
        fetchJson(name)
        .then((value) => {
            console.log('Success');
            movie = Object.assign({}, value);

            console.log(movie);

            navigate('/searchmovies');
        })
        .catch((e) => {
            console.error(e);
            // TODO: handle error
        })
    }


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                height: '400px'
            }}
        >
            <SearchBar
                onChange={handleChange}
                onSearch={() => search(searchMovie)}
            />          
        </Box>
    )
}


export { Home, movie };
export type { MovieIn };
