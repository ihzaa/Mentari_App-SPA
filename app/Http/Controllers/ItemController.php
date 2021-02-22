<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{

    public function getCountCartItem()
    {
        return response()->json(cart::where('user_id', Auth::user()->id)->where('status', '0')->count());
    }

    public function addToCart($id)
    {
        $user = Auth::user();
        $item = item::find($id);
        if (empty($item)) {
            return response('No-Item', 442);
        } else {
            $itemInCart = cart::where('item_id', $id)->where('user_id', $user->id)->where('status', '0')->first();
            if (!empty($itemInCart)) {
                $itemInCart->quantity++;
                $itemInCart->save();
                return response()->json(cart::where('user_id', $user->id)->where('status', '0')->count());
            } else {
                cart::create([
                    'quantity' => '1',
                    'status' => '0',
                    'item_id' => $id,
                    'user_id' => $user->id
                ]);
                return response()->json(cart::where('user_id', $user->id)->where('status', '0')->count());
            }
        }
    }
}
