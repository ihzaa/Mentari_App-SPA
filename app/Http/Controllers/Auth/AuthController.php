<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('access_token')->accessToken;
            return response()->json([
                'message' => 'success',
                'data' => auth()->user(),
                'meta' => [
                    'token' => $token
                ]
            ], 200);
        } else {
            return response()->json([
                'message' => 'Authentication is invalid.',
                'errors' => [
                    'root' => 'Username or Password not found.'
                ]
            ], 401);
        }
    }

    public function logout()
    {
        auth()->user()->token()->revoke();
        return response()->json([
            'message' => 'logout success.'
        ]);
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
