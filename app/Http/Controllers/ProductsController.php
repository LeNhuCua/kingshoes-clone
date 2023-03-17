<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function allproducts()
    {
        return Product::select('id','name','price','alias','image','hot','discount')->get();
    }
    public function productshot()
    {
        $productshot = DB::table('products')->where('hot', 'hot')->get();
        return $productshot;
    }
    public function slides()
    {
        $slides = DB::table('slides')->get();
        return $slides;
    }
    public function imagesProduct()
    {
        $images = DB::table('images')->get();
        return $images;
    }
}
