<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ustadz;
use App\Models\IslamicNews;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class UstadzController extends Controller
{
    public function index()
    {
        $news = IslamicNews::latest()->get();

        $userGender = auth()->user()->gender;
        $ustadzList = Ustadz::where('gender', $userGender == 'male' ? 'Laki-laki' : 'Perempuan')->get();

        return Inertia::render('Main/Dashboard', [
            'ustadzList' => $ustadzList,
            'news' => $news,
        ]);
    }

    public function create()
    {
        return Inertia::render('Creator/AddUstadz');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'gender' => 'required|string|in:Laki-laki,Perempuan',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        $imageName = time() . '.' . $request->file('gambar')->extension();
        $request->file('gambar')->move(public_path('images'), $imageName);
    
        $ustadz = new Ustadz();
        $ustadz->nama = $request->nama;
        $ustadz->gender = $request->gender;
        $ustadz->gambar = $imageName;
    
        $ustadz->save();
    
        return redirect()->route('dashboard')->with('success', 'Ustadz berhasil ditambahkan.');
    }
}
