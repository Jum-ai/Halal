import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function AddHadistEdu() {

    const [arabic_text, setArabic_text] = useState("");
    const [translation, setTranslation] = useState("");
    const [source, setSource] = useState("");
    const [explanation, setExplanation] = useState("");
    const [category, setCategory] = useState("");

    const [isNotif, setIsNotif] = useState(false);


    const handleSubmit = () => {
        const data = {
            arabic_text,
            translation,
            source,
            explanation,
            category,
        };
        Inertia.post("/add-hadist", data);
        setIsNotif(true);
        setArabic_text("");
        setTranslation("");
        setSource("");
        setExplanation("");
        setCategory("");
    };

    return (
        <div className="bg-white mx-6 my-4 w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Halaman Tambah Hadist Edukasi
            </h2>

            <div className="carousel carousel-end gap-4">
                <div className=" sm:px-6 lg:px-8">
                    <div className="px-8 mx-8 bg-white  rounded-lg border-gray-900">
                        <input
                            type="text"
                            placeholder="Teks Arab"
                            className="m-2 input input-bordered w-full"
                            onChange={(arabic_text) => setArabic_text(arabic_text.target.value)}
                            value={arabic_text}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Terjemahan"
                            className="m-2 input input-bordered w-full"
                            onChange={(translation) =>
                                setTranslation(translation.target.value)
                            }
                            value={translation}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Sumber"
                            className="m-2 input input-bordered w-full"
                            onChange={(source) => setSource(source.target.value)}
                            value={source}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Penjelasan"
                            className="m-2 input input-bordered w-full"
                            onChange={(explanation) =>
                                setExplanation(explanation.target.value)
                            }
                            value={explanation}
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
                            <option value="">Select Category</option>
                            <option value="Makanan Halal">Makanan Halal</option>
                            <option value="Transaksi Halal">Transaksi Halal</option>
                            <option value="Pakaian Halal">Pakaian Halal</option>
                            <option value="Pergaulan Halal">Pergaulan Halal</option>
                        </select>
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
