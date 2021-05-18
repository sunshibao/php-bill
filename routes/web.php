<?php
//新模板
Route::get('/', 'WugeController@index');
Route::get('/wugesubmit', 'WugeController@index');
Route::post('/wugesubmit', 'WugeController@store');
Route::get('/wugesearch', 'WugeController@search')->name('wugesearch');


Route::namespace('Backend')->prefix('backend')->group(function () {

    Route::get('/login', 'AuthController@showLoginForm')->name('backend.login');

    Route::post('/login', 'AuthController@login');

    Route::get('/logout', 'AuthController@logout');


    Route::group(['middleware' => ['auth', 'reject-null-values']], function () {

        Route::get('/', 'HomeController@index')->name('backend.home');

        Route::resource('user', 'UserController', ['as' => 'backend']);

        Route::resource('wuge', 'WugeController', ['as' => 'backend']);
        Route::get('wugeremit', 'WugeController@wugeremit')->name('backend.wuge.wugeremit');

    });
});
