<?php


use Illuminate\Support\Facades\Route;


Route::post('login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout']);
Route::get('refresh', [AuthController::class, 'refresh']);
Route::get('me', [AuthController::class, 'me']);
