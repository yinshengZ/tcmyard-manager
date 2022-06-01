<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\IncomeType;

class IncomeTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $income_types = IncomeType::all();
       return $income_types;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,array(
            'income_type'=>'required|max:255|unique:App\Models\IncomeType'
        ));
        $income_type = new IncomeType;
        $income_type->income_type = $request->income_type;
        $income_type->save();
        return response()->json(['message'=>"$request->income_type income type has been added!"], 200);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $incomeTypeDetail = Incometype::find($id);
       return $incomeTypeDetail;
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
        $income_type = IncomeType::find($id);
        $income_type->income_type = $request->income_type;
        $income_type->save();

        return "Income type has been updated!";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $incomeType=IncomeType::find($id);
        $incomeType->delete();
        return "Income Type Has Been Deleted!";
    }
}
