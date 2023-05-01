<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\Income;

use App\Services\FinanceService;

use Illuminate\Http\Request;

class FinanceController extends Controller
{
  

   public function add_patient_income(Request $request){
      return $request;
   }

   public function get_all_incomes(){
      return null;
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
