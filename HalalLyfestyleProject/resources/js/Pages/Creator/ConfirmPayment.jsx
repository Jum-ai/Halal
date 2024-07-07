import AddVideoEdu from "@/Components/Creator/AddVideo";
import PaymentIndex from "@/Components/Creator/Payment";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import Sidebar from "@/Main/Sidebar";
import { Head } from "@inertiajs/react";

export default function ConfirmPayment(props) {
    const { auth } = props;
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
                        <PaymentIndex payments={ props.payments } />
                    </div>

                    <Head title="Dashboard" />
                </div>
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}
