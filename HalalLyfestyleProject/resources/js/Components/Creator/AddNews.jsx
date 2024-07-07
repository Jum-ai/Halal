import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function AddNewNews() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [source, setSource] = useState("");
    const [image, setImage] = useState("");

    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            content,
            author,
            category,
            source,
            image,
        };
        Inertia.post("/add-news", data);
        setIsNotif(true);
        setTitle("");
        setContent("");
        setAuthor("");
        setCategory("");
        setSource("");
        setImage("");
    };

    return (
        <div className="bg-white mx-6 my-4 w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Halaman Tambah Berita
            </h2>

            <div className="carousel carousel-end gap-4">
                <div className=" sm:px-6 lg:px-8">
                    <div className="px-8 mx-8 bg-white  rounded-lg border-gray-900">
                        <input
                            type="text"
                            placeholder="Judul Berita"
                            className="m-2 input input-bordered w-full"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                            required
                        />
                        <textarea
                            type="text"
                            placeholder="Deskripsi Berita"
                            className="m-2 input input-bordered w-full"
                            onChange={(content) =>
                                setContent(content.target.value)
                            }
                            value={content}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Penulis"
                            className="m-2 input input-bordered w-full"
                            onChange={(author) => setAuthor(author.target.value)}
                            value={author}
                            required
                        />
                        <select
                            className="m-2 input input-bordered w-full"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                            required
                        >
                            <option value="">Pilih Kategori Berita</option>
                            <option value="Konflik Palestina">Konflik Palestina</option>
                            <option value="Haji dan Umroh">Haji dan Umroh</option>
                            <option value="Ceranah Akbar">Ceramah Akbar</option>
                            <option value="Putusan Pemerintah">Putusan Pemerintah</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Sumber"
                            className="m-2 input input-bordered w-full"
                            onChange={(source) =>
                                setSource(source.target.value)
                            }
                            value={source}
                            required
                        />
                        <input
                            type="file"
                            placeholder="Gambar Berita"
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
