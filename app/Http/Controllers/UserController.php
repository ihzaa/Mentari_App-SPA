<?php

namespace App\Http\Controllers;

use App\Models\address;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function EditProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|integer'
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
}
