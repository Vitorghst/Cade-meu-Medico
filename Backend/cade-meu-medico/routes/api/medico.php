<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MedicoController;

Route::get('', [MedicoController::class, 'index']);
Route::post('', [MedicoController::class, 'store']);
Route::get('/{id}', [MedicoController::class, 'show']);
Route::put('/{id}', [MedicoController::class, 'update']);
Route::delete('/{id}', [MedicoController::class, 'destroy']);

