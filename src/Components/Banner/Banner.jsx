import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold font-serif drop-shadow-md">SkillNest</h1>
          <p className="py-6 text-xl font-light italic">Learn. Share. Grow Together.</p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-outline btn-light">Explore Courses</button>
            <button className="btn btn-light text-indigo-600">Become a Creator</button>
          </div>
        </div>
      </div>
    </div>


    );
};

export default Banner;