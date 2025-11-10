import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import LoadingPage from '../LoadingPage/LoadingPage';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const CreateCourse = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {

        e.preventDefault();

        const title = e.target.title.value;
        const imageUrl = e.target.imageUrl.value;
        const price = e.target.price.value;
        const courseDuration = e.target.courseDuration.value;
        const category_title = e.target.category.options[e.target.category.selectedIndex].text;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const ownerEmail = e.target.ownerEmail.value;
        const rating = e.target.rating.value;

        const newCourse = {
            title, imageUrl, price, courseDuration, category_title, category, description, isfeatured: false, ownerEmail, rating
        }

        axios.post('http://localhost:3000/courses', newCourse)
            .then(() => {
                toast("Congratulations, You've successfully created your course..!")
            })
            .catch(error => {
                toast(error.message)
                console.log(error)
            })

        console.log(newCourse);
    }

    const handleBack = () => {
        navigate(-1);
    }

    return (

        <div>

            <form onSubmit={handleOnSubmit} className="max-w-3xl mx-auto bg-base-200 p-6 rounded-lg shadow-md space-y-4">

                <button type='button' onClick={handleBack} className='flex gap-2 items-center btn btn-outline'>
                    <IoArrowBack />
                    Back
                </button>

                <h2 className="text-2xl font-bold mb-4">Create New Course</h2>

                <label className="form-control w-full">
                    <span className="label-text mb-1">Course Title</span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Enter course title"
                        className="input input-bordered w-full"

                    />
                </label> <br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Image URL</span>
                    <input
                        type="text"
                        name="imageUrl"
                        required
                        placeholder="Paste image URL"
                        className="input input-bordered w-full"

                    />
                </label><br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Price (৳)</span>
                    <input
                        type="number"
                        name="price"
                        required
                        placeholder="Enter price in Taka"
                        className="input input-bordered w-full"

                    />
                </label><br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Course Duration</span>
                    <input
                        required
                        type="text"
                        name="courseDuration"
                        placeholder="e.g. 4 weeks"
                        className="input input-bordered w-full"

                    />
                </label><br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Category</span>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="CreativeLifestyleSkills">Creative & Lifestyle Skills</option>
                        <option value="TechDigitalSkills">Tech & Digital Skills</option>
                        <option value="PersonalGrowthCommunication">Personal Growth & Communication</option>
                        <option value="BusinessPracticalSkills">Business & Practical Skills</option>
                        <option value="Others">Others</option>
                    </select>
                </label><br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Course Description</span>
                    <textarea
                        required
                        name="description"
                        placeholder="Write a brief course overview"
                        className="textarea textarea-bordered w-full"
                        rows="4"

                    />
                </label><br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Instructor Email</span>
                    <input
                        required
                        type="email"
                        name="ownerEmail"
                        defaultValue={user.email}
                        placeholder="Enter instructor email"
                        className="input input-bordered w-full"

                    />
                </label><br /><br />

                <label className="form-control w-full">
                    <span className="label-text mb-1">Rating (1–5)</span>
                    <input
                        required
                        type="number"
                        name="rating"
                        placeholder="Give a rating"
                        className="input input-bordered w-full"
                        min="1"
                        max="5"

                    />
                </label><br /><br />

                <button type="submit" className="btn btn-primary w-full">Create Course</button>
            </form>
        </div>

    );

};

export default CreateCourse;