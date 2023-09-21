import React, { FC } from 'react';
import MovieShort from '../components/MovieShort';
import { movie } from '../pages/Home';

const SearchResults: FC = () => {

    return (
        <>
            <MovieShort movie={movie}></MovieShort>
        </>
    )
}

export default SearchResults;