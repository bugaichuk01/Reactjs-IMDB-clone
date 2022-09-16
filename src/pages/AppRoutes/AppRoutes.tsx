import React from 'react';
import {Route, Routes} from 'react-router';
import {HomePage} from "../HomePage/HomePage";
import {FilmPage} from "../FilmPage/FilmPage";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:id' element={<FilmPage />} />
            </Routes>
        </>
    );
}

