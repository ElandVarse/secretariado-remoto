import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Components/Pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/"/>
        </BrowserRouter>
    )
}

export default Routes

