import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function ({ user }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, patch, processing, errors } = useForm({
        name: user.user.name,
        email: user.user.email,
        gender: user.user.gender,
        profile_image: user.user.profile_image
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            onSuccess: () => {
                handleCloseModal();
            }
        });
    };

    return (
        <div className="bg-white w-full my-4 shadow-md rounded-lg pb-12">
            <div className="pt-8">
                <div className="avatar flex justify-center">
                    <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
                        <img
                            src={`/images/${user.user.profile_image}`}
                            alt="Profile Image"
                        />
                    </div>
                </div>
                <p className="font-bold mt-4 flex justify-center">
                    {user.user.name}
                </p>
                <p className="flex justify-center">{user.user.email}</p>
            </div>
            <div className="pt-8 flex flex-col items-center">
                <button
                    type="button"
                    className="text-white btn bg-hijau"
                    onClick={handleOpenModal}
                >
                    Change My Data
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <div>{errors.name}</div>}
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                            <div>
                                <label>Gender</label>
                                <select
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && <div>{errors.gender}</div>}
                            </div>
                            <div>
                                <label>Profile Image</label>
                                <input
                                    type="file"
                                    onChange={(e) => setData('profile_image', e.target.files[0])}
                                />
                                {errors.profile_image && <div>{errors.profile_image}</div>}
                            </div>
                            <button type="submit" disabled={processing}>Update Data</button>
                            <button type="button" onClick={handleCloseModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
