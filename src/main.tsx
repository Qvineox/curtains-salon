import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./pages/home/home.tsx";
import Root from "./layouts/root/root.tsx";
import {BrowserRouter, Route, Routes} from "react-router";

import "./styles/decals.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Root/>}>
                    <Route path="/" element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
