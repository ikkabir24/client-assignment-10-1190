import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import userAvatar from '../../assets/user.png';
import { AuthContext } from '../../provider/AuthProvider';
import { LuLogIn, LuLogOut, LuUserRoundPlus } from 'react-icons/lu';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    
    useEffect(()=>{
        const html = document.querySelector('html');
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme])

    const links = <ul className='flex flex-col md:flex-row space-x-3'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allCourses'}>All Courses</NavLink>
        {/* {
            user && <NavLink to={'/myCreations'}>My Courses</NavLink>
        }
        {
            user && <NavLink to={'/MyEnrolements'}>My Enrolements</NavLink>
        } */}
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
    </ul>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast('Logged out successfully..!')
            })
            .catch(error => {
                toast(error.message);
            })
    }

    const handleTheme = (checked) => {
        setTheme(checked ? 'dark' : 'light')
    }


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu flex-row menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SkillNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" m-0 px-0 py-0 rounded-full">
                        <div className='p-1 rounded-[100%] bg-base-200'>
                            {
                                user
                                    ? <img className='h-10 w-10 rounded-full' src={user.photoURL} />
                                    : <img className='h-10 w-10 rounded-full' src={userAvatar} />
                            }
                        </div>
                    </div>
                    {
                        user
                            ? <ul tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0 space-y-1">
                                <li onClick={handleLogOut}><Link><LuLogOut /> Logout</Link></li>

                                <li>
                                    <div className='flex'>

                                        <input
                                            onChange={(e)=>handleTheme(e.target.checked)}
                                            type="checkbox"
                                            defaultChecked={localStorage.getItem('theme') === "dark"}
                                            className="toggle" />
                                        <p>Dark Mode</p>
                                    </div>
                                </li>


                            </ul>
                            : <ul tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0 space-y-1">
                                <li><Link to={'/login'}><LuLogIn /> Login</Link></li>
                                <li><Link to={'/register'}><LuUserRoundPlus /> Registration</Link></li>
                                <li>
                                    <div className='flex'>

                                        <input
                                            onChange={(e)=>handleTheme(e.target.checked)}
                                            type="checkbox"
                                            defaultChecked={localStorage.getItem('theme') === "dark"}
                                            className="toggle" />
                                        <p>Dark Mode</p>
                                    </div>
                                </li>
                            </ul>

                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;