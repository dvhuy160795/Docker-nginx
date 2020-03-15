<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('attachment')->group(function () {
    Route::get('getAttachment', 'AttachmentController@getAttachment');
});
Route::prefix('post')->group(function () {
    Route::get('index', 'PostController@index');
    Route::get('getPosts', 'PostController@getPosts');
    Route::post('addPost', 'PostController@addPost');
});

Route::prefix('maintain')->group(function () {
    Route::group(['middleware' => ['checkLogin']], function () {
        Route::get('/', 'MaintainController@index');

        Route::get('manageUsers', 'ManageUsersController@index');
        Route::get('getManageUsers', 'ManageUsersController@index');
        Route::post('postManageUsers', 'ManageUsersController@index');
        Route::put('putManageUsers', 'ManageUsersController@index');
        Route::delete('deleteManageUsers', 'ManageUsersController@index');

        Route::get('manageCategories', 'ManageCategoriesController@index');
        Route::get('getManageCategories', 'ManageCategoriesController@index');
        Route::post('postManageCategories', 'ManageCategoriesController@index');
        Route::put('putManageCategories', 'ManageCategoriesController@index');
        Route::delete('deleteManageCategories', 'ManageCategoriesController@index');

        Route::get('manageProducts', 'ManageProductsController@index');
        Route::get('getManageProducts', 'ManageProductsController@index');
        Route::post('postManageProducts', 'ManageProductsController@index');
        Route::put('putManageProducts', 'ManageProductsController@index');
        Route::delete('deleteManageProducts', 'ManageProductsController@index');
    });
});




