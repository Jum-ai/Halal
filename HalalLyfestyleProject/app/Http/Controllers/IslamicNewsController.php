<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IslamicNews;
use Inertia\Inertia;

class IslamicNewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = IslamicNews::latest()->get();
        return Inertia::render('IslamicNews/Index', ['news' => $news]);
    }

    public function create()
    {
        {
            $userGender = Auth::user()->gender;
            $ustadzList = Ustadz::where('gender', $userGender == 'Laki-laki' ? 'Laki-laki' : 'Perempuan')->get();
    
            return Inertia::render('Main/Dashboard', [
                'ustadzList' => $ustadzList,
            ]);
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('images'), $imageName);
        
        $news = new IslamicNews();
        $news->title = $request->title;
        $news->content = $request->content;
        $news->author = $request->author;
        $news->published_at = now();
        $news->category = $request->category;
        $news->image_path = $imageName;
        $news->source = $request->source;
        $news->save();
        return redirect()->back()->with('message', 'berita berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $news = IslamicNews::findOrFail($id);
        return Inertia::render('IslamicNews/Show', ['news' => $news]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
