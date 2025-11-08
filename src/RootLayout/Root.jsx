import React from 'react';
import Navbar from '../Componen/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componen/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
                 <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;