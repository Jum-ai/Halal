import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function KeranjangIndex({ order }) {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [useDelivery, setUseDelivery] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedFood, setSelectedFood] = useState(null);

    const form = useForm({
        order_id: null,
        use_delivery: false,
        total_price: 0,
        food_id: null,
    });

    const deliveryFee = 10000.00; // Contoh biaya pengiriman

    const openModal = (order) => {
        setSelectedOrder(order);
        setSelectedFood(order.food.id);
        const price = useDelivery ? parseFloat(order.food.price) + deliveryFee : parseFloat(order.food.price);
        setTotalPrice(price);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedOrder(null);
        setIsModalOpen(false);
    };

    const handleDeliveryChange = (event) => {
        const useDelivery = event.target.value === "Ya";
        setUseDelivery(useDelivery);
        const price = useDelivery ? parseFloat(selectedOrder.food.price) + deliveryFee : parseFloat(selectedOrder.food.price);
        setTotalPrice(price);
    };

    const handlePayment = () => {
        form.setData({
            order_id: selectedOrder.id,
            use_delivery: useDelivery,
            total_price: totalPrice,
            food_id: selectedFood,
        });

        form.post(route('payment.process'), {
            onSuccess: () => {
                closeModal();
            },
        });
    };

    return (
        <div className="rounded-box h-full mx-6 my-4 flex flex-col w-full shadow-md rounded-md bg-hijau">
            <h2 className="mt-6 h-12 font-semibold text-texthijau text-center text-2xl">
                Daftar Produk Orderan
            </h2>

            <div className="carousel carousel-end h-5/6 gap-2 mx-3">
                {order.map((order) => (
                    <div
                        key={order.id}
                        className="carousel-item card w-4/12 h-full bg-base-100 shadow-xl m-auto"
                    >
                        <figure className="px-2 pt-4">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="rounded-xl h-32"
                            />
                        </figure>
                        <div className="card-body items-center h-20">
                            <h2 className="card-title">{order.food.name}</h2>
                            <p>{order.food.price}</p>
                        </div>
                        <div className="card-body">
                            <p>Deskripsi : {order.food.description}</p>
                            <p>Kategori : {order.food.category}</p>
                            <p>Komposisi : {order.food.ingredients}</p>
                            <p>Cara Pengolahan : {order.food.instructions}</p>
                            <p>
                                Sertifikat Halal : {order.food.halal_certification}
                            </p>
                            <p>Kalori : {order.food.calories}</p>
                            <p>Karbohidrat : {order.food.carbohydrates}</p>
                            <p>Lemak : {order.food.fat}</p>
                            <p>Protein : {order.food.protein}</p>
                            <p>Vitamin : {order.food.vitamins}</p>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                                onClick={() => openModal(order)}
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedOrder && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <p>
                            <strong>Apakah Anda Ingin Menggunakan Jasa Pengiriman?</strong>
                        </p>
                        <select name="delivery" onChange={handleDeliveryChange}>
                            <option value="Tidak">Tidak</option>
                            <option value="Ya">Ya</option>
                        </select>
                        <div className="mt-4">
                            <strong>Total Harga: {totalPrice.toFixed(2)}</strong>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                onClick={closeModal}
                            >
                                Batal
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                                onClick={handlePayment}
                            >
                                Bayar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
