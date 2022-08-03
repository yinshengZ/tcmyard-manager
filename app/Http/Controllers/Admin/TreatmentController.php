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

    public function getPatientTreatments($id){
        $treatments = Treatment::where('patient_id',$id)->get();
        //$treatment_details = $treatments->treatment_details;
        $treatment_details = [];
        $inventory_details =array();
        $counter= 0;

        /* foreach ($treatments as $key=>$treatment){
            $treatment_details[]=json_decode($treatment->treatment_details,true);
            $counter ++;
        } */

        
        foreach($treatments as $key=>$treatment){
            $treatment_details[] = json_decode($treatment->treatment_details,true);
            //$inventory_details[] = Inventory::select('name')->where('id',$treatment_details[$key]['id']->first());
            /* $inventory_details[] =['name'=>Inventory::select('name')->where('id',
            $treatment_details[$key]['id'])->first(),
        'unit'=>$treatment_details[0]['unit']]; */            
        }

        foreach($treatment_details as $key=> $treatmen_detail){

        }
        return $treatment_details[1];
       //return $treatments;
        
        //return $treatments->treatment_details;
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

       

        return response()->json([
            'message'=>'Treatment Has been added successfully!'
        ],200);

     
      /*  $herb_service = Category::where('categories','like','herb')->first();
       $herb_package = Inventory::where('name','草药')->first();
       $herb_package_price = $herb_package->unit_price;
       //$herb_service_id = $herb_service->pluck('id')->toArray();
       $quantity = $request->quantity;
       $discount = 1-($request->discount / 100);
       //$herb_details = json_encode($request->herb_details);

       $treatment_details="";
       foreach ($request->herb_details as $herb_detail){
           $id= $herb_detail['id'];
           $herb = Inventory::where('id',$id);
           $chinese_name= $herb->value('name');
           $english_name = $herb->value('eng_name');

           $treatment_details .= $chinese_name ."-".$herb_detail['unit'].",";
         }

        //return $treatment_details;

       
       foreach ($request->herb_details as $herb_detail){

           $id = $herb_detail['id'];
           $units = $herb_detail['unit']*$quantity;   
            $inventory = Inventory::find($id);
            $stock = $inventory->stock;
            if($stock-$units >= 0){
                $inventory ->stock = $inventory->stock - $units;
                $inventory->save();    
            }else{
                return "There are not enough stocks left for some items!";
            }            
                               
       };
       foreach($request as $treatments){
        $treatment = new Treatment;
        $treatment-> service_id = $herb_service->id;
        $treatment->patient_id = $request->patient_id;
        $treatment->quantity = $quantity;
        $treatment->user_id = $request->user_id;
        $treatment->treatment_details = $treatment_details;
        $treatment->save();
        return "Treatment Has Been Added!";
       };


       
      
       //return $herb_package_price; */
        
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
