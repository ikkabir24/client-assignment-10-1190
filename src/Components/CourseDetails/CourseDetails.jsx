import React from 'react';
import { BiWallet } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const CourseDetails = () => {

    const course = useLoaderData();
    console.log(course);

    const handleEnroll = () => {
        toast('Successfully Enrolled..!')
    }

    return (
        <div className="max-w-4xl mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/2 h-64 md:h-auto">
                <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                    <p className="text-sm text-gray-400 mb-4">{course.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <span className="badge badge-outline"><FaCalendar></FaCalendar> {course.courseDuration}</span>
                        <span className="badge badge-outline"><BiWallet></BiWallet> ৳ {course.price}</span>
                        <span className="badge badge-outline"><FaStar></FaStar> {course.rating}/5</span>
                        {course.isfeatured && <span className="badge badge-primary">Featured</span>}
                    </div>

                    <p className="text-xs text-gray-500">Instructor: {course.ownerEmail}</p>
                </div>

                <div className="mt-6 flex gap-4">
                    <button onClick={handleEnroll} className="btn btn-primary btn-sm">Enroll</button>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;