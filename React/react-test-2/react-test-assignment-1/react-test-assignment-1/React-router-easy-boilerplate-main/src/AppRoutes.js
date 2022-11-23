import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './Pages/Index.js';
import { Home } from './Pages/Home.js';
import { NotFound } from './Pages/NotFound.js';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}