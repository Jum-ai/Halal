import NewNews from "@/Components/News/NewNews";
import ClothesHalal from "@/Components/Product/ClothesHalal";
import FoodHalal from "@/Components/Product/FoodHalal";
import RestaurantHalal from "@/Components/Product/RestaurantHalal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Main/Footer";
import Sidebar from "@/Main/Sidebar";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, foods }) {
    console.log("food", foods)
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
                        <FoodHalal foods={ foods} />
                        <ClothesHalal />
                        <RestaurantHalal />
                    </div>

                    <Head title="Dashboard" />
                </div>
            </AuthenticatedLayout>
            <Footer />
        </>
    );
}
