import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function Show({ food, auth }) {
    const form = useForm({
        content: '',
        rating: 1,
    });

    const submitReview = (e) => {
        e.preventDefault();
        form.post(route('foods.addReview', food.id), {
            onSuccess: () => form.reset(),
        });
    };

    return (
        <div className="bg-white rounded-box mx-6 my-4 w-full shadow-md rounded-md px-5 pb-5">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                {food.name}
            </h2>
            <p className="text-center">{food.description}</p>

            <div className="my-4">
                <h3 className="font-semibold text-xl">Ingredients:</h3>
                <ul>
                    {/* {food.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))} */}
                </ul>
            </div>

            <div className="my-4">
                <h3 className="font-semibold text-xl">How to Cook:</h3>
                <p>{food.instructions}</p>
            </div>

            <div className="my-4">
                <h3 className="font-semibold text-xl">Nutrition Facts:</h3>
                <p>Calories: {food.calories}</p>
                <p>Carbohydrates: {food.carbohydrates}</p>
                <p>Protein: {food.protein}</p>
                <p>Fat: {food.fat}</p>
                <p>Vitamins: {food.vitamins}</p>
            </div>

            <div className="my-4">
                <h3 className="font-semibold text-xl">Halal Certificate:</h3>
                <p>{food.halal_certificate}</p>
            </div>

            <div className="my-4">
                <h3 className="font-semibold text-xl">Reviews:</h3>
                <ul>
                    {food.reviews.map((review, index) => (
                        <li key={index} className="mb-2">
                            <p>
                                <strong>{review.user.name}:</strong> {review.content} - {review.rating} stars
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <form onSubmit={submitReview} className="my-4">
                <h3 className="font-semibold text-xl">Add a Review:</h3>
                <textarea
                    placeholder="Write your review..."
                    className="textarea textarea-bordered w-full my-2"
                    name="content"
                    value={form.data.content}
                    onChange={(e) => form.setData('content', e.target.value)}
                    required
                />
                <select
                    name="rating"
                    value={form.data.rating}
                    onChange={(e) => form.setData('rating', e.target.value)}
                    className="select select-bordered w-full my-2"
                >
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>
                            {star} star{star > 1 && 's'}
                        </option>
                    ))}
                </select>
                <button type="submit" disabled={form.processing} className="btn btn-primary w-full">
                    Submit Review
                </button>
            </form>
        </div>
    );
}
