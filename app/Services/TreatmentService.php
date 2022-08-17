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
        
        //group_concat() to concatenate and group by of treatments
        $treatments = TreatmentDetails::select('treatment_id',DB::raw('group_concat(inventory_id) as treatments'),'units','quantity','patient_id','quantity')
        ->where('patient_id',$patient_id)
        ->groupBy('treatment_id')
        ->get();
        foreach($treatments as $index =>$treatment){
            echo $index;
            
            $inventory_id = $treatment->inventory_id;
            $treatment_details_id = explode(',',$treatment->treatments);
            $inventory_detail = Inventory::findMany($treatment_details_id);
            $patient_treatments[$index]['treatment_id'] = $treatment->treatment_id;
            $patient_treatments[$index]['quantity']=  $treatment->quantity;
            $patient_treatments[$index]['patient_id'] = $treatment->patient_id;
            $patient_treatments[$index]['treatment_details']=$inventory_detail;
            $patient_treatments[$index]['inventory_id']=$treatment_details_id;
            //print_r($treatment->treatments);
            echo "\n";
        } 
        //TODO: add more essential treatment details
    
        return $patient_treatments;
    }

}