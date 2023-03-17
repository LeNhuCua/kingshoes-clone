<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([[
            'name' => "SUPERSTAR",
            'price' => 2200100,
            'alias' => "superstart",
            'image' => "giay1",
            'hot' => "hot",
            'discount' => 10
        ], [
            'name' => "AIR FORCE 1",
            'price' => 2323243,
            'alias' => "air-force1",
            'image' => "giay2",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "YEEZY BOOST 350 V2 BELUGA REFLECTIVE",
            'price' => 1032300,
            'alias' => "yeezy-boost-350-v2-beluga-reflective-gw1229",
            'image' => "giay3",
            'hot' => "hot",
            'discount' => 10
        ], [
            'name' => "AIR MAX 90 LOVE LETTER",
            'price' => 150000,
            'alias' => "air-max-90-love-letter-dd8029-100",
            'image' => "giay4",
            'hot' => "hot",
            'discount' => 2
        ], [
            'name' => "DUNK HIGH AMBUSH",
            'price' => 160000,
            'alias' => "dunk-high-ambush-cu7544-400",
            'image' => "giay5",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "AIR ZOOM ALPHAFLY NEXT% FLYKNIT",
            'price' => 1800000,
            'alias' => "air-zoom-alphafly-next--flyknit-ci9925-700",
            'image' => "giay6",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "JORDAN 1 MID TUFT ORANGE",
            'price' => 160000,
            'alias' => "jordan-1-mid-tuft-orange-dd6834-802",
            'image' => "giay7",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "AIR JORDAN 1 HI TROPHY ROOM CHICAGO",
            'price' => 6000000,
            'alias' => "air-jordan-1-hi-trophy-room-chicago-da2728",
            'image' => "giay8",
            'hot' => "hot",
            'discount' => 10
        ], [
            'name' => "NMD_R1 SPECTOO",
            'price' => 100000,
            'alias' => "nmd-r1-spectoo-gz1",
            'image' => "giay9",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "NMD_R1 SPECTOO",
            'price' => 1700000,
            'alias' => "nmd-r1-spectoo-fx6818",
            'image' => "giay10",
            'hot' => "no",
            'discount' => 20
        ], [
            'name' => "ULTRABOOST 4.0 DNA",
            'price' => 8999100,
            'alias' => "ultraboost-4-0-dna-fz400",
            'image' => "giay11",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "NIKECOURT ZOOM VAPOR CAGE 4 RAFA TENNIS",
            'price' => 100000,
            'alias' => "nikecourt-zoom-vapor-cage-4-rafa-tennis-dd1579",
            'image' => "giay2",
            'hot' => "hot",
            'discount' => 20
        ], [
            'name' => "AIR FORCE 1",
            'price' => 188800,
            'alias' => "nikecourt-zoom-vapor-cage-4-rafa",
            'image' => "giay12",
            'hot' => "no",
            'discount' => 20
        ], [
            'name' => "BLAZER LOW JUMBO ORANGE",
            'price' => 19900,
            'alias' => "air-force1",
            'image' => "giay13",
            'hot' => "no",
            'discount' => 20
        ], [
            'name' => "BLAZER LOW JUMBO ORANGE",
            'price' => 1000,
            'alias' => "blazer-low-jumbo-orange-dn2158",
            'image' => "giay14",
            'hot' => "no",
            'discount' => 20
        ], [
            'name' => "ALPHABOOST",
            'price' => 100000,
            'alias' => "alphaboost-ef1183",
            'image' => "giay15",
            'hot' => "no",
            'discount' => 20
        ]]);
    }
}
