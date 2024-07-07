import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import Comment from "@/Main/MainComment";
import MainContent from "@/Main/MainContent";
import MainNews from "@/Main/MainNews";
import MainProduct from "@/Main/MainProduct";
import Navbar from "@/Main/Navbar";
import Sidebar from "@/Main/Sidebar";
import { Head } from "@inertiajs/react";


export default function Dashboard(props) {
    console.log('nama',props)
    const { auth } = props;
    const { ustadzList } = props;
    const { news } = props;
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
                    <Sidebar user={auth}/>
                    <div className="flex flex-col w-4/5">
                        <MainContent ustadzList={ ustadzList} />
                        <MainNews news={ news }/>
                        <MainProduct />
                        <Comment/>
                    </div>

                    <Head title="Dashboard" />
                </div>
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}
