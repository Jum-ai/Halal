<?php

namespace App\Http\Controllers;

use App\Models\CeramahEducation;
use App\Models\HadistEducation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CeramahEducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $videos = CeramahEducation::all();
        $hadist = HadistEducation::all();
        return Inertia::render('Main/Education', [
            'Datavideo' => $videos,
            'Datahadist' => $hadist,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
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

        $data_video = new CeramahEducation();
        $data_video->title = $request->title;
        $data_video->creator = $request->creator;
        $data_video->views = $request->views;
        $data_video->status = $request->status;
        $data_video->link_video = $request->link_video;
        $data_video->image = $imageName;
        $data_video->save();
        return redirect()->back()->with('message', 'berita berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
