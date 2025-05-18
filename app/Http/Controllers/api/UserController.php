<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        // Check if name already exists
        if (User::where('name', $name)->exists()) {
            return response()->json(
                [
                    'message' => 'Name is already taken',
                ],
                409,
            ); // 409 Conflict
        }

        // Check if email already exists
        if (User::where('email', $email)->exists()) {
            return response()->json(
                [
                    'message' => 'Email is already registered',
                ],
                409,
            ); // 409 Conflict
        }

        // Create user if name and email are unique
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password), // Always hash passwords!
        ]);

        return response()->json(
            [
                'message' => 'Successfully registered',
                'user' => $user,
            ],
            201,
        ); // 201 Created
    }
}
