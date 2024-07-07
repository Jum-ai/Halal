<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DisscusionForum;
use Inertia\Inertia;

class DiscussionForumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $kategori = $user->gender === 'male' ? 'laki-laki' : 'perempuan';
    
        $discusions = DisscusionForum::where('kategori', $kategori)->get();
    
        return Inertia::render('Forum/Index', [
            'discussions' => $discusions,
            'kategori' => $kategori
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = auth()->user();
        $kategori = $user->gender === 'male' ? 'laki-laki' : 'perempuan';

        return Inertia::render('Forum/Create', [
            'kategori' => $kategori,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $kategori)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        DisscusionForum::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
            'kategori' => $kategori,
        ]);

        return redirect()->route('forum.index', ['kategori' => $kategori]);
    }

    /**
     * Display the specified resource.
     */
    public function show($kategori, $id)
    {
        $discussion = DisscusionForum::with('messages.user')->findOrFail($id);
        return Inertia::render('Forum/Show', [
            'discussion' => $discussion,
            'kategori' => $kategori
        ]);
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
