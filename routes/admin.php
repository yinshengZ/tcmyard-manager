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
use App\Http\Controllers\Admin\TodoController;
use App\Http\Controllers\Admin\FileController;
use App\Http\Controllers\Admin\FinanceController;
use App\Http\Controllers\admin\MedicationController;
use App\Http\Controllers\admin\DiseaseController;
use App\Http\Controllers\Admin\PaymentMethodController;


Route::post('login', [UserController::class, 'login'])->name('admin.api.login');

Route::group([
    'middleware' => ['auth:sanctum'],
], function () {
    Route::post('user/logout', [UserController::class, 'logout'])->name('admin.api.logout');

    Route::get('user/info', [UserController::class, 'userInfo'])->name('admin.api.userInfo');

    Route::post('patient/disease/tag', [PatientController::class, 'add_patient_disease']);
    Route::post('patient/allergy/tag', [PatientController::class, 'add_patient_allergy']);
    Route::post('patient/symptom/tag', [PatientController::class, 'add_patient_symptom']);
    Route::post('patient/medication/tag', [PatientController::class, 'add_patient_medication']);

    Route::delete('patient/disease/{patient_id}/{disease_id}', [PatientController::class, 'delete_patient_disease']);
    Route::delete('patient/symptom/{patient_id}/{symptom_id}', [PatientController::class, 'delete_patient_symptom']);
    Route::delete('patient/medication/{patient_id}/{medication_id}', [PatientController::class, 'delete_patient_medication']);
    Route::delete('patient/allergy/{patient_id}/{allergy_id}', [PatientController::class, 'delete_patient_allergy']);

    Route::get('patient/info/{patient_id}', [PatientController::class, 'get_patient_info']);

    Route::post('patient/search', [PatientController::class, 'search_patient'])->name('patient.search_patient');
    Route::get('record/search/{patient_id}', [RecordController::class, 'patient_records'])->name('record.patient_records');





    Route::get('inventory/category/{category_id}', [InventoryController::class, 'get_inventory_by_category']);
    Route::get('inventory/retail', [InventoryController::class, 'get_retails']);
    Route::get('inventory/herb', [InventoryController::class, 'get_herbs']);
    Route::get('inventory/service', [InventoryController::class, 'get_services']);
    Route::get('inventory/other', [InventoryController::class, 'get_others']);


    Route::post('treatment/herb', [TreatmentController::class, 'addHerbalPackages']);
    Route::post('treatment/service', [TreatmentController::class, 'addServices']);
    Route::post('treatment/retail', [TreatmentController::class, 'addRetail']);
    Route::post('treatment/other', [TreatmentController::class, 'addOther']);
    Route::put('treatment/herb/', [TreatmentController::class, 'updateHerb']);
    Route::put('treatment/service', [TreatmentController::class, 'updateService']);
    Route::put('treatment/retail', [TreatmentController::class, 'updateRetail']);
    Route::put('treatment/other', [TreatmentController::class, 'updateOther']);

    Route::get('file/patient/{id}', [FileController::class, 'get_patient_files']);
    Route::get('file/{id}', [FileController::class, 'get_file']);
    Route::post('/file', [FileController::class, 'store']);
    Route::delete('/file/{id}', [FileController::class, 'destroy']);
    Route::patch('/file', [FileController::class, 'update_patient_file']);


    Route::get('finance/income', [FinanceController::class, 'get_all_incomes']);
    Route::get('finance/income/patient/{id}', [FinanceController::class, 'get_patient_incomes']);
    Route::post('finance/income/patient', [FinanceController::class, 'add_patient_income']);
    Route::put('finance/income/patient', [FinanceController::class, 'update_patient_income']);
    Route::delete('finance/income/{id}', [FinanceController::class, 'delete_patient_income']);
    Route::get('finance/expense', [FinanceController::class, 'get_all_expenses']);
    Route::get('finance/expense/{id}', [FinanceController::class, 'get_user_expenses']);
    Route::post('finance/expense', [FinanceController::class, 'add_expense']);
    Route::put('finance/expense', [FinanceController::class, 'update_expense']);
    Route::delete('finance/expense/{id}', [FinanceController::class, 'delete_expense']);

    Route::get('finance/income/year', [FinanceController::class, 'get_curret_year_incomes']);
    Route::get('finance/income/month', [FinanceController::class, 'get_current_month_incomes']);
    Route::get('finance/income/week', [FinanceController::class, 'get_current_week_incomes']);
    Route::get('finance/income/today', [FinanceController::class, 'get_current_day_incomes']);

    Route::get('finance/income/yearly', [FinanceController::class, 'get_yearly_incomes']);

    Route::get('finance/income/today/daily', [FinanceController::class, 'get_current_day_daily_incomes']);
    Route::get("finance/income/month/daily", [FinanceController::class, 'get_current_month_daily_incomes']);
    Route::get("finance/income/week/daily", [FinanceController::class, 'get_current_week_daily_incomes']);
    Route::get('finance/income/year/monthly', [FinanceController::class, 'get_current_year_monthly_incomes']);

    Route::get('finance/income/today/distribution', [FinanceController::class, 'get_current_day_daily_income_distribution']);
    Route::get("finance/income/year/distribution", [FinanceController::class, 'get_current_year_income_distribution']);
    Route::get('finance/income/month/distribution', [FinanceController::class, 'get_current_month_income_distribution']);
    Route::get('finance/income/week/distribution', [FinanceController::class, 'get_current_week_income_distribution']);

    Route::get('finance/income/comp/week', [FinanceController::class, 'get_weekly_comp_incomes']);
    Route::get('finance/income/comp/month', [FinanceController::class, 'get_monthly_comp_incomes']);
    Route::get('finance/income/comp/year', [FinanceController::class, 'get_yearly_comp_incomes']);



    Route::get('finance/income/distribution/year/{data}', [FinanceController::class, 'get_year_income_distributions']);
    Route::get('finance/income/distribution/week/{data}', [FinanceController::class, 'get_week_income_distributions']);

    Route::get('finance/income/comp/all_time', [FinanceController::class, 'get_all_time_comp_percentages']);

    Route::get('finance/income/record/day', [FinanceController::class, 'get_highest_daily_income']);
    Route::get('finance/income/record/week', [FinanceController::class, 'get_highest_weekly_income']);
    Route::get('finance/income/record/month', [FinanceController::class, 'get_highest_monthly_income']);
    Route::get('finance/income/record/year', [FinanceController::class, 'get_highest_yearly_income']);
    Route::get('finance/income/record/spender', [FinanceController::class, 'get_highest_spender']);

    Route::get('payment_methods', [PaymentMethodController::class, 'index']);

    Route::get('treatment/patient/{id}', [TreatmentController::class, 'getPatientTreatments']);

    Route::post('income/service', [IncomeController::class, 'addIncomeByService']);

    Route::get('todo/{user_id}', [TodoController::class, 'user_todo_list']);





    Route::resource('patient', PatientController::class);
    Route::apiResource('gender', GenderController::class);
    Route::apiResource('marital', MaritalController::class);
    Route::apiResource('allergy', AllergyController::class);
    Route::apiResource('symptom', SymptomController::class);
    Route::apiResource('medication', MedicationController::class);
    ROute::apiResource('disease', DiseaseController::class);
    Route::apiResource('record', RecordController::class);
    Route::apiResource('income', IncomeController::class);
    Route::apiResource('service', ServiceController::class);
    Route::apiResource('inventory', InventoryController::class);
    Route::apiResource('category', CategoryController::class);
    Route::apiResource('treatment', TreatmentController::class);
    Route::apiResource('todo', TodoController::class);
});
