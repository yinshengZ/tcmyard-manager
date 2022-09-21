<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\InventoryController;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Inventory;
use App\Models\Treatment;
use App\Models\Income;
use App\Models\Finance;
use App\Models\Service;
use App\Models\TreatmentDetails;

use App\Services\TreatmentService;

class TreatmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $treatments = Treatment::all()->with('category');
       return $treatments;
    }

    public function show($id){
        $treatment_details = TreatmentService::processSingleTreatment($id);
        return $treatment_details;   
    }

    public function getPatientTreatments($id){
        
        $treatment_lists = TreatmentService::processTreatmentDetails($id);     
        return $treatment_lists;
      
    }

    public function addHerbalPackages(Request $request){
        $herb_ids=[];
        $herb_units=[];
        $quantity = $request->quantity;

        //$herb_details = $request->herb_details;
        $treatment_details=$request->herb_details;     

        //extracting herb ids and amounts
        foreach($request->herb_details as $key=>$herb_detail){
            $inventory = Inventory::where('id',$herb_detail['id'])->first();
            $stock = $inventory->stock;
        
            $remaining_stock = $stock-($herb_detail['unit']*$quantity);
            
            if($remaining_stock >= 0){
               
                $inventory_id = $inventory['id'] ; 
                         
                $updated_inventory = Inventory::find($inventory_id);        
                $updated_inventory->stock = $remaining_stock;                       
                $updated_inventory->save();               
            }else{
                return response()->json([
                    'message'=>$inventory->name.' does not have enough stocks left!',
                    
                ],422);
            }
            array_push($herb_ids, $herb_detail['id']);
            array_push($herb_units,$herb_detail['unit']);  
             
        }

        //get the type of treatment for herbs and its info
        $service_info = Service::select('id','unit_price')->where('service_title','LIKE','%'.'herb'.'%')->first();
        $package_price = $service_info['unit_price'];       
        
        $service_id = $service_info['id'];
        $patient_id = $request->patient_id;
        $quantity = $request->quantity;
        $user_id = $request->user_id;

        $treatment = new Treatment; 

        $treatment->service_id = $service_id;
        $treatment->patient_id = $patient_id;
        $treatment->quantity = $quantity;
        $treatment->treatment_details = json_encode($treatment_details);
        $treatment->user_id = $user_id;
        $treatment->save();       

        $treatment_ids = Treatment::select('id')->where('patient_id',$patient_id)->latest()->first();
        
        $counter = 0;
        foreach ($request->herb_details as $herb_detail){
            $treatment_handler = new TreatmentDetails;
            $treatment_handler->treatment_id = $treatment_ids['id'];
            $treatment_handler->inventory_id =$herb_detail['id'];
            $treatment_handler->units = $herb_detail['unit'];
            $treatment_handler->patient_id = $patient_id;
            $treatment_handler->user_id = $user_id;
            $treatment_handler->quantity = $quantity;
            $treatment_handler->save();
            $counter++;
            
        }

        return $counter;

        return response()->json([
            'message'=>'Treatment Has been added successfully!'
        ],200); 

        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       return $request;
    }




    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
