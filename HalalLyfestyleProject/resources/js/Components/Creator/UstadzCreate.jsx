import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function UstadzCreate() {
    const { data, setData, post, errors } = useForm({
        nama: "",
        gender: "",
        gambar: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ustadz.store"), {
            onSuccess: () => {
                Inertia.visit(route("ustadz.index"));
            },
        });
    };

    const handleFileChange = (e) => {
        setData("gambar", e.target.files[0]);
    };

    return (
        <div className="bg-white mx-6 my-4 w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Halaman Tambah Ustadz
            </h2>

            <div className="carousel carousel-end gap-4">
                <div className=" sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="nama"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                className="mt-1 block w-full"
                            />
                            {errors.nama && (
                                <div className="text-red-600">
                                    {errors.nama}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="gender"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Gender
                            </label>
                            <select
                                id="gender"
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                className="mt-1 block w-full"
                            >
                                <option value="">Pilih Gender</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            {errors.gender && (
                                <div className="text-red-600">
                                    {errors.gender}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="gambar"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Gambar
                            </label>
                            <input
                                type="file"
                                id="gambar"
                                onChange={handleFileChange}
                                className="mt-1 block w-full"
                            />
                            {errors.gambar && (
                                <div className="text-red-600">
                                    {errors.gambar}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-hijau text-white px-4 py-2 rounded-md mb-6"
                        >
                            Tambah
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
