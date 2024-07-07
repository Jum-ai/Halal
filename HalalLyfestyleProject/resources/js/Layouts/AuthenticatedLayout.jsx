import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    console.log(user);
    return (
        <div className="min-h-screen bg-gray-100 shadow-md">
            {header && (
                <header className="bg-hijau shadow flex flex-row h-24 text-white">
                    <div className="w-1/6 py-6 sm:px-6 lg:px-8 navbar-start ">
                        {header}
                    </div>
                    <div className="flex my-6 mx-6 w-1/3 text-black">
                        <input type="text" className="w-full rounded-lg" />
                    </div>
                    {user?.role === "admin" && (
                        <>
                            <div className="text-white max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("dashboard")}
                                    method="get"
                                    as="button"
                                >
                                    Dashboard
                                </a>
                            </div>

                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("education")}
                                    method="get"
                                    as="button"
                                >
                                    Edukasi
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("news")}
                                    method="get"
                                    as="button"
                                >
                                    Berita
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href="http://localhost:8000/foods"
                                    method="get"
                                    as="button"
                                >
                                    Produk
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("keranjang")}
                                    method="get"
                                    as="button"
                                >
                                    Keranjang
                                </a>
                            </div>
                        </>
                    )}
                    {user?.role === "creator" && (
                        <>
                            <div className="text-white max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a className="h-full w-full"
                                    href={route("dashboard")}
                                    method="get"
                                    as="button"
                                >
                                    Dashboard
                                </a>
                            </div>

                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("add.hadist.edu")}
                                    method="get"
                                    as="button"
                                >
                                    Tambah Hadist
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("add.video.edu")}
                                    method="get"
                                    as="button"
                                >
                                    Tambah Video
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("add.news")}
                                    method="get"
                                    as="button"
                                >
                                    Tambah Berita
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("foods.create")}
                                    method="get"
                                    as="button"
                                >
                                    Tambah Makanan
                                </a>
                            </div>
                        </>
                    )}
                    {user?.role === "user" && (
                        <>
                            <div className="text-white max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("dashboard")}
                                    method="get"
                                    as="button"
                                >
                                    Dashboard
                                </a>
                            </div>

                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("education")}
                                    method="get"
                                    as="button"
                                >
                                    Edukasi
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("news")}
                                    method="get"
                                    as="button"
                                >
                                    Berita
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href="http://localhost:8000/foods"
                                    method="get"
                                    as="button"
                                >
                                    Produk
                                </a>
                            </div>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <a
                                    href={route("keranjang")}
                                    method="get"
                                    as="button"
                                >
                                    Keranjang
                                </a>
                            </div>
                        </>
                    )}
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
