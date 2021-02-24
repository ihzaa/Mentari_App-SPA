<?php

namespace App\Http\Controllers;

use App\Models\address;
use App\Models\cart;
use App\Models\item;
use App\Models\transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

    public function getCartItem()
    {
        $items = DB::select(DB::raw('SELECT c.id as "cart_id",i.id as "item_id",c.quantity, i.name, i.price, (SELECT item_images.path FROM item_images WHERE item_images.item_id = i.id LIMIT 1) as img FROM carts as c JOIN items as i ON c.item_id=i.id WHERE c.user_id="' . Auth::user()->id . '" AND c.status="0"'));
        $addresses = address::where('user_id', Auth::user()->id)->get();
        return response()->json([
            "items" => $items,
            "addresses" => $addresses
        ]);
    }

    public function deleteItemInCart(Request $request)
    {
        $cart = cart::find($request->id);
        if ($cart != []) {
            $cart->delete();
            return response()->json("ok");
        }
        return response('', 442, []);
    }

    public function changeQuantity(Request $request)
    {
        cart::find($request->id)->update([
            'quantity' => $request->quantity
        ]);
        return response()->json("ok");
    }

    public function buy(Request $request)
    {
        transaction::create([
            "address_id" => $request->address,
            "cart_id" => serialize($request->items)
        ]);

        cart::whereIn('id', $request->items)->update([
            'status' => "1"
        ]);
        return $this->getCountCartItem();
    }
}
