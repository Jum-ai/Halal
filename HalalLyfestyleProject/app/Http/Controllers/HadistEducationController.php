<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HadistEducation;
use Inertia\Inertia;

class HadistEducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hadist = HadistEducation::all();
        return Inertia::render('Main/Education', [
            'Datahadist' => $hadist,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data_hadist = new HadistEducation();
        $data_hadist->arabic_text = $request->arabic_text;
        $data_hadist->translation = $request->translation;
        $data_hadist->source = $request->source;
        $data_hadist->explanation = $request->explanation;
        $data_hadist->category = $request->category;
        $data_hadist->save();
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
