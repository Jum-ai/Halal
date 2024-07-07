<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HadistEducation extends Model
{
    use HasFactory;
    protected $fillable = [
        'arabic_text',
        'translation',
        'source',
        'explanation',
        'category',
    ];
}
