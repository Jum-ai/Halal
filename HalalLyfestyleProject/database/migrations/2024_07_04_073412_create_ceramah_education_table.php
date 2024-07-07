<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ceramah_education', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('creator');
            $table->unsignedBigInteger('views')->default(0);
            $table->string('status')->default('pending');
            $table->string('link_video');
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ceramah_education');
    }
};
