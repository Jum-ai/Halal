import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function PaymentIndex({ payments }) {
    console.log("pay", payments)
    const { post } = useForm();
    const confirmPayment = (paymentId) => {
        post(route('creator.payments.confirm', paymentId), {
            onSuccess: () => {
            },
        });
    };

    return (
        <div className="rounded-box h-full mx-6 my-4 flex flex-col w-full shadow-md rounded-md">
            <h2 className="mt-6 h-12 font-semibold text-texthijau text-center text-2xl">
                Daftar Pembayaran
            </h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama User</th>
                            <th>Nama Produk</th>
                            <th>Harga Total</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id}>
                                <td>{payment.user.name}</td>
                                <td>{payment.food.name}</td>
                                <td>{payment.total_price}</td>
                                <td>{payment.status}</td>
                                <td>
                                <button onClick={() => confirmPayment(payment.id)}>Confirm</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
