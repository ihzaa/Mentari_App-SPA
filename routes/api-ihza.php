<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {
    Route::post('edit/profile', 'UserController@EditProfile');
    Route::post('edit/address', 'UserController@editAddress');
    Route::post('edit/password', 'UserController@editPassword');

    Route::get('get/address', 'UserController@getAllAddress');

    Route::get('add/to/cart/{id}', 'ItemController@addToCart');
    Route::get('get/cart/count', 'ItemController@getCountCartItem');
    Route::get('get/cart/item', 'ItemController@getCartItem');
    Route::post('delete/cart/item', 'ItemController@deleteItemInCart');
    Route::post('cart/item/quantity', 'ItemController@changeQuantity');
    Route::post('cart/item/buy', 'ItemController@buy');

    Route::get('transaction/history', 'TranscationHistoryController@getHistory');
});

Route::prefix('auth')->group(function () {
    // Send reset password mail
    // Route::post('reset-password', 'Auth\ResetPasswordController@sendPasswordResetLink');

    // handle reset password form process
    Route::post('reset-password', 'Auth\ResetPasswordController@index');
    // Route::post('reset-password', 'Auth\ResetPasswordController@sendPasswordResetLink');

});
