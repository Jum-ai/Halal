import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function FoodHalal(foods) {
    const [selectedFood, setSelectedFood] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (food) => {
        setSelectedFood(food);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFood(null);
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white rounded-box h-96 mx-6 my-4  w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Makanan Halal & Sehat
            </h2>
            <div className="carousel carousel-end w-full gap-2">
                {foods.foods.map((food) => (
                    <div
                        key={food.id}
                        className="carousel-item card w-64 h-72 bg-base-100 shadow-xl m-auto mt-4"
                        onClick={() => openModal(food)}
                    >
                        <figure className="px-2 pt-4">
                            <img
                                src={`/images/${food.image}`}
                                alt={food.name}
                                className="rounded-xl h-32"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{food.name}</h2>
                            <p>{food.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedFood && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-2xl font-semibold mb-4">
                            {selectedFood.name}
                        </h2>
                        <p>
                            <strong>Kategori:</strong> {selectedFood.category}
                        </p>
                        <p>
                            <strong>Deskripsi:</strong>{" "}
                            {selectedFood.description}
                        </p>
                        <p>
                            <strong>Kalori:</strong> {selectedFood.calories}
                        </p>
                        <p>
                            <strong>Karbohidrat:</strong>{" "}
                            {selectedFood.carbohydrates}
                        </p>
                        <p>
                            <strong>Protein:</strong> {selectedFood.protein}
                        </p>
                        <p>
                            <strong>Lemak:</strong> {selectedFood.fat}
                        </p>
                        <p>
                            <strong>Vitamin:</strong> {selectedFood.vitamins}
                        </p>
                        <p>
                            <strong>Sertifikasi Halal:</strong>{" "}
                            {selectedFood.halal_certification}
                        </p>
                        <img
                            src={`/images/${selectedFood.image}`}
                            alt={selectedFood.name}
                            className="rounded-xl h-32 my-4"
                        />
                        <Link
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                            href={route("request.order")}
                            method="post"
                            data={{ id: selectedFood.id }}
                            as="button"
                            onClick={closeModal}
                        >
                            Masukkan Ke Keranjang
                        </Link>
                        <button
                            className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
                            onClick={closeModal}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
