<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Payment;
use App\Models\Order;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        if (Auth::user()->role !== 'creator') {
            return redirect()->route('home')->with('error', 'You are not authorized to access this page.');
        }
    
        $payments = Payment::with('user', 'food')->where('status', 'pending')->get();
        return inertia('Creator/ConfirmPayment', ['payments' => $payments]);
    }

    public function process(Request $request)
    {
        
        $request->validate([
            'order_id' => 'required|exists:orders,id',
            'use_delivery' => 'required|boolean',
            'total_price' => 'required|numeric',
            'food_id' => 'required|exists:foods,id',
        ]);
        $payment = new Payment();
        $payment->order_id = $request->order_id;
        $payment->user_id = Auth::id();
        $payment->food_id = $request->food_id;
        $payment->use_delivery = $request->use_delivery;
        $payment->total_price = $request->total_price;
        $payment->status = 'pending';
        $payment->save();
    
        return redirect()->back()->with('success', 'Payment processed successfully.');
    }

public function confirm(Request $request, Payment $payment)
{
    if (Auth::user()->role !== 'creator') {
        return redirect()->route('home')->with('error', 'You are not authorized to access this page.');
    }
    
    $order = Order::where('food_id', $payment->food_id)->first();
    $user = User::find($payment->user_id);
    $balance = $user->balance;
    if ($balance >= $payment->total_price) {
        $payment->update(['status' => 'approved']);
        $order->update(['status' => 'approved']);
        $user->update(['balance' => $user->balance -= $payment->total_price]);
        return redirect()->route('creator.payments')->with('success', 'Payment approved and user balance updated.');
    } else {
        return redirect()->route('creator.payments')->with('error', 'Insufficient balance.');
    }
}
    
}
