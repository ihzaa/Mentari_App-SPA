<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

        // return Response()->json([
        //     "ok"
        // ]);
        // $this->validate($request, [
        //     'name' => 'required|max:255',
        //     'email' => 'required|max:255|unique:users|email',
        //     'password' => 'required|max:255|min:6',
        //     'phone' => 'required|max:255',
        // ]);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'phone' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if (auth()->attempt($data)) {
            $token = $user->createToken('access_token')->accessToken;
            return response()->json([
                'message' => 'success',
                'data' => $user,
                'meta' => [
                    'token' => $token
                ]
            ], Response::HTTP_CREATED);
        }
    }
}
