<?php

namespace App\Http\Controllers;

use App\Models\address;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function EditProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $currentUser = Auth::user();
        if (strcasecmp($currentUser->email, $request->email) == 0) {
            User::find($currentUser->id)->update([
                'name' => $request->name,
                'phone' => $request->phone,
                'email' => $request->email
            ]);
            $updaterUser = User::find($currentUser->id);
            return response()->json($updaterUser);
        } else {
            $isEmailUsed = User::whereEmail($request->email)->first();
            if ($isEmailUsed) {
                return response([
                    'errors' => [
                        'email' => ['Email Sudah Digunakan']
                    ]
                ], 422);
            }
        }
    }

    public function editAddress(Request $request)
    {
        Auth::user()->addresses()->delete();

        foreach ($request->addresses as $a) {
            address::create([
                'address' => $a['address'],
                'user_id' => Auth::user()->id
            ]);
        }

        return response()->json(Auth::user()->addresses()->get(['address']));
    }

    public function getAllAddress()
    {
        return response()->json(Auth::user()->addresses()->get(['address']));
    }

    public function editPassword(Request $request)
    {
        // return response()->json($request);
        if ($request->old == "") {
            return response([
                'errors' => [
                    'OldPassword' => ['Tidak Boleh Kosong']
                ]
            ], 422);
        }
        if ($request->new == "") {
            return response([
                'errors' => [
                    'NewPassword' => ['Tidak Boleh Kosong']
                ]
            ], 422);
        }
        if (strlen($request->new) < 6) {
            return response([
                'errors' => [
                    'NewPassword' => ['Minimal 6 Karakter']
                ]
            ], 422);
        }
        if (Hash::check($request->old, Auth::user()->password)) {
            User::find(Auth::user()->id)->update([
                'password' => Hash::make($request->new)
            ]);

            return response()->json(['message' => 'ok']);
        }else{
            return response([
                'errors' => [
                    'OldPassword' => ['Password Salah!']
                ]
            ], 422);
        }
    }
}
