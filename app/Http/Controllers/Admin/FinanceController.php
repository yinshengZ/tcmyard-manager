<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\Income;

use App\Services\FinanceService;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;



class FinanceController extends Controller
{
  

   public function add_patient_income(Request $request){
      return $request;
   }

   public function get_curret_year_incomes(){
      $incomes = Income::select('amount')->whereYear('date',date('Y'))->sum('amount');
      return $incomes;
   }

   public function get_current_month_incomes(){
      $incomes = Income::select('amount')->whereYear('date',Carbon::now()->year)->whereMonth('date',Carbon::now()->month)->sum('amount');
      return $incomes;
   }

   public function get_current_week_incomes(){
      $incomes = Income::select('amount')->whereBetween('date',[Carbon::now()->startOfWeek(),Carbon::now()->endOfWeek()])->sum('amount');
      return $incomes;
   }

   public function get_current_day_incomes(){
      $incomes = Income::select('amount')->whereDate('date',Carbon::today())->sum('amount');
      return $incomes;
   }

   public function get_all_incomes(){
      
   }

   public function get_patient_incomes($id){
      /* $income = Income::where('patient_id',$id)->with('payment_method','service')->get();
      return $income; */
      $income = FinanceService::processIncomesData($id);
      return $income;
   }

   public function update_patient_income(Request $request){
      return $request;
   }

   public function delete_patient_income($id){
      return $id;
   }

   public function add_expense(Request $request){
      return $request;
   }
   
   public function get_all_expenses(){
      return null;
   }

   public function get_user_expenses($id){
      return $id;
   }

   public function update_expense(Request $request){
      return $request;
   }

   public function delete_expense($id){
      return $id;
   }

  
   
}
