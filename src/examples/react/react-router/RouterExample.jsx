import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './child-pages/Home';
import About from './child-pages/About';
import NotFound from './child-pages/NotFound';
import User from "./child-pages/Users";

export function RouterExample() {
    return (
        <BrowserRouter>
            <nav style={{ marginBottom: '1rem' }}>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:username" element={<User />} /> {/* dynamic user name handling */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

