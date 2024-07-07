import AddNewNews from "@/Components/Creator/AddNews";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import Sidebar from "@/Main/Sidebar";
import { Head } from "@inertiajs/react";

export default function AddNews(props) {
    const { auth } = props;

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-white leading-tight">
                        Dashboard1
                    </h2>
                }
            >
                <div className="flex flex-row h-full">
                    <Sidebar user={auth} />
                    <div className="flex flex-col w-4/5">
                        <AddNewNews />
                    </div>

                    <Head title="Dashboard" />
                </div>
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}