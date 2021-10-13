<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\item;
use App\Models\item_image;
use App\Models\poster;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getCarousel()
    {
        $carousel = poster::all();
        if ($carousel != null) {
            return response()->json([
                'message' => 'success',
                'data' => $carousel,
            ], 200);
        } else {
            return 0;
        }
    }
    public function getProduct(Request $request)
    {
        $product = DB::table('items')
            ->join('categories', 'categories.id', '=', 'items.category_id')
            ->selectRaw('
                items.id AS item_id,
                items.name,
                items.price,
                items.promo,
                items.description,
                items.stock,
                categories.id AS category_id,
                categories.name AS category_name,
                (SELECT item_images.path FROM item_images WHERE item_images.item_id = items.id ORDER BY item_images.id LIMIT 1) AS path')
            ->orderBy('items.updated_at', 'desc')
            ->limit(15);
        if ($request->lastId != 0) {
            $product = $product->where('items.id', '<', $request->lastId);
        }
        if ($request->search != "") {
            $product = $product->where('items.name', 'like', '%' . $request->search . '%');
        }
        if ($request->category != "") {
            $product = $product->where('items.category_id', '=', $request->category);
        }

        $product = $product->get();

        // dd($product);
        if ($product != null) {
            return response()->json([
                'message' => 'success',
                'data' => $product,
                'last_id' => $request->lastId
            ], 200);
        } else {
            return response()->json([
                'message' => 'failure',
                'data' => [],
            ], 200);
        }
    }

    public function getDetail(Request $request)
    {
        $product = DB::select(DB::raw('SELECT items.id AS item_id,items.name,items.price,items.promo,items.description,items.stock, categories.name AS category_name FROM items JOIN categories ON items.category_id = categories.id WHERE items.id = ' . $request->id));

        if ($product != null) {
            return response()->json([
                'message' => 'success',
                'data' => $product,
            ], 200);
        } else {
            return 0;
        }
    }

    public function getDetailImage($id)
    {
        $img = item_image::where('item_id', $id)->get(['id', 'path']);

        if ($img != null) {
            return response()->json([
                'message' => 'success',
                'data' => $img,
            ], 200);
        } else {
            return 0;
        }
    }
    public function getCategory()
    {
        $category = category::get(['id', 'name']);
        if ($category != null) {
            return response()->json([
                'message' => 'success',
                'data' => $category,
            ], 200);
        } else {
            return 0;
        }
    }

    public function paginateArray($data, $perPage = 15)
    {
        $page = Paginator::resolveCurrentPage();
        $total = count($data);
        $results = array_slice($data, ($page - 1) * $perPage, $perPage);

        return new LengthAwarePaginator($results, $total, $perPage, $page, [
            'path' => Paginator::resolveCurrentPath(),
        ]);
    }

    public function getProductName(Request $request)
    {
        if ($request->name == 'undefined') {
            return $this->getProduct();
        } else {
            $product = DB::select(DB::raw('SELECT items.id AS item_id,items.name,items.price,items.description,items.stock,categories.id AS category_id, categories.name AS category_name, (SELECT item_images.path FROM item_images WHERE item_images.item_id = items.id ORDER BY item_images.id LIMIT 1) AS path FROM items JOIN categories ON items.category_id = categories.id WHERE items.name LIKE "%' . $request->name . '%" ORDER BY items.updated_at DESC'));
        };

        // dd($product);
        if ($product != null) {
            return response()->json([
                'message' => 'success',
                'data' => $product,
            ], 200);
        } else {
            return 0;
        }
    }

    public function getPromo(Request $request)
    {
        if ($request->search == "") {
            $product = DB::select(DB::raw('SELECT items.id AS item_id,items.name,items.price,items.promo,items.description,items.stock,categories.id AS category_id, categories.name AS category_name, (SELECT item_images.path FROM item_images WHERE item_images.item_id = items.id ORDER BY item_images.id LIMIT 1) AS path FROM items JOIN categories ON items.category_id = categories.id WHERE items.id > ' . $request->lastId . '  AND items.deleted_at IS NULL AND items.promo IS NOT NULL ORDER BY items.updated_at DESC LIMIT 15'));
        } else {
            $product = DB::select(DB::raw('SELECT items.id AS item_id,items.name,items.price,items.promo,items.description,items.stock,categories.id AS category_id, categories.name AS category_name, (SELECT item_images.path FROM item_images WHERE item_images.item_id = items.id ORDER BY item_images.id LIMIT 1) AS path FROM items JOIN categories ON items.category_id = categories.id WHERE items.id > ' . $request->lastId . '  AND items.deleted_at IS NULL AND items.name LIKE "%' . $request->search . '%" AND items.promo IS NOT NULL ORDER BY items.updated_at DESC LIMIT 15 '));
        }

        // dd($product);
        if ($product != null) {
            return response()->json([
                'message' => 'success',
                'data' => $product,
            ], 200);
        } else {
            return response()->json([
                'message' => 'failure',
                'data' => [],
            ], 200);
        }
    }
}
