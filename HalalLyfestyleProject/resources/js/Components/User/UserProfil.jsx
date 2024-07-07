import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

export default function UserProfil({ user }) {
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/add-balance", { amount }).then((response) => {
            if (response.props.flash.message) {
                setMessage(response.props.flash.message);
            }
        });
    };
    return (
        <div className="bg-white rounded-box h-auto mx-6 my-4  w-full shadow-md rounded-md px-5">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                My Profil
            </h2>
            <div className="w-full my-4 rounded-lg pb-12">
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
                    <div className="flex justify-center font-bold text-hijau text-xl pt-4">
                        <h3>Saldo anda : {user.user.balance}</h3>
                    </div>
                    <div className="flex justify-center font-bold text-hijau ">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input
                                type="number"
                                className="rounded-lg"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Masukkan Salado"
                                required
                            />
                            <button className="btn bg-hijau text-white m-2" type="submit">Tambah Saldo</button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                    <div className="flex flex-col items-center text-lg font-medium">
                        <p>Jenis Kelamin : {user.user.gender}</p>
                        <p>Role : {user.user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
