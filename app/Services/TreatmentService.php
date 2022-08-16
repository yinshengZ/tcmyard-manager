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
        
        //group_concat() to concatenate and group by of treatments
        $treatments = TreatmentDetails::select('treatment_id',DB::raw('group_concat(inventory_id) as treatments'),'units','quantity')
        ->where('patient_id',$patient_id)
        ->groupBy('treatment_id')
        ->get();
        foreach($treatments as $treatment){
            $inventory_id = $treatment->inventory_id;
            $inventory_detail = Inventory::findMany($treatment->treatments);
            print_r($inventory_id);
        } 
        //TODO: successfully retrived inventory details, need to reconstruct the treatment details array object for returning
    
        return $inventory_detail;
    }

}