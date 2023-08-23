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
        $treatment_details = TreatmentService::processSingleTreatment($id);

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

            $income->amount = $request->final_price;
            $income->original_amount = $request->original_price;
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

            $income->amount = $request->final_price;
            $income->original_amount = $request->original_price;
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

            $income->amount = $request->final_price;
            $income->original_amount = $request->original_price;
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
            $income->amount = $request->final_price;
            $income->original_amount = $request->original_price;
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




    /*     public function addOther(Request $request)
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
        $others->service_id = $request->service_id;
        $others->patient_id = $request->patient_id;
        $others->user_id = $request->user_id;
        $others->quantity = $quantity;
        $others->discount = $request->discount;
        if ($request->with_date) {
            $others->date = $request->date;
        } else {
            $others->date = Carbon::today();
        }

        $others->treatment_details = json_encode($request->others_details);
        $others->save();

        //grab the newly added treatment ID
        $treatment_id = Treatment::select('id')->where('service_id', 4)->latest()->first();

        foreach ($request->others_details as $others_detail) {
            $treatment_handler = new TreatmentDetails;
            $treatment_handler->treatment_id = $treatment_id->id;
            $treatment_handler->inventory_id = $others_detail['id'];
            $treatment_handler->patient_id = $request->patient_id;
            $treatment_handler->user_id = $request->user_id;
            $treatment_handler->units = $others_detail['units'];
            if ($request->with_date) {
                $treatment_handler->date = $request->date;
            } else {
                $treatment_handler->date = Carbon::today();
            }
            $treatment_handler->quantity = $quantity;
            $treatment_handler->save();
        }



        if ($request->with_finance) {
            $finance = new Income;
            $finance->amount = $request->final_price;
            $finance->original_amount = $request->original_price;
            $finance->payment_type_id = $request->payment_type;
            $finance->patient_id = $request->patient_id;
            $finance->user_id = $request->user_id;
            $finance->treatment_id = $treatment_id->id;
            $finance->service_id = $request->service_id;
            $finance->discount = $request->discount;
            if ($request->with_date) {
                $finance->date = $request->date;
            } else {
                $finance->date = Carbon::today();
            }

            $finance->save();
        }



        return response()->json([
            'message' => 'Treatment Has Been Added Successfully!'
        ], 200);
    } */

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
