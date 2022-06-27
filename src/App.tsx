import React from 'react';

import {Routes, Route} from "react-router-dom";
import {Sneakers} from "./components/home/Sneakers";
import {Favourites} from "./components/favourites/Favourites";
import {ErrorHandler} from "./components/errorHandler/ErrorHandler";
import {Drawer} from "./components/drawer/Drawer";
import {Login} from "./components/login/Login";
import {Registration} from "./components/reagistration/Registration";
import {Profile} from "./components/profile/Profile";

import './App.css';

export const enum PATH {
    home = '/',
    favourites = '/favourites',
    error = '/error',
    drawer = '/drawer',
    login = '/login',
    signUp = '/registration',
    profile = '/profile'
}

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path={PATH.home} element={<Sneakers />}/>
                <Route path={PATH.favourites} element={<Favourites />}/>
                <Route path={PATH.error} element={<ErrorHandler />}/>
                <Route path={PATH.drawer} element={<Drawer />}/>
                <Route path={PATH.login} element={<Login />}/>
                <Route path={PATH.signUp} element={<Registration />}/>
                <Route path={PATH.profile} element={<Profile />}/>
            </Routes>
        </div>
    );
}

export default App;
