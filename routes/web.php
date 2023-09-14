<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\FinanceController;
use App\Http\Controllers\Admin\MailController;

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

Route::get('/php', function () {
    return phpinfo();
});

Route::get('income/nill', [FinanceController::class, 'report_nill']);
Route::get('/send_email', [MailController::class, 'test_email']);
