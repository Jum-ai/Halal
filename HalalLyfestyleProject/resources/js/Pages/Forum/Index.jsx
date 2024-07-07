import Forum from "@/Components/Forum/ForumIndex";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import Sidebar from "@/Main/Sidebar";
import { Head, Link } from "@inertiajs/react";

export default function ForumIndex(props) {
    const { auth, discussions, kategori } = props;

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-white leading-tight">
                        Forum{" "}
                        {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
                    </h2>
                }
            >
                <div className="flex flex-row h-full">
                    <Sidebar user={auth} />
                    <div className="flex flex-col w-4/5">
                        <Forum discussions={discussions} kategori={kategori} />
                    </div>
                </div>
                <Head title="Forum Index" />
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}
