import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function CreateForum({ kategori }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(`/forum/${kategori}`, { title, description });
    };
    return (
        <>
            <div className="bg-white rounded-box h-auto mx-6 my-4  w-full shadow-md rounded-md ">
                <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                    Buat Diskusi Baru di Forum{" "}
                    {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
                </h2>

                <div className="carousel carousel-end w-full gap-2 m-5 flex flex-col items-center">
                    <form onSubmit={handleSubmit} className="text-dark font-semibold">
                        <div className="form-group flex flex-row gap-4 ">
                            <label htmlFor="title">Judul</label>
                            <input
                                placeholder="Judul"
                                className="input input-bordered w-full max-w-xs"
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Deskripsi</label>
                            <textarea
                                placeholder="Deskripsi"
                                className="textarea textarea-bordered textarea-md w-full max-w-xs"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="text-white btn bg-hijau">Kirim</button>
                    </form>
                </div>
            </div>
        </>
    );
}
