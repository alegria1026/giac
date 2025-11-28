<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => 'user1',
                'email' => 'user1@gmail.com',
                'password' => Hash::make('user1'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'name' => 'user2',
                'email' => 'user2@gmail.com',
                'password' => Hash::make('user2'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
