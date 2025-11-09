import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyEnrolements = () => {

    const { user } = use(AuthContext);
    const [myEnrolements, setMyEnrolements] = useState([])
    const [refetch, setRefetch] = useState(true);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/enrolements?email=${user.email}`)
                .then(axiosData => {
                    setMyEnrolements(axiosData.data);
                })
        }
    }, [user?.email, refetch])

    const handleDeleteCourse = (id) => {
        axios.delete(`http://localhost:3000/enrolements/${id}`)
            .then(() => {
                toast('Successfully Unsubscribed..!');
                setRefetch(!refetch);
            })
    }

    return (
        <div className='p-3'>
            <h1 className='text-lg font-semibold'>My Enrolments: {myEnrolements.length}</h1>

            <div className='p-3 space-y-1'>
                {
                    myEnrolements.map(course => <div key={course._id} className="flex items-center justify-between bg-base-200 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 mb-4">

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <img
                                src={course.imageUrl}
                                className="w-20 h-20 object-cover rounded-md border"
                            />
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
                            <button onClick={() => {
                                handleDeleteCourse(course._id);
                            }} className="btn btn-error btn-sm">
                                Delete
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyEnrolements;