<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\Food;
use Inertia\Inertia;
class OrderController extends Controller
{
    public function store(Request $request)
    {
        $food = Food::find($request->id);

        $order = Order::create([
            'user_id' => auth()->id(),
            'food_id' => $food->id,
            'status' => 'pending',
            'price' => $food->price,
        ]);
        return redirect()->back()->with('message', 'Makanan berhasil dimasukkan di keranjang');
    }
    public function index(){
        $user = Auth::user();
        $order = Order::with('food')
                    ->where('user_id', $user->id)
                    ->where('status', 'pending')
                    ->get();
        return Inertia::render('Main/Keranjang', ['order' => $order]);
    }
}
