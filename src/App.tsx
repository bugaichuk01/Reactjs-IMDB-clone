import './styles/index.scss';
import React from 'react';
import './App.css';
import {AppRoutes} from "./pages/AppRoutes/AppRoutes";
import {BrowserRouter as Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <AppRoutes/>
        </Routes>
    );
}

export default App;
