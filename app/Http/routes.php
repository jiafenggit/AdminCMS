<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveApp');
    Route::get('/unsupported-browser', 'AngularController@unsupported');
    Route::get('user/verify/{verificationCode}', ['uses' => 'Auth\AuthController@verifyUserEmail']);
    Route::get('auth/{provider}', ['uses' => 'Auth\AuthController@redirectToProvider']);
    Route::get('auth/{provider}/callback', ['uses' => 'Auth\AuthController@handleProviderCallback']);
    Route::get('/api/authenticate/user', 'Auth\AuthController@getAuthenticatedUser');
});

$api->group(['middleware' => ['api']], function ($api) {
    $api->controller('auth', 'Auth\AuthController');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');

    //news
//    $api->get('dtlists', 'News\NewsDtController@getLists');
//    $api->get('news/dtlists', 'News\NewsDtController@getLists');
});

$api->group(['middleware' => ['api', 'api.auth']], function ($api) {
    $api->get('users/me', 'UserController@getMe');
    $api->put('users/me', 'UserController@putMe');
});

$api->group(['middleware' => ['api', 'api.auth', 'role:admin.super|admin.user|admin.knowloage']], function ($api) {
    $api->controller('users', 'UserController');
//    $api->controller('informs', 'InformController');
//    $api->controller('uploads', 'UploadController');//@imgEditor
    //|admin.inform|admin.dtinform|admin.knowloage|admin.teaculture
});

$api->group(['middleware' => ['api', 'api.auth', 'role:admin.inform|admin.dtinform|admin.knowloage|admin.teaculture']], function ($api) {
    $api->controller('informs', 'InformController');
});


Route::group(['middleware' => ['upload']], function () {
    //upload
    Route::post('/upload/imgEditor', 'UploadController@imgEditor');
    Route::post('/upload/imgUpload', 'UploadController@imgUpload');
//    http://admin.zdmc181.dev/upload/ImgEditor
});