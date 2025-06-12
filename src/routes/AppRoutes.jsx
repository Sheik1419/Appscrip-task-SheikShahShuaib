import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout.jsx';

// Pages
import Home from '../pages/Home.jsx';

// CSS
import "../assets/css/common.css";
import "../assets/css/style.css";
import "../assets/css/button.css";
import "../assets/css/modal.css";

const AppRoutes = () => {
    return (
        <Routes>
            {/* User Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
