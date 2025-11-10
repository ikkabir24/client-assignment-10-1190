import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';

const Error = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
            <div className="text-center space-y-6 max-w-md" data-aos="fade-up">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/">
                    <button className="btn btn-outline text-gray-400">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;