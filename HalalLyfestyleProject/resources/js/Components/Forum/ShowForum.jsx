import React from "react";
import { Link, useForm } from "@inertiajs/react";

export default function ShowForum({ discussions, user }) {
    const form = useForm({
        discussion_id: discussions.id,
        content: "",
    });

    const submit = (e) => {
        e.preventDefault();

        form.post("/messages", {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    };
    console.log(user);

    return (
        <div className="bg-white rounded-box h-full mx-6 my-4 w-full shadow-md rounded-md px-5 pb-5">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                {discussions.title}
            </h2>
            <p className="text-center">{discussions.description}</p>

            <div className="carousel carousel-end w-full gap-2 rounded-md h-4/6 my-5 border border-current">
                <div className="w-full">
                    {discussions.messages.map((message) => (
                        <div
                            key={message.id}
                            className={`chat ${
                                message.user.name === user.name
                                    ? "chat-end"
                                    : "chat-start"
                            }`}
                        >
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="avatar"
                                        src={
                                            `/images/${message.user.profile_image}` ||
                                            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        }
                                    />
                                </div>
                            </div>
                            <div className="chat-header">
                                <p>{message.user.name}</p>
                                <time className="text-xs opacity-50">
                                    {new Date(
                                        message.created_at
                                    ).toLocaleTimeString()}
                                </time>
                            </div>
                            <div className="chat-bubble bg-hijau w-auto">
                                {message.content}
                            </div>
                            <div className="chat-footer opacity-50">
                                Delivered
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={submit}>
                <input
                    placeholder="Masukkan Pesan"
                    className="input input-bordered w-5/6 mx-3"
                    name="content"
                    value={form.data.content}
                    onChange={(e) => form.setData("content", e.target.value)}
                    required
                ></input>
                <input
                    type="hidden"
                    name="discussion_id"
                    value={discussions.id}
                />
                <button
                    type="submit"
                    disabled={form.processing}
                    className="text-white btn bg-hijau w-1/12"
                >
                    Kirim
                </button>
            </form>
        </div>
    );
}
