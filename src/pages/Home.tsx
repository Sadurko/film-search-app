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

// let movie = {} as MovieIn;
// let movieArray = new Array<MovieIn>;

const Home = () => {

    const [searchMovie, setSearchMovie] = useState('');
    const navigate = useNavigate();

    // handling text written inside search bar
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const lowerCase = e.target.value.toLowerCase();

        setSearchMovie(lowerCase);
    }


    // when search button pressed, adds searched term into URL
    const search = (name: string) => {
        if (name !== '') {
            
            navigate({
                pathname: '/searchmovies',
                search: `search=${name}&page=1`
            });
        }
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


export { Home };
export type { MovieIn };
