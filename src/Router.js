import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import NotFould from './Pages/NotFould';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/*' element={<NotFould/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}