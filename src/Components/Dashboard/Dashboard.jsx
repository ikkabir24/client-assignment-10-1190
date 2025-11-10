import React, { use } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Dashboard = () => {

    const { user } = use(AuthContext);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
                <div className="text-center space-y-6 max-w-md">
                    <h1 className="text-4xl font-bold">Welcome to SkillNest</h1>
                    <p className="text-lg text-gray-300">
                        Please <span className="font-semibold text-white">Login</span> or <span className="font-semibold text-white">Register</span> to access your dashboard and start learning.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/login">
                            <button className="btn btn-outline btn-light">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-light text-gray-500">Register</button>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className='p-3'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    {
                        user && <NavLink className={'btn btn-outline btn-light justify-start text-start'} to={'/dashboard/myCreations'}>My Courses</NavLink>
                    }
                    {
                        user && <NavLink className={'btn btn-outline btn-light justify-start text-start'} to={'/dashboard/MyEnrolements'}>My Enrolements</NavLink>
                    }
                </div>
                {
                    user && <NavLink className={'btn btn-primary btn-light justify-start text-start'} to={'/createCourse'}>Create A Course</NavLink>
                }
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;