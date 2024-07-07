import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import Sidebar from "@/Main/Sidebar";
import { Head, Link } from "@inertiajs/react";
import ShowForum from "@/Components/Forum/ShowForum";

export default function ForumCreate(props) {
    const { auth, discussion } = props;

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-white leading-tight">
                        {discussion.title}
                    </h2>
                }
            >
                <div className="flex flex-row h-full">
                    <Sidebar user={auth} />
                    <div className="flex flex-col w-4/5">
                        <ShowForum discussions={discussion} user={auth.user} />
                    </div>
                </div>
                <Head title="Forum Create" />
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}

// const ForumShow = ({ discussion }) => {
//     const form = useForm('post', '/messages', {
//         discussion_id: discussion.id,
//         content: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         form.submit({
//             preserveScroll: true,
//             onSuccess: () => form.reset(),
//         });
//     };

//     return (
//         <div className="forum-show">
//             <h2>{discussion.title}</h2>
//             <p>{discussion.description}</p>
//             <div>
//                 {discussion.messages.map((message) => (
//                     <div key={message.id} className={`chat ${message.user.gender === 'male' ? 'chat-start' : 'chat-end'}`}>
//                         <div className="chat-image avatar">
//                             <div className="w-10 rounded-full">
//                                 <img alt="avatar" src={message.user.avatar || 'https://placehold.it/100x100'} />
//                             </div>
//                         </div>
//                         <div className="chat-header">
//                             {message.user.name}
//                             <time className="text-xs opacity-50">{new Date(message.created_at).toLocaleTimeString()}</time>
//                         </div>
//                         <div className="chat-bubble">{message.content}</div>
//                         <div className="chat-footer opacity-50">Delivered</div>
//                     </div>
//                 ))}
//             </div>
//             <form onSubmit={submit}>
//                 <textarea name="content" value={form.data.content} onChange={(e) => form.setData('content', e.target.value)} required></textarea>
//                 <input type="hidden" name="discussion_id" value={discussion.id} />
//                 <button type="submit" disabled={form.processing}>Send</button>
//             </form>
//         </div>
//     );
// };

// export default ForumShow;
