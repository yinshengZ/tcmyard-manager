<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Medication;
use DB;

class MedicationController extends Controller
{
    /**
     * get all medications in the database
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $medications = Medication::all();
        return $medications;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $medication = new Medication;
        $medication->medication = $request->medication;
        $medication->save();

        return response()->json([
            'data'=>'Medication has been added successfully!',
            'status_code'=>200
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $medication = Medication::find($id);
       return $medication;
       
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
