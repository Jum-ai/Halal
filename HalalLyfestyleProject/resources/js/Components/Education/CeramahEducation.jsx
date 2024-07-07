import React from "react";

export default function CeramahEducation({ Datavideo }) {
    // Pastikan Datavideo adalah array
    const videos = Array.isArray(Datavideo) ? Datavideo : [];

    console.log("Data ceramah:", videos);

    return (
        <div className="bg-white mx-6 mb-4 w-full shadow-md rounded-md">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Edukasi Berbasis Video Ceramah
            </h2>

            <div className="carousel carousel-end h-full w-full gap-4">
                {videos.map((video) => (
                    <a
                        key={video.id}
                        className="carousel-item flex flex-col w-2/6 h-2/3 bg-base-100 m-auto mt-4 rounded-lg"
                        href="https://www.youtube.com/watch?v=c8L-ZoKNENU&list=RDDk4qOa4ivIM&index=13"
                    >
                        <figure className="w-full h-3/4 overflow-hidden">
                            <img
                                src={`/images/1717802949.jpg`}
                                alt="Shoes"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </figure>
                        <div className="w-full h-1/3 flex flex-row gap-3 mt-1">
                            <div className="avatar w-1/6">
                                <div className="w-12 h-12 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        alt="Tailwind-CSS-Avatar-component"
                                    />
                                </div>
                            </div>
                            <div className="w-5/6 flex flex-col">
                                <h2 className="card-title">{video.title}</h2>
                                <div className="flex flex-row">
                                    <p>Creator : {video.creator}</p>
                                    <p>Views : {video.views}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
