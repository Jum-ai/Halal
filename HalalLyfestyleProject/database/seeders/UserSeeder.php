<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin12345'),
            'gender' => 'male',
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Creator1',
            'email' => 'creator1@gmail.com',
            'password' => Hash::make('creator112345'),
            'gender' => 'male',
            'role' => 'creator',
        ]);

        User::create([
            'name' => 'Creator2',
            'email' => 'creator2@gmail.com',
            'password' => Hash::make('creator212345'),
            'gender' => 'female',
            'role' => 'creator',
        ]);

        User::create([
            'name' => 'Creator',
            'email' => 'creator@gmail.com',
            'password' => Hash::make('creator12345'),
            'gender' => 'female',
            'role' => 'creator',
        ]);
        
    }
}
