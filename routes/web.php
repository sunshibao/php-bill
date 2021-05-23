<?php
//新模板
Route::get('/', 'WugeController@index');
Route::get('/wugesubmit', 'WugeController@index');
Route::post('/wugesubmit', 'WugeController@store');
<<<<<<< HEAD
Route::get('/wugesearch', 'WugeController@wugesearch');
Route::post('/wugesearch', 'WugeController@wugesearchpost');
=======
Route::get('/wugesearch', 'WugeController@search')->name('wugesearch');
>>>>>>> ddfbf1a20059b0f3d137e872140d7ffd70c0d031


Route::namespace('Backend')->prefix('backend')->group(function () {

    Route::resource('wuge', 'WugeController', ['as' => 'backend']);

    Route::get('wugeremit', 'WugeController@wugeremit')->name('backend.wuge.wugeremit');

    Route::get('wugeremark', 'WugeController@wugeremark')->name('backend.wuge.wugeremark');

    Route::post('wugeupdate', 'WugeController@wugeupdate')->name('backend.wuge.wugeupdate');


//    Route::group(['middleware' => ['auth', 'reject-null-values']], function () {
//
//        Route::get('/', 'HomeController@index')->name('backend.home');
//
//        Route::resource('user', 'UserController', ['as' => 'backend']);
//
//        Route::resource('wuge', 'WugeController', ['as' => 'backend']);
//
//        Route::get('wugeremit', 'WugeController@wugeremit')->name('backend.wuge.wugeremit');
//
//        Route::get('wugeremark', 'WugeController@wugeremark')->name('backend.wuge.wugeremark');
//
//        Route::post('wugeupdate', 'WugeController@wugeupdate')->name('backend.wuge.wugeupdate');
//
//    });
});
