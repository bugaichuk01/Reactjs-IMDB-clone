import React from 'react';
import {Route, Routes} from 'react-router';
import {Home} from "./pages/home/Home";
import {Film} from "./pages/film";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/film/:id' element={<Film/>}/>
            </Routes>
        </>
    );
}

