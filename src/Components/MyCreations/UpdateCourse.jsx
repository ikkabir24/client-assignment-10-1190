import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateCourse = () => {

    const {user} = use(AuthContext);
    const course = useLoaderData();

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

        axios.patch(`http://localhost:3000/courses/${course._id}`, newCourse)
        .then(()=>{
            toast('Updated Successfully..!')
        })
    }

    return (
        <form onSubmit={handleOnSubmit} className="max-w-3xl mx-auto bg-base-200 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold mb-4">Update Course</h2>

            <label className="form-control w-full">
                <span className="label-text mb-1">Course Title</span>
                <input
                    type="text"
                    name="title"
                    defaultValue={course.title}
                    placeholder="Enter course title"
                    className="input input-bordered w-full"

                />
            </label> <br /><br />

            <label className="form-control w-full">
                <span className="label-text mb-1">Image URL</span>
                <input
                    type="text"
                    name="imageUrl"
                    defaultValue={course.imageUrl}
                    placeholder="Paste image URL"
                    className="input input-bordered w-full"

                />
            </label><br /><br />

            <label className="form-control w-full">
                <span className="label-text mb-1">Price (৳)</span>
                <input
                    type="number"
                    name="price"
                    defaultValue={course.price}
                    placeholder="Enter price in Taka"
                    className="input input-bordered w-full"

                />
            </label><br /><br />

            <label className="form-control w-full">
                <span className="label-text mb-1">Course Duration</span>
                <input
                    type="text"
                    name="courseDuration"
                    defaultValue={course.courseDuration}
                    placeholder="e.g. 4 weeks"
                    className="input input-bordered w-full"

                />
            </label><br /><br />

            <label className="form-control w-full">
                <span className="label-text mb-1">Category</span>
                <select
                    name="category"
                    className="select select-bordered w-full"

                    defaultValue={course.category}
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
                    name="description"
                    defaultValue={course.description}
                    placeholder="Write a brief course overview"
                    className="textarea textarea-bordered w-full"
                    rows="4"

                />
            </label><br /><br />

            <label className="form-control w-full">
                <span className="label-text mb-1">Instructor Email</span>
                <input
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
                    type="number"
                    name="rating"
                    defaultValue={course.rating}
                    placeholder="Give a rating"
                    className="input input-bordered w-full"
                    min="1"
                    max="5"

                />
            </label><br /><br />

            <button type="submit" className="btn btn-primary w-full">Update Course</button>
        </form>
    );
};

export default UpdateCourse;