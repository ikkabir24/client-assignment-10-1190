import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const CourseCard = ({course}) => {
    return (
        <div className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300">
            <figure className="h-48 overflow-hidden">
                <img src={course.imageUrl} alt={course.title} className="w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-500">{course.category_title}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className='flex items-center gap-1'><FaStar></FaStar> {course.rating}/5</span>
                    {course.isfeatured && <span className="badge badge-primary">Featured</span>}
                </div>
                <div className="card-actions mt-4 flex justify-end">
                    <Link to={`/courseDetails/${course._id}`} className="btn btn-outline btn-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default CourseCard;