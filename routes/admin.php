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
use App\Http\Controllers\Admin\TodoController;
use App\Http\Controllers\Admin\FileController;

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
    Route::get('inventory/service',[InventoryController::class,'get_services']);
    Route::get('inventory/other',[InventoryController::class,'get_others']);
    

    Route::post('treatment/herb',[TreatmentController::class,'addHerbalPackages']);
    Route::post('treatment/service',[TreatmentController::class,'addServices']);
    Route::post('treatment/retail',[TreatmentController::class,'addRetail']);
    Route::post('treatment/other',[TreatmentController::class,'addOther']);
    Route::put('treatment/herb/',[TreatmentController::class,'updateHerb']);
    Route::put('treatment/service',[TreatmentController::class,'updateService']);
    Route::put('treatment/retail',[TreatmentController::class,'updateRetail']);
    Route::put('treatment/other',[TreatmentController::class,'updateOther']);

    Route::get('file/{id}',[FileController::class,'get_patient_files']);
    Route::post('/file',[FileController::class,'store']);
    Route::delete('/file/{id}',[FileController::class,'destroy']);
    ROute::put('/file',[FileController::class,'update_patient_file']);



    Route::get('treatment/patient/{id}',[TreatmentController::class,'getPatientTreatments']);

    Route::post('income/service',[IncomeController::class,'addIncomeByService']);

    Route::get('todo/{user_id}',[TodoController::class,'user_todo_list']);

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
    Route::apiResource('todo',TodoController::class);

});