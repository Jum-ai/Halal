import React from "react";
import { useForm } from "@inertiajs/react";

export default function Create(props) {
    const form = useForm({
        name: "",
        description: "",
        category: "",
        ingredients: "",
        instructions: "",
        halal_certification: "",
        calories: "",
        carbohydrates: "",
        protein: "",
        fat: "",
        vitamins: "",
        image: null,
        price: "",
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(route("foods.store"), {
            onSuccess: () => form.reset(),
        });
    };

    return (
        <div className="bg-white rounded-box mx-6 my-4 w-full shadow-md rounded-md px-5 pb-5">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Add New Food
            </h2>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="name"
                    value={form.data.name}
                    onChange={(e) => form.setData("name", e.target.value)}
                    placeholder="Name"
                    className="input input-bordered w-full my-2"
                    required
                />
                <textarea
                    name="description"
                    value={form.data.description}
                    onChange={(e) =>
                        form.setData("description", e.target.value)
                    }
                    placeholder="Description"
                    className="textarea textarea-bordered w-full my-2"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={form.data.category}
                    onChange={(e) => form.setData("category", e.target.value)}
                    placeholder="Category"
                    className="input input-bordered w-full my-2"
                    required
                />
                <textarea
                    name="ingredients"
                    value={form.data.ingredients}
                    onChange={(e) =>
                        form.setData("ingredients", e.target.value)
                    }
                    placeholder="Ingredients"
                    className="textarea textarea-bordered w-full my-2"
                    required
                />
                <textarea
                    name="instructions"
                    value={form.data.instructions}
                    onChange={(e) =>
                        form.setData("instructions", e.target.value)
                    }
                    placeholder="How to Cook"
                    className="textarea textarea-bordered w-full my-2"
                    required
                />
                <input
                    type="text"
                    name="halal_certification"
                    value={form.data.halal_certification}
                    onChange={(e) =>
                        form.setData("halal_certification", e.target.value)
                    }
                    placeholder="Halal Certificate"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="number"
                    name="calories"
                    value={form.data.calories}
                    onChange={(e) => form.setData("calories", e.target.value)}
                    placeholder="Calories"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="number"
                    name="carbohydrates"
                    value={form.data.carbohydrates}
                    onChange={(e) =>
                        form.setData("carbohydrates", e.target.value)
                    }
                    placeholder="Carbohydrates"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="number"
                    name="protein"
                    value={form.data.protein}
                    onChange={(e) => form.setData("protein", e.target.value)}
                    placeholder="Protein"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="number"
                    name="fat"
                    value={form.data.fat}
                    onChange={(e) => form.setData("fat", e.target.value)}
                    placeholder="Fat"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="text"
                    name="vitamins"
                    value={form.data.vitamins}
                    onChange={(e) => form.setData("vitamins", e.target.value)}
                    placeholder="Vitamins"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={form.data.price}
                    onChange={(e) => form.setData("price", e.target.value)}
                    placeholder="Harga"
                    className="input input-bordered w-full my-2"
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={(e) => form.setData("image", e.target.files[0])}
                    className="file-input file-input-bordered w-full my-2"
                />
                <button
                    type="submit"
                    disabled={form.processing}
                    className="btn btn-primary w-full"
                >
                    Add Food
                </button>
            </form>
        </div>
    );
}
