import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import CourseCard from './CourseCard';
import LoadingPage from '../LoadingPage/LoadingPage';

const AllCourses = () => {

    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    const categories = useLoaderData();

    useEffect(() => {
        axios.get('http://localhost:3000/courses')
            .then(axiosData => {
                setCourses(axiosData.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }, []);

    const handleCategory = (category) =>{
        axios.get(`http://localhost:3000/courses?category=${category}`)
        .then(axiosData => {
                setCourses(axiosData.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4'>
            <div className='col-span-1'>
                <h1 className='p-3 font-semibold text-lg'>Categories</h1>

                <div className='flex flex-col space-y-2 p-3'>
                    {
                        categories.map(cat => <button
                            onClick={() => handleCategory(cat.category)}
                            key={cat._id}
                            className='btn btn-outline btn-light justify-start text-start'>{cat.category_title}</button>
                        )
                    }
                </div>

            </div>

            <div className='md:col-span-2 lg:col-span-3 p-3'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        courses.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCourses;