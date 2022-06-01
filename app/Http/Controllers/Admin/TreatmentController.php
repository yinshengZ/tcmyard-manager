<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Inventory;
use App\Models\Treatment;
use App\Models\Income;
use App\Models\Fiance;

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
        $treatments = Treatment::where('patient_id',$id)->with('category')->get();
        /*
       foreach($treatments as $treatment){
            $treat = $treatment->treatment_details;
           echo $treat;
           echo "line break \n";
       }*/
       return $treatments;
        
        //return $treatments->treatment_details;
    }

    public function addHerbalPackages(Request $request){
       $herb_service = Category::where('categories','like','herb')->first();
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


       
      
       //return $herb_package_price;
        
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
