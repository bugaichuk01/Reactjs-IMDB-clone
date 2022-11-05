import React from 'react';
import {BrowserRouter as Routes} from "react-router-dom";
import './styles/index.scss';
import {Layout} from "@/layout-components/layout/Layout";

function App() {
    return (
        <Routes>
            <Layout/>
        </Routes>
    );
}

export default App;
