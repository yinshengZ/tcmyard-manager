<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\UserController;

use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\Admin\GenderController;
use App\Http\Controllers\Admin\MaritalController;
use App\Http\Controllers\Admin\AllergyController;
use App\Http\Controllers\Admin\SymptomController;
use App\Http\Controllers\Admin\RecordController;
use App\Http\Controllers\Admin\IncomeController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\InventoryController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TreatmentController;
use App\Http\Controllers\Admin\StockController;
use App\Http\Controllers\Admin\IncomeTypeController;

Route::post('login', [UserController::class, 'login'])->name('admin.api.login');

Route::group([
    'middleware' => ['auth:sanctum'],
], function () {
    Route::post('user/logout', [UserController::class, 'logout'])->name('admin.api.logout');

    Route::get('user/info', [UserController::class, 'userInfo'])->name('admin.api.userInfo');

    Route::resource('patient',PatientController::class);
    Route::post('patient/search',[PatientController::class,'search_patient'])->name('patient.search_patient');
    Route::get('record/search/{patient_id}',[RecordController::class,'patient_records'])->name('record.patient_records');
    Route::get('inventory/category/{category_id}',[InventoryController::class,'get_inventory_by_category']);
    Route::get('inventory/retail',[InventoryController::class,'get_retails']);
    Route::get('inventory/herb',[InventoryController::class,'get_herbs']);
    Route::get('inventory/other',[InventoryController::class,'get_others']);

    Route::post('treatment/herb',[TreatmentController::class,'addHerbalPackages']);

    Route::get('treatment/patient/{id}',[TreatmentController::class,'getPatientTreatments']);

    Route::post('income/service',[IncomeController::class,'addIncomeByService']);


    Route::apiResource('gender',GenderController::class);
    Route::apiResource('marital',MaritalController::class);
    Route::apiResource('allergy',AllergyController::class);
    Route::apiResource('symptom',SymptomController::class);
    Route::apiResource('record',RecordController::class);
    Route::apiResource('income',IncomeController::class);
    Route::apiResource('service',ServiceController::class);
    Route::apiResource('inventory',InventoryController::class);
    Route::apiResource('category',CategoryController::class);
    Route::apiResource('treatment',TreatmentController::class);
    Route::apiResource('stock',StockController::class);
    Route::apiResource('income_type',IncomeTypeController::class);

});