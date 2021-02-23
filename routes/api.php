<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'Auth\RegisterController@register')->name('register');
    Route::post('login', 'Auth\AuthController@login')->name('login');
    Route::get('logout', 'Auth\AuthController@logout')->name('logout')->middleware('auth:api');
});

Route::middleware('auth:api')->get('/user', 'Auth\AuthController@user');

Route::get('/carousel', 'HomeController@getCarousel');
Route::post('/product', 'HomeController@getProduct');
Route::get('/detail/{id}', 'HomeController@getDetail');
Route::get('/category', 'HomeController@getCategory');
Route::get('/detail_image/{id}', 'HomeController@getDetailImage');
Route::get('/search', 'HomeController@getProductName');
