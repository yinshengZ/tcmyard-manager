<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Exception;

use App\Models\Inventory;
use App\Models\Treatment;
use App\Models\Income;
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

    //get single treatment data for displaying or updating
    public function show($id)
    {
        $treatment_details = TreatmentService::processSingleTreatment($id);
        return $treatment_details;
    }



    public function getPatientTreatments($id)
    {

        $treatment_lists = TreatmentService::processTreatmentDetails($id);
        return $treatment_lists;
    }

    public function addHerbalPackages(Request $request)
    {
        $herb_ids = [];
        $herb_units = [];
        $quantity = $request->quantity;

        //$herb_details = $request->herb_details;
        $treatment_details = $request->herb_details;

        //extracting herb ids and amounts
        foreach ($request->herb_details as $key => $herb_detail) {
            $inventory = Inventory::where('id', $herb_detail['id'])->first();
            $stock = $inventory->stock;

            $remaining_stock = $stock - ($herb_detail['unit'] * $quantity);

            if ($remaining_stock >= 0) {

                $inventory_id = $inventory['id'];

                $updated_inventory = Inventory::find($inventory_id);
                $updated_inventory->stock = $remaining_stock;
                $updated_inventory->save();
            } else {
                return response()->json([
                    'message' => $inventory->name . ' does not have enough stocks left!',

                ], 422);
            }
            array_push($herb_ids, $herb_detail['id']);
            array_push($herb_units, $herb_detail['unit']);
        }

        //get the type of treatment for herbs and its info
        $service_info = Inventory::select('id', 'unit_price')->where('categories_id', '=', 1)->first();
        $package_price = $service_info['unit_price'];

        /* $service_id = $service_info['id']; */
        $service_id = $request->service_id;
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

        $treatment_ids = Treatment::select('id')->where('patient_id', $patient_id)->latest()->first();


        foreach ($request->herb_details as $herb_detail) {
            $treatment_handler = new TreatmentDetails;
            $treatment_handler->treatment_id = $treatment_ids['id'];
            $treatment_handler->inventory_id = $herb_detail['id'];
            $treatment_handler->units = $herb_detail['unit'];
            $treatment_handler->patient_id = $patient_id;
            $treatment_handler->user_id = $user_id;
            $treatment_handler->quantity = $quantity;
            $treatment_handler->save();
        }

        $income = new Income;

        $income->amount = $request->final_price;
        $income->original_amount = $request->original_price;
        $income->treatment_id = $treatment_ids['id'];
        $income->patient_id = $request->patient_id;
        $income->user_id = $request->user_id;
        $income->discount = $request->discount;
      
        $income->service_id = $service_id;
        $income->payment_type_id = $request->payment_type;
        $income->description = $request->description;
        $income->save();




        return response()->json([
            'message' => 'Treatment Has been added successfully!'
        ], 200);
    }

    public function addServices(Request $request)
    {
        $service = new Treatment;
        $service->service_id = $request->id;
        $service->patient_id = $request->patient_id;
        $service->user_id = $request->user_id;
        $service->discount = $request->discount;
        //$service->unit = $request->unit;
        $service->quantity = $request->quantity;
        $service->save();

        $treatment_id = Treatment::select('id')->where('service_id', $request->id)->latest()->first();



        $treatment_handler = new TreatmentDetails;
        $treatment_handler->treatment_id = $treatment_id->id;
        $treatment_handler->inventory_id = $request->id;
        $treatment_handler->patient_id = $request->patient_id;
        $treatment_handler->user_id = $request->user_id;
        $treatment_handler->units = $request->unit;
        $treatment_handler->quantity = $request->quantity;
        $treatment_handler->save();

        $income = new Income;
        $income->amount = $request->final_price;
        $income->original_amount = $request->original_price;
        $income->payment_type_id = $request->payment_type_id;
        $income->patient_id = $request->patient_id;
        $income->user_id = $request->user_id;
        $income->treatment_id = $treatment_id->id;
        $income->service_id = $request->service_id; 
        $income->save();

        return response()->json([
            'message' => 'Service Has Been Added Successfully!'
        ], 200);
    }

    public function addRetail(Request $request)
    {
        $retail_ids = [];
        $retail_details = $request->retail_details;
        $quantity = 1;
        if (isset($request->quantity)) {
            $quantity = $request->quantity;
        };

        foreach ($retail_details as $key => $retail_detail) {
            $inventory = Inventory::where('id', $retail_detail['id'])->first();
            $remaining_stock = $inventory->stock - ($retail_detail['units'] * $quantity);
            if ($remaining_stock >= 0) {
                $inventory_id = $inventory['id'];

                $updated_inventory = Inventory::find($inventory_id);
                $updated_inventory->stock = $remaining_stock;
                $updated_inventory->save();
            } else {
                return response()->json([
                    'message' => $inventory->name . ' does not have enough stocks left!',
                ], 422);
            }
        }

        $retail = new Treatment;
        $retail->service_id = 3;
        $retail->patient_id = $request->patient_id;
        $retail->user_id = $request->user_id;
        $retail->quantity = $quantity;
        $retail->discount = $request->discount;
        $retail->treatment_details = json_encode($request->retail_details);
        $retail->save();

        $treatment_id = Treatment::select('id')->where('service_id', 3)->latest()->first();

        foreach ($request->retail_details as $retail_detail) {
            $treatment_handler = new TreatmentDetails;
            $treatment_handler->treatment_id = $treatment_id->id;
            $treatment_handler->inventory_id = $retail_detail['id'];
            $treatment_handler->patient_id = $request->patient_id;
            $treatment_handler->user_id = $request->user_id;
            $treatment_handler->units = $retail_detail['units'];
            $treatment_handler->quantity = $quantity;
            $treatment_handler->save();
        }

        try{
            if($request->with_finance){
                $income = new Income;
                $income->amount = $request->final_amount;
                $income->original_amount = $request->original_amount;
                $income->payment_type_id = $request->payment_type;
                $income->patient_id = $request->patient_id;
                $income->user_id = $request->user_id;
                $income->discount = $request->discount;
                $income->treatment_id = $treatment_id->id;
                $income->service_id = $request->service_id;
            }
        }catch(Exception $err){

        }

        
        

        return response()->json([
            'message' => 'Treatment Has Been Added Successfully!'
        ], 200);

        //$treatment_handler->
    }

    public function addOther(Request $request)
    {
        $others_details = $request->others_details;
        $quantity = 1;
        if (isset($request->quantity)) {
            $quantity = $request->quantity;
        };

        //check for remaining stocks and update accordingly
        foreach ($others_details as $key => $others_detail) {
            $inventory = Inventory::findOrFail($others_detail['id']);
            $remaining_stock = $inventory->stock - ($others_detail['units'] * $quantity);
            if ($remaining_stock >= 0) {
                $inventory_id = $inventory['id'];
                $updated_inventory = Inventory::find($inventory_id);
                $updated_inventory->stock = $remaining_stock;
                $updated_inventory->save();
            } else {
                return response()->json(
                    [
                        'message' => $inventory->name . ' does not have enough stocks left!'
                    ],
                    422
                );
            }
         }

         $others = new Treatment;
         $others->service_id = 4;
         $others->patient_id = $request->patient_id;
         $others->user_id = $request->user_id;
         $others->quantity = $quantity;
         $others->discount = $request->discount;
         $others->treatment_details = json_encode($request->others_details);
         $others->save();

         //grab the newly added treatment ID
         $treatment_id = Treatment::select('id')->where('service_id',4)->latest()->first();

         foreach($request->others_details as $others_detail){
            $treatment_handler = new TreatmentDetails;
            $treatment_handler->treatment_id = $treatment_id ->id;
            $treatment_handler->inventory_id = $others_detail['id'];
            $treatment_handler->patient_id = $request->patient_id;
            $treatment_handler->user_id = $request->user_id;
            $treatment_handler->units = $others_detail['units'];
            $treatment_handler->quantity = $quantity;
            $treatment_handler->save();
         }

         return response()->json([
            'message'=>'Treatment Has Been Added Successfully!'
         ],200);

       
    }

    public function updateHerb(Request $request)
    {
        $treatment_detail = [];
        $treatment_id = $request[0]['treatment_id'];

        $prepare_update = TreatmentService::processUpdateTreatment($treatment_id);


        if ($prepare_update > 0) {



            $treatment = Treatment::findOrFail($request[0]['treatment_id']);

            foreach ($request->all() as $index => $herb_detail) {
                array_push($treatment_detail, $herb_detail['treatment_detail']);
                $treatment_detail_handler = new TreatmentDetails;
                $treatment_detail_handler->treatment_id = $herb_detail['treatment_id'];
                $treatment_detail_handler->inventory_id = $herb_detail['treatment_detail']['id'];
                $treatment_detail_handler->patient_id = $herb_detail['patient_id'];
                $treatment_detail_handler->user_id = $herb_detail['user_id'];
                $treatment_detail_handler->units = $herb_detail['treatment_detail']['units'];
                $treatment_detail_handler->quantity = $herb_detail['quantity'];
                $treatment_detail_handler->save();
            };

            $treatment->service_id = $request[0]['service_id'];
            $treatment->patient_id = $request[0]['patient_id'];
            $treatment->user_id = $request[0]['user_id'];
            $treatment->quantity = $request[0]['quantity'];
            $treatment->discount = $request[0]['discount'];


            $treatment->treatment_details = json_encode($treatment_detail);

            $treatment->save();
            return response()->json([
                'message' => "Treatment has been updated!"
            ], 200);
        }
    }

    public function updateRetail(Request $request)
    {
        $treatment_detail = [];
        $treatment_id = $request[0]['treatment_id'];

        $prepare_update = TreatmentService::processUpdateTreatment($treatment_id);


        if ($prepare_update > 0) {



            $treatment = Treatment::findOrFail($request[0]['treatment_id']);

            foreach ($request->all() as $index => $retail_detail) {
                array_push($treatment_detail, $retail_detail['treatment_detail']);
                $treatment_detail_handler = new TreatmentDetails;
                $treatment_detail_handler->treatment_id = $retail_detail['treatment_id'];
                $treatment_detail_handler->inventory_id = $retail_detail['treatment_detail']['id'];
                $treatment_detail_handler->patient_id = $retail_detail['patient_id'];
                $treatment_detail_handler->user_id = $retail_detail['user_id'];
                $treatment_detail_handler->units = $retail_detail['treatment_detail']['units'];
                $treatment_detail_handler->quantity = $retail_detail['quantity'];
                $treatment_detail_handler->save();
            };

            $treatment->service_id = $request[0]['service_id'];
            $treatment->patient_id = $request[0]['patient_id'];
            $treatment->user_id = $request[0]['user_id'];
            $treatment->quantity = $request[0]['quantity'];
            $treatment->discount = $request[0]['discount'];


            $treatment->treatment_details = json_encode($treatment_detail);

            $treatment->save();
            return response()->json([
                'message' => "Treatment has been updated!"
            ], 200);
        }
    }

    public function updateService(Request $request)
    {
        $treatment_detail = [
            'id' => $request->inventory_id,
            'units' => 1
        ];
        $treatment = Treatment::findOrFail($request->treatment_id);
        $treatment->service_id = $request->category_id;
        $treatment->patient_id = $request->patient_id;
        $treatment->user_id = $request->user_id;
        $treatment->quantity = $request->quantity;
        $treatment->discount = $request->discount;
        $treatment->treatment_details = json_encode($treatment_detail);
        $treatment->save();

        $treatment_details = TreatmentDetails::where('treatment_id', $request->treatment_id)->delete();

        $treatment_handler = new TreatmentDetails;
        $treatment_handler->treatment_id = $request->treatment_id;
        $treatment_handler->inventory_id = $request->inventory_id;
        $treatment_handler->patient_id = $request->patient_id;
        $treatment_handler->user_id = $request->user_id;
        $treatment_handler->units = 1;
        $treatment_handler->quantity = $request->quantity;
        $treatment_handler->save();

        return response()->json([
            'message' => 'Treatment Has Been Updated Successfully!'
        ]);
    }



    public function updateOther(Request $request)
    {
        $treatment_detail=[];
        $treatment_id = $request[0]['treatment_id'];
        $prepare_update = TreatmentService::processUpdateTreatment($treatment_id);

        if($prepare_update>0){
            $treatment = Treatment::findOrFail($treatment_id);
            
            foreach($request->all() as $index=>$other_detail){
                array_push($treatment_detail, $other_detail['treatment_detail']);
                $treatment_detail_handler = new TreatmentDetails;
                $treatment_detail_handler->treatment_id = $other_detail['treatment_id'];
                $treatment_detail_handler->inventory_id = $other_detail['treatment_detail']['id'];
                $treatment_detail_handler->patient_id = $other_detail['patient_id'];
                $treatment_detail_handler->user_id = $other_detail['user_id'];
                $treatment_detail_handler->units = $other_detail['treatment_detail']['units'];
                $treatment_detail_handler->quantity = $other_detail['quantity'];
                $treatment_detail_handler->save();
            }

            $treatment->service_id = $request[0]['service_id'];
            $treatment->patient_id = $request[0]['patient_id'];
            $treatment->user_id = $request[0]['user_id'];
            $treatment->quantity = $request[0]['quantity'];
            $treatment->discount = $request[0]['discount'];

            $treatment->treatment_details = json_encode($treatment_detail);

            $treatment->save();

            return response()->json([
                'message'=>"Treatment has been updated!"
            ],200);

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $treatment = Treatment::where('id', $id)->delete();
        $treatment_details = TreatmentDetails::where('treatment_id', $id)->delete();
        $income = Income::where('treatment_id',$id)->delete();
        return response()->json([
            'message' => 'Treatment Has Been Deleted Successfully!'
        ], 200);
    }
}
