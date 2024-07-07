<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DisscusionForum extends Model
{
    use HasFactory;
    protected $table = 'disscusion_forum'; 
    protected $fillable = ['user_id', 'title', 'description', 'kategori'];

    public function messages()
    {
        return $this->hasMany(Message::class, 'discussion_id');
    }
}
