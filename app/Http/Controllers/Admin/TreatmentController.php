<?php

namespace App\Http\Controllers\admin;;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Exception;
use Carbon\Carbon;

use App\Models\Inventory;
use App\Models\Treatment;
use App\Models\Income;
use App\Models\TreatmentDetails;



use App\Services\TreatmentService;
use Illuminate\Contracts\Pagination\Paginator;

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
        // $treatment_details = TreatmentService::processSingleTreatment($id);

        $treatment_details = Treatment::where('id', $id)->with('category')->with('inventories')->with('incomes')->first();

        return $treatment_details;
    }



    public function getPatientTreatments($id)
    {
        $treatments = Treatment::where('patient_id', $id)->with('category')->with('inventories')->with('incomes')->orderBy('date', 'DESC')->get();
        return $treatments;
    }

    public function addHerbalPackages(Request $request)
    {
        //TODO: add stocks checking
        $herb_ids = [];
        $herb_units = [];

        foreach ($request->herb_details as $key => $herb_detail) {
            array_push($herb_ids, $herb_detail['id']);
            array_push($herb_units, $herb_detail['units']);
        }

        $treatment = new Treatment;
        $treatment->service_id = $request->service_id;
        $treatment->patient_id = $request->patient_id;
        $treatment->user_id = $request->user_id;
        $treatment->quantity = $request->quantity;
        if ($request->with_date) {
            $treatment->date = $request->date;
        }

        $treatment->save();
        foreach ($herb_ids as $key => $herb_id) {
            $treatment->inventories()->attach($herb_ids[$key], ['units' => $herb_units[$key]]);
        }

        if ($request->with_finance) {

            $income = new Income;

            $income->amount = $request->final_price * 100;
            $income->original_amount = $request->original_price * 100;
            //$income->treatment_id = $treatment_ids['id'];
            $income->patient_id = $request->patient_id;
            $income->user_id = $request->user_id;
            $income->discount = $request->discount;
            if ($request->with_date) {
                $income->date = $request->date;
            } else {
                $income->date = Carbon::today();
            }
            $income->service_id = $request->service_id;
            $income->payment_type_id = $request->payment_type;
            $income->description = $request->description;
            $treatment->incomes()->save($income);
        }


        return response()->json([
            'message' => 'Patient Treatment Has been added!'
        ], 200);
    }

    /**
     * @param $request
     */

    public function addServices(Request $request)
    {
        $service = new Treatment;
        $service->service_id = $request->service_id;
        $service->patient_id = $request->patient_id;
        $service->user_id = $request->user_id;
        $service->quantity = $request->quantity;
        if ($request->with_date) {
            $service->date = $request->date;
        } else {
            $service->date = Carbon::today();
        }
        $service->discount = $request->discount;
        $service->save();

        $service->inventories()->attach($request->id, ['units' => $request->unit]);

        if ($request->with_finance) {
            $income = new Income;

            $income->amount = $request->final_price * 100;
            $income->original_amount = $request->original_price * 100;
            $income->payment_type_id = $request->payment_type_id;
            $income->patient_id = $request->patient_id;
            $income->user_id = $request->user_id;
            $income->service_id = $request->service_id;
            $income->discount = $request->discount;
            $income->description = $request->description;

            if ($request->with_date) {
                $income->date = $request->date;
            } else {
                $income->date = Carbon::today();
            }

            $service->incomes()->save($income);
        }

        return response()->json([
            'message' => 'Patient Treatment Has Been Added!'
        ], 200);
    }
    /**
     * @param $request
     * recives the retail treatment details from the front end and store them into the database.
     * 
     */

    public function addRetail(Request $request)
    {
        //TODO: add check stocks before adding!
        $retail_ids = [];
        $retail_units = [];


        foreach ($request->retail_details as $key => $retail_detail) {
            array_push($retail_ids, $retail_detail['id']);
            array_push($retail_units, $retail_detail['units']);
        }


        $treatment = new Treatment;
        $treatment->service_id = $request->service_id;
        $treatment->patient_id = $request->patient_id;
        $treatment->user_id = $request->user_id;
        $treatment->quantity = 1;
        if ($request->with_date) {
            $treatment->date = $request->date;
        }

        $treatment->save();

        foreach ($retail_ids as $key => $retail_id) {
            $treatment->inventories()->attach($retail_ids[$key], ['units' => $retail_units[$key]]);
        }

        if ($request->with_finance) {
            $income = new Income;

            $income->amount = $request->final_price * 100;
            $income->original_amount = $request->original_price * 100;
            $income->payment_type_id = $request->payment_type_id;
            $income->patient_id = $request->patient_id;
            $income->user_id = $request->user_id;
            $income->service_id = $request->service_id;
            $income->discount = $request->discount;
            $income->description = $request->description;

            if ($request->with_date) {
                $income->date = $request->date;
            } else {
                $income->date = Carbon::today();
            }
            $treatment->incomes()->save($income);
        }

        return response()->json([
            'message' => 'Treatment Has Been Added Successfully!'
        ], 200);
    }

    public function addOther(Request $request)
    {
        $others_ids = [];
        $others_units = [];

        foreach ($request->others_details as $key => $others_detail) {
            array_push($others_ids, $others_detail['id']);
            array_push($others_units, $others_detail['units']);
        }

        $treatment = new Treatment;
        $treatment->service_id = $request->service_id;
        $treatment->patient_id = $request->patient_id;
        $treatment->user_id = $request->user_id;
        $treatment->quantity = 1;
        if ($request->with_date) {
            $treatment->date = $request->date;
        }
        $treatment->save();

        foreach ($others_ids as $key => $others_id) {
            $treatment->inventories()->attach($others_ids[$key], ['units' => $others_units[$key]]);
        };

        if ($request->with_finance) {
            $income = new Income;
            $income->amount = $request->final_price * 100;
            $income->original_amount = $request->original_price * 100;
            $income->payment_type_id = $request->payment_type;
            $income->patient_id = $request->patient_id;
            $income->user_id = $request->user_id;
            $income->service_id = $request->service_id;
            $income->discount = $request->discount;
            $income->description = $request->description;

            if ($request->with_date) {
                $income->date = $request->date;
            } else {
                $income->date = Carbon::today();
            }
            $treatment->incomes()->save($income);
        }

        return response()->json([
            'message' => 'Treatment Has Been Added!'
        ], 200);
    }


    public function updateHerb(Request $request)
    {
        $herb_ids = [];
        $herb_units = [];




        foreach ($request->inventories as $key => $herb_detail) {
            array_push($herb_ids, $herb_detail['id']);
            array_push($herb_units, $herb_detail['pivot']['units']);
        }
        //reconstructing inventory details for sync()
        //sync() required format [1=>['units']=>10]
        $units = array_map(function ($units) {
            return ['units' => $units];
        }, $herb_units);

        $updated_inventories = array_combine($herb_ids, $units);


        $treatment = Treatment::findOrFail($request->id);
        $treatment->quantity = $request->quantity;
        if ($request->with_date) {
            $treatment->date = $request->date;
        }

        if ($request->with_finance) {
            $income =  $request->incomes[0];

            $income['amount'] = $income['amount'] * 100;
            $income['original_amount'] = $income['original_amount'] * 100;
            $treatment->incomes()->update($income);
        }

        $treatment->inventories()->sync($updated_inventories);

        $treatment->save();

        return response()->json([
            'message' => "Treatment has been updated!"
        ], 200);
    }

    public function updateRetail(Request $request)
    {

        $retail_ids = [];
        $retail_units = [];



        foreach ($request->inventories as $key => $retail_detail) {
            array_push($retail_ids, $retail_detail['id']);
            array_push($retail_units, $retail_detail['pivot']['units']);
        }

        $units = array_map(function ($units) {
            return ['units' => $units];
        }, $retail_units);

        $updated_inventories = array_combine($retail_ids, $units);

        $retail = Treatment::findOrFail($request->id);
        $retail->quantity = $request->quantity;
        if ($request->with_date) {
            $retail->date = $request->date;
        }

        if ($request->with_finance) {

            $income = $request->incomes[0];

            $income['amount'] = $income['amount'] * 100;
            $income['original_amount'] = $income['original_amount'] * 100;
            $retail->incomes()->update($income);
        }

        $retail->inventories()->sync($updated_inventories);
        $retail->save();

        return response()->json([
            'message' => "Treatment has been updated!"
        ], 200);
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
        $treatment_detail = [];
        $treatment_id = $request[0]['treatment_id'];
        $prepare_update = TreatmentService::processUpdateTreatment($treatment_id);

        if ($prepare_update > 0) {
            $treatment = Treatment::findOrFail($treatment_id);

            foreach ($request->all() as $index => $other_detail) {
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
                'message' => "Treatment has been updated!"
            ], 200);
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
        $income = Income::where('treatment_id', $id)->delete();
        return response()->json([
            'message' => 'Treatment Has Been Deleted Successfully!'
        ], 200);
    }
}
