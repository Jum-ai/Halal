<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Food;
use App\Models\Review;
use Inertia\Inertia;

class FoodController extends Controller
{
    public function index()
    {
        $foods = Food::with('reviews')->get();
        return Inertia::render('Food/Index', ['foods' => $foods]);
    }

    public function create()
    {
        return Inertia::render('Food/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:255',
            'ingredients' => 'required|string',
            'instructions' => 'required|string',
            'halal_certification' => 'required|string|max:255',
            'calories' => 'required|integer',
            'carbohydrates' => 'required|integer',
            'protein' => 'required|integer',
            'fat' => 'required|integer',
            'vitamins' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'price' => 'required|numeric',
        ]);

        if ($request->hasFile('image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('images'), $imageName);
            $validated['image'] = $imageName;
        }
    
        Food::create($validated);
        return redirect()->route('foods.create')->with('message', 'Food added successfully!');
    }
    

    public function show($id)
    {
        $food = Food::with('reviews.user')->findOrFail($id);
        return Inertia::render('Food/Show', ['food' => $food]);
    }

    public function edit($id)
    {
        $food = Food::findOrFail($id);
        return Inertia::render('Food/Edit', ['food' => $food]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'ingredients' => 'required|string',
            'instructions' => 'required|string',
            'halal_certification' => 'required|string',
            'calories' => 'required|integer',
            'carbohydrates' => 'required|integer',
            'protein' => 'required|integer',
            'fat' => 'required|integer',
            'vitamins' => 'required|string',
            'image' => 'nullable|image|max:1024',
        ]);

        $food = Food::findOrFail($id);
        $food->update($request->all());

        if ($request->hasFile('image')) {
            $food->image = $request->file('image')->store('foods', 'public');
        }

        return redirect()->route('foods.index')->with('success', 'Food updated successfully.');
    }

    public function destroy($id)
    {
        $food = Food::findOrFail($id);
        $food->delete();

        return redirect()->route('foods.index')->with('success', 'Food deleted successfully.');
    }

    public function addReview(Request $request, Food $food)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $review = new Review();
        $review->content = $validated['content'];
        $review->rating = $validated['rating'];
        $review->user_id = auth()->id();
        $review->food_id = $food->id;
        $review->save();

        return redirect()->back()->with('message', 'Review added successfully!');
    }
}
