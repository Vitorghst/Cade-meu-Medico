<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StateController;

Route::post('login', [AuthController::class , 'login']);

Route::group(['middleware' => ['jwt.verify']], function (){
    Route::prefix('auth')->group(base_path('routes/api/auth.php'));
    Route::prefix('state')->group(base_path('routes/api/state.php'));
    Route::prefix('user')->group(base_path('routes/api/user.php'));
});



