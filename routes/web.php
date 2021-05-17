<?php
//新模板
Route::get('/', 'WugeController@index');
Route::get('/wugesubmit', 'WugeController@index');
Route::post('/wugesubmit', 'WugeController@store');
Route::get('/wugesearch', 'WugeController@wugesearch');
Route::post('/wugesearch', 'WugeController@wugesearchpost');


Route::namespace('Backend')->prefix('backend')->group(function () {

    Route::get('/login', 'AuthController@showLoginForm')->name('backend.login');

    Route::post('/login', 'AuthController@login');

    Route::get('/logout', 'AuthController@logout');


    Route::group(['middleware' => ['auth', 'reject-null-values']], function () {

        Route::get('/', 'HomeController@index')->name('backend.home');

        Route::post('/upload/image', 'UploadController@image');

        Route::resource('article', 'ArticleController', ['as' => 'backend']);

        Route::resource('category', 'CategoryController', ['as' => 'backend']);

        Route::get('category/set-nav/{id}', ['as' => 'backend.category.set-nav', 'uses' => 'CategoryController@setNavigation']);

        Route::resource('user', 'UserController', ['as' => 'backend']);

        Route::resource('tag', 'TagController', ['as' => 'backend']);

        Route::resource('link', 'LinkController', ['as' => 'backend']);

        Route::resource('navigation', 'NavigationController', ['as' => 'backend']);

        Route::resource('page', 'PageController', ['as' => 'backend']);

        Route::get('system', 'SystemController@index')->name('backend.system.index');

        Route::post('system', 'SystemController@store')->name('backend.system.store');
    });
});
