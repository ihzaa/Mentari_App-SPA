<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\item;
use App\Models\transaction;
use Illuminate\Support\Facades\Auth;

class TranscationHistoryController extends Controller
{
    public function getHistory()
    {
        $history = transaction::where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->get(['cart_id', 'status', 'created_at']);
        $count = transaction::where('user_id', Auth::user()->id)->count();
        $cart = cart::where('user_id', Auth::user()->id)->where('status', "1")->get(["id", 'item_id', 'quantity'])->keyBy('id');
        $item = item::withTrashed()->pluck('name', 'id');

        return response()->json([
            "history" => $history,
            "item" => $item,
            "cart" => $cart,
            "count" => $count,
        ]);
    }
}
