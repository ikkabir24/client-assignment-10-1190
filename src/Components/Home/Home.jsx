import React from 'react';
import Banner from '../Banner/Banner';
import PopularCourses from '../PopularCourses/PopularCourses';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div className='bg-base-400'>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;