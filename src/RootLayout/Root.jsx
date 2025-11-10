import React from 'react';
import Navbar from '../Componen/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componen/Footer';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;
