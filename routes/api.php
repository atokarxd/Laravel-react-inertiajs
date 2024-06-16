<?php
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use App\Http\Controllers\UserController;

Route::middleware('auth:api')->get('/user', function(Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);