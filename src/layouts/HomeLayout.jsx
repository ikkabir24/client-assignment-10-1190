import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='container mx-auto'>

            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;