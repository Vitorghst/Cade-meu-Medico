<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StateController;

Route::get('', [StateController::class, 'index']);
Route::post('', [StateController::class, 'store']);
Route::get('/{id}', [StateController::class, 'show']);
Route::put('/{id}', [StateController::class, 'update']);
Route::delete('/{id}', [StateController::class, 'destroy']);
Route::post('states', [StateController::class, 'storeArray']);


