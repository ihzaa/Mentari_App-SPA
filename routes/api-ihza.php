<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {
    Route::post('edit/profile', 'UserController@EditProfile');
    Route::post('edit/address', 'UserController@editAddress');

    Route::get('get/address','UserController@getAllAddress');
});
