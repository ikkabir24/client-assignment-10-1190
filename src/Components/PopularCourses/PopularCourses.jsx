import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';


const PopularCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/popular')
            .then(axiosData => {
                setCourses(axiosData.data);
            })
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1000 });
        axios.get('http://localhost:3000/popular')
            .then(axiosData => {
                setCourses(axiosData.data);
            });
    }, []);


    return (
        <section className="py-12 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Popular Courses
                </h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {courses.map(course => <div
                            key={course._id}
                            className="card bg-base-200 shadow-md hover:shadow-xl transition"
                            data-aos="fade-up"
                        >
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold">{course.title}</h3>
                                <p className="text-sm text-gray-400">{course.category_title}</p>
                                <div>
                                    <img
                                        className="w-full object-cover"
                                        src={course.imageUrl}
                                        alt={course.title}
                                        data-aos="zoom-in"
                                        data-aos-delay="200"
                                    />
                                </div>
                                <div className="card-actions justify-between items-center mt-4">
                                    <span className="badge badge-outline">
                                        {course.isfeatured ? "Trending" : ""}
                                    </span>
                                    <Link
                                        to={`/courseDetails/${course._id}`}
                                        className="btn btn-sm btn-primary"
                                        data-aos="fade-left"
                                        data-aos-delay="400"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </section>

    );
};

export default PopularCourses;