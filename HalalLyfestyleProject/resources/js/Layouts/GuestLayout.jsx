import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen min-w-screen bg-hijau flex flex-col">
            <div className="pt-20 text-texthijau text-center text-3xl">
                <h1>Ayo Bergabung Dengan Halal</h1>
            </div>
            <div className="flex flex-row">
                <div className=" w-1/3 flex sm:justify-center items-center">
                    <img
                        src={`/images/login1.png`}
                        alt="ges"
                        className="h-full"
                    />
                </div>
                <div className=" w-1/3 flex sm:justify-center items-center pt-6 sm:pt-0 ">
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
                <div className=" w-1/3 flex sm:justify-center items-center">
                    <img
                        src={`/images/login2.png`}
                        alt="ges"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
}
