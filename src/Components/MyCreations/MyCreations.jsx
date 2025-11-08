import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import LoadingPage from '../LoadingPage/LoadingPage';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyCreations = () => {

    const { user } = use(AuthContext);

    const [myCourse, setMyCourse] = useState([]);
    const [refetch, setRefetch] = useState(true)

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/courses?email=${user.email}`)
                .then(axiosData => {
                    setMyCourse(axiosData.data)
                })
        }
    }, [user?.email, refetch])

    const handleDeleteCourse = (id) => {
        axios.delete(`http://localhost:3000/courses/${id}`)
        .then(()=>{
            toast("Deleted Successfully..!")
        })
    }

    return (
        <div>
            <div className='flex justify-between items-center p-3'>
                <h1 className='font-semibold text-lg'>My Courses: {myCourse.length}</h1>
                <Link to='/createCourse' className="btn btn-outline btn-light">Create a Course</Link>
            </div>


            <div>
                {
                    myCourse.map(course => <div key={course._id} className="flex items-center justify-between bg-base-200 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 mb-4">

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <img
                                src={course.imageUrl}
                                className="w-20 h-20 object-cover rounded-md border"
                            />
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
                            <Link to={`/courseDetails/${course._id}`} className="btn btn-outline btn-sm">
                                View Details
                            </Link>
                            <Link to={`/updateCourse/${course._id}`} className="btn btn-info btn-sm">
                                Update
                            </Link>
                            <button onClick={()=>{
                                handleDeleteCourse(course._id); 
                                setRefetch(!refetch)}} className="btn btn-error btn-sm">
                                Delete
                            </button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyCreations;