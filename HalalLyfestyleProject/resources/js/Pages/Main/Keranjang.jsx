import KeranjangIndex from "@/Components/Keranjang/KeranjangIndex";
import UserSetting from "@/Components/User/UserSetting";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import MainContent from "@/Main/MainContent";
import Sidebar from "@/Main/Sidebar";
import { Head } from "@inertiajs/react";

export default function Keranjang(props) {
    const { auth } = props;
    const { order } = props;
    console.log(props)
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
                        <KeranjangIndex order={ order } />
                    </div>

                    <Head title="Dashboard" />
                </div>
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}
