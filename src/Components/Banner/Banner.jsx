import React, { use, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

  const { user } = use(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="hero min-h-[70vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="hero-content text-center">
        <div className="max-w-2xl" data-aos="fade-up">
          <h1 className="text-6xl font-bold font-serif drop-shadow-md" data-aos="zoom-in">SkillNest</h1>
          <p className="py-6 text-xl font-light italic" data-aos="fade-up" data-aos-delay="200">Learn. Share. Grow Together.</p>
          <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
            <Link to={'/allCourses'}>
              <button className="btn btn-outline btn-light">Explore Courses</button>
            </Link>
            {user
              ? <Link to="/createCourse">
                <button className="btn btn-light text-gray-500">Create A Course</button>
              </Link>
              : <Link to="/register">
                <button className="btn btn-light text-gray-500">Create A Course</button>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>



  );
};

export default Banner;