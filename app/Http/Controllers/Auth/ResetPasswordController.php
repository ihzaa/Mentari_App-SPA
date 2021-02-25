<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\SendResetPasswordMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ResetPasswordController extends Controller
{
    public function index(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user != []) {
            $newPassword = mt_rand(100000, 999999);
            $user->password = Hash::make($newPassword);
            $user->save();
            Mail::to($request->email)->send(new SendResetPasswordMail($newPassword));
            return response()->json([
                "ok"
            ]);
        }
        return response("", 442);
    }
}
