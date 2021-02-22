<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\poster;
use App\Models\item;
use App\Models\category;
use App\Models\item_image;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getCarousel()
    {
        $carousel = poster::all();
        if($carousel != NULL)
        {
            return response()->json([
                'message' => 'success',
                'data' => $carousel
            ], 200);
        }else{
            return 0;
        }
    }
    public function getProduct()
    {
        $product = DB::select(DB::raw('SELECT items.id AS item_id,items.name,items.price,items.description,items.stock,categories.id AS category_id, categories.name AS category_name, (SELECT item_images.path FROM item_images WHERE item_images.item_id = items.id ORDER BY item_images.id LIMIT 1) AS path FROM items JOIN categories ON items.category_id = categories.id ORDER BY items.updated_at DESC'));

        if($product != NULL)
        {
            return response()->json([
                'message' => 'success',
                'data' => $product
            ], 200);
        }else{
            return 0;
        }
    }
    public function getDetail($id)
    {
        $product = DB::select(DB::raw('SELECT items.id AS item_id,items.name,items.price,items.description,items.stock, categories.name AS category_name FROM items JOIN categories ON items.category_id = categories.id WHERE items.id = '.$id));

        if($product != NULL)
        {
            return response()->json([
                'message' => 'success',
                'data' => $product
            ], 200);
        }else{
            return 0;
        }
    }

    public function getDetailImage($id)
    {
        $img = item_image::where('item_id',$id)->get(['id','path']);

        if($img != NULL)
        {
            return response()->json([
                'message' => 'success',
                'data' => $img
            ], 200);
        }else{
            return 0;
        }
    }
    public function getCategory()
    {
        $category = category::get(['id','name']);
        if($category != NULL)
        {
            return response()->json([
                'message' => 'success',
                'data' => $category
            ], 200);
        }else{
            return 0;
        }
    }
}
