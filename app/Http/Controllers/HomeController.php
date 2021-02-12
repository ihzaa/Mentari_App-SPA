<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\poster;
use App\Models\item;
use Illuminate\Support\Facades\Hash;

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
        $product = item::all();
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
}
