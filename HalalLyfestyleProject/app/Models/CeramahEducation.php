<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CeramahEducation extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'creator', 'views', 'status', 'link_video', 'image'];
}
