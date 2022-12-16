import React from 'react';
import {Route, Routes} from 'react-router';
import {Film} from "./pages/film";
import {Home} from "./pages/home/Home";
import {Actor} from "./pages/actor/Actor";
import {Catalog} from "./pages/catalog/Catalog";
import {AwaitFilms} from "./pages/top-await-films/AwaitFilms";
import {BestFilms} from "./pages/top-250-best-films/BestFilms";
import {PopularFilms} from "./pages/top-100-popular-films/PopularFilms";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/film/:id' element={<Film/>}/>
                <Route path='/films' element={<Catalog/>}/>
                <Route path='/popular-films' element={<PopularFilms/>}/>
                <Route path='/best-films' element={<BestFilms/>}/>
                <Route path='/await-films' element={<AwaitFilms/>}/>
                <Route path='/name/:id' element={<Actor/>}/>
            </Routes>
        </>
    );
}

