import { Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import React from 'react';
import SearchResults from "../pages/SearchResults";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/searchmovies" element={<SearchResults/>} />
            <Route path="/movie" element={<MovieInfo/>} />
        </Routes>
    )
}

export default AppRoutes;