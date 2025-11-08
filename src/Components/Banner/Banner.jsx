import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Banner = () => {

  const {user} = use(AuthContext);

  return (
    <div className="hero min-h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold font-serif drop-shadow-md">SkillNest</h1>
          <p className="py-6 text-xl font-light italic">Learn. Share. Grow Together.</p>
          <div className="flex justify-center gap-4">
            <Link to={'/allCourses'}><button className="btn btn-outline btn-light">Explore Courses</button></Link>
            {
              user
              ? <Link to='/createCourse'><button className="btn btn-light text-indigo-600">Create A Course</button></Link>
              : <Link to='/register'><button className="btn btn-light text-indigo-600">Create A Course</button></Link>
            }
          </div>
        </div>
      </div>
    </div>


  );
};

export default Banner;