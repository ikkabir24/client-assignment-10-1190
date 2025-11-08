import React from 'react';

const PopularCourses = () => {
    return (
        <section className="py-12 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Popular Courses
                </h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                        <div className="card-body">
                            <h3 className="card-title text-lg font-semibold">course.title</h3>
                            <p className="text-sm text-gray-400">course.category</p>
                            <p className="text-sm mt-2 line-clamp-3">course.description</p>
                            <div className="card-actions justify-between items-center mt-4">
                                <span className="badge badge-outline">course.level</span>
                                <button className="btn btn-sm btn-primary">Enroll</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default PopularCourses;