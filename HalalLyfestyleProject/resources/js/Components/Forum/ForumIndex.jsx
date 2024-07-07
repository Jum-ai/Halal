import React from "react";
import { Link } from "@inertiajs/react";

export default function Forum({ discussions, kategori }) {
    return (
        <div className="bg-white rounded-box h-auto mx-6 my-4  w-full shadow-md rounded-md py-5">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Halaman Forum Diskusi{" "}
                {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
            </h2>

            <div className="carousel carousel-end w-full gap-2 m-5">
                {discussions.map((discussion) => (
                    <div
                        key={discussion.id}
                        className="rounded-md  bg-hijau text-white w-1/3 shadow-xl"
                    >
                        <div className="card-body">
                            <h2 className="card-title">{discussion.title}</h2>
                            <p>{discussion.description}</p>
                            <div className="card-actions justify-end">
                                <Link
                                    className="bg-white text-hijau btn btn-primary"
                                    href={`/forum/${kategori}/${discussion.id}`}
                                >
                                    Kunjungi Forum
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center">
                <Link
                    href={route("forum.create")}
                    method="get"
                    as="button"
                    className="bg-hijau text-white btn btn-primary"
                >
                    Buat Diskusi Baru
                </Link>
            </div>
        </div>
    );
}
