<?php
namespace App\Services;

use App\Models\Category;

use App\Models\Inventory;

use DB;

use App\Models\Income;


    class FinanceService {


        /**
         * Retrieve all incomes of the patient
         * @param  patient $id
         *  @return collection of incomes $final_data;
         */
        public static function processIncomesData($id){
            $finances = Income::where('patient_id',$id)->with('payment_method')->orderBy('created_at','DESC')->get();
            $final_data = [];
            foreach($finances as $index=>$finance){
                //$service = Inventory::select('categories_id')->where('id',$finance->service_id)->first();
           
                $service_category = Category::where('id',$finance->service_id)->first();
           

                $finance->service = $service_category;

                array_push($final_data,$finance);
            }
        

            return $final_data;

     

        }



    }



?>