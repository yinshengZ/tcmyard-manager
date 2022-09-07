<?php
namespace App\Services;

use DB;

use App\Models\Treatment;
use App\Models\Inventory;
use App\Models\TreatmentDetails;



class TreatmentService{

    public static function processTreatmentDetails($patient_id){
        $inventory_ids =[];
        $inventory_detail;
        $patient_treatments = [];
        $final_treatment_details=[];
        
        //group_concat() to concatenate and group by of treatments
        $treatments = TreatmentDetails::select(DB::raw('group_concat(id) as t_id'),'treatment_id',DB::raw('group_concat(inventory_id) as treatments'),DB::raw('group_concat(units) as amount'),'units','quantity','patient_id','quantity','created_at','updated_at')
        ->where('patient_id',$patient_id)
        ->groupBy('treatment_id')
        ->get()
        ;
        foreach($treatments as $index =>$treatment){           
            
            $inventory_id = $treatment->inventory_id;
            $treatment_details_id = explode(',',$treatment->t_id);
            $treatment_inventory_details_id = explode(',',$treatment->treatments);

            $result =[];
            
            $final_details=[];

           // print_r($treatment);
            

            //TODO:treatment details constructed, but only with the last record. needs fixing
            foreach($treatment_details_id as $index=>$treatment_detail_id){
                $treatment_details = TreatmentDetails::findOrFail($treatment_detail_id)->toArray();
                $inventory_details = Inventory::findOrFail($treatment_details['inventory_id'])->toArray();
                $inventory_details['units'] =$treatment_details['units'] ;
                $inventory_details['treatment_id']=$treatment_details['treatment_id'];
                $inventory_details['treatment_details_id']= $treatment_details['id'];
                $inventory_details['patient_id']=$treatment_details['patient_id'];
                $inventory_details['quantity']= $treatment_details['quantity'];
                $inventory_details['patient_id']=$treatment_details['patient_id'];
                $inventory_details['user_id']=$treatment_details['user_id'];
                $inventory_details['treatment_created_at'] =$treatment_details['created_at'];
                $inventory_details['treatment_updated_at']=$treatment_details['updated_at'];

                array_push($final_details, $inventory_details);

                //array_push($inventory_details,$inventory_units);
                
                //array_push($final_details,$inventory_units);             

         
        }

        array_push($final_treatment_details, $final_details);
        

        
        
    
   
    }
    return $final_treatment_details;
       
}
}