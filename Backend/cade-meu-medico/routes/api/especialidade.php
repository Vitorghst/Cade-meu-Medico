<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EspecialidadeController;

Route::get('', [EspecialidadeController::class, 'index']);
Route::post('', [EspecialidadeController::class, 'store']);
Route::get('/{id}', [EspecialidadeController::class, 'show']);
Route::put('/{id}', [EspecialidadeController::class, 'update']);
Route::delete('/{id}', [EspecialidadeController::class, 'destroy']);

