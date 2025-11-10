import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        axios.get('https://skills-nest-server.vercel.app/topInstructors')
            .then(axiosData => setInstructors(axiosData.data));
    }, []);

    return (
        <section className="py-12 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">
                    Top Instructors
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {instructors.map((instructor, index) => (
                        <div
                            key={instructor._id}
                            className="card bg-base-200 shadow-md hover:shadow-xl transition"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <figure className="px-6 pt-6">
                                <img
                                    src={instructor.imageUrl}
                                    alt={instructor.name}
                                    className="rounded-xl w-32 h-32 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-lg font-semibold">{instructor.name}</h3>
                                <p className="text-sm text-gray-500">{instructor.expertise}</p>
                                <div className="card-actions mt-4">
                                    <button className="btn btn-outline btn-sm">View Profile</button>
                                    <button className="btn btn-primary btn-sm">Courses</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopInstructors;