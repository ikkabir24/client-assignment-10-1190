import React, { use, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import LoadingPage from '../LoadingPage/LoadingPage';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isLongEnough) {
            setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            
            return;
        }


        setLoading(true);

        createUser(email, password)
            .then(result => {
                const newUser = result.user
                updateUser({
                    displayName: name,
                    photoURL
                })
                    .then(() => {
                        setUser({ ...newUser, displayName: name, photoURL });
                        setLoading(false);
                        toast('Registration successfull..!');
                        navigate(`${location.state
                            ? location.state
                            : '/'
                            }`)
                    })
                    .catch(error => {
                        ToastContainer(error.message)
                    })

            })
            .catch(error => {
                toast(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        googleSignIn()
            .then(result => {
                setUser(result.user);
                setLoading(false);
                toast('Logged in successfully..!');
                navigate(`${location.state
                    ? location.state
                    : '/'
                    }`)
            })
            .catch(error => {
                toast(error.message);
            })
    }

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className='flex justify-center items-center min-h-[80vh] p-3 md:7 lg:p-10 bg-base-200'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-2xl text-center mt-5'>Register your account</h1>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Name" required />

                        {/* Photo URl */}
                        <label className="label">Photo URl</label>
                        <input name='photoURL' type="text" className="input w-full" placeholder="Photo URl here" required />

                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password'
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                className="input w-full" placeholder="Enter Password" />
                            {
                                showPassword
                                    ? <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className="btn-xs absolute top-3 right-6 text-lg">Show</FaRegEyeSlash>
                                    : <MdOutlineRemoveRedEye onClick={() => setShowPassword(!showPassword)} className="btn-xs absolute top-3 right-6 text-lg">Show</MdOutlineRemoveRedEye>
                            }
                        </div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='text-center mt-3'>Already Have An Account ? <Link className='text-secondary' to={'/login'}>Click to Login</Link></p>

                    </fieldset>
                    {
                        error
                        ? <p className='text-secondary'>{error}</p>
                        : ''
                    }
                </form>
                <p className='text-center'>or</p>
                <div className='flex justify-center pb-5'>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Register;