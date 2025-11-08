import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { RiUserCommunityFill } from 'react-icons/ri';
import { GrCertificate } from 'react-icons/gr';

const WhyUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const features = [
        {
            title: 'Expert Instructors',
            description: 'Learn from experienced professionals who are passionate about teaching.',
            icon: <FaChalkboardTeacher />
        },
        {
            title: 'Flexible Learning',
            description: 'Access courses anytime, anywhere, and learn at your own pace.',
            icon: <FaCalendarAlt />,
        },
        {
            title: 'Community Support',
            description: 'Join a vibrant learning community and get help when you need it.',
            icon: <RiUserCommunityFill />
        },
        {
            title: 'Verified Certificates',
            description: 'Earn certificates to showcase your skills and boost your career.',
            icon: <GrCertificate />
        },
    ];

    return (
        <section className="py-10 bg-base-100 text-center">
            <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">
                Why Choose SkillNest?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {features.map((feature, index) =>  <div key={index}
                        className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}>
                        <div className="text-5xl mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhyUs;