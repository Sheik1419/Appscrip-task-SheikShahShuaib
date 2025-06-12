import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen p-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
