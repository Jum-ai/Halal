import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function AddVideoEdu() {
    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [views, setViews] = useState("");
    const [status, setStatus] = useState("");
    const [link_video, setLink_video] = useState("");
    const [image, setImage] = useState("");

    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            creator,
            views,
            status,
            link_video,
            image,
        };
        Inertia.post("/add-video", data);
        setIsNotif(true);
        setTitle("");
        setCreator("");
        setViews("");
        setStatus("");
        setLink_video("");
        setImage("");
    };

    return (
        <div className="bg-white mx-6 my-4 w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Halaman Tambah Video Edukasi
            </h2>

            <div className="carousel carousel-end gap-4">
                <div className=" sm:px-6 lg:px-8">
                    <div className="px-8 mx-8 bg-white  rounded-lg border-gray-900">
                        <input
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Creator"
                            className="m-2 input input-bordered w-full"
                            onChange={(creator) =>
                                setCreator(creator.target.value)
                            }
                            value={creator}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Ditonton"
                            className="m-2 input input-bordered w-full"
                            onChange={(views) => setViews(views.target.value)}
                            value={views}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Status"
                            className="m-2 input input-bordered w-full"
                            onChange={(status) =>
                                setStatus(status.target.value)
                            }
                            value={status}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Link Video"
                            className="m-2 input input-bordered w-full"
                            onChange={(link_video) =>
                                setLink_video(link_video.target.value)
                            }
                            value={link_video}
                            required
                        />
                        <input
                            type="file"
                            placeholder="Gambar Sampul"
                            className="m-2 input input-bordered w-full"
                            onChange={(image) =>
                                setImage(image.target.files[0])
                            }
                            required
                        />
                        <button
                            className="m-2 btn btn-neutral"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
