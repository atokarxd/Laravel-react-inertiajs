<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Login');
});

Route::get('/signup', function () {
    return Inertia::render('Signup');
});

Route::get('/main', function () {
    return Inertia::render('MainContent');
});

Route::get('api/register', [UserController::class, 'register']);
