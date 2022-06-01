<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Patient;
use App\Models\Record;
use App\Models\Allergy;
use App\Models\Symptom;
use App\Models\Gender;
use Carbon\Carbon;


class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /* 
        $patients = \App\Patient::first();
        $allergies = \App\Allergy::all();
        
        $patients->allergy()->sync($allergies); */
        
        /* $patients = Patient::find(1);
        $patient = $patients->Allergy()->get();
        dd($patient); */
        $patients = Patient::with('gender')->with('marital_status')->with('allergy')
        ->get();

        return $patients;

        


    }
  
        
    


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      //dd($request);  
      $this->validate($request,array(
        'first_name'=>'required|max:255',
        'last_name'=>'required|max:255',
        'gender_id'=>'required|integer',
        'date_of_birth'=>'required|date',
        'postcode'=>'regex:/^[a-zA-Z0-9\s]+$/',
        'telephone'=>'numeric',
        'email'=>'email|unique:patients',
        'marital_status_id'=>'required|integer',
        'occupation'=>'string|nullable',
        'hiv'=>'boolean',
        'past_history'=>'string|nullable',
        'current_issue'=>'string|nullable',
        'allergies'=>'array|nullable',
        'current_medication'=>'string|nullable',
        'symptoms'=>'array|nullable'
      ));

      $patient = new Patient;
      $patient->first_name =$request->first_name;
      $patient->last_name = $request->last_name;
      $patient->gender_id = $request->gender_id;
      $patient->date_of_birth = $request->date_of_birth;
      $patient->postcode = $request->postcode;
      $patient->telephone = $request->telephone;
      $patient->email = $request->email;
      $patient->marital_status_id=$request->marital_status_id;
      $patient->occupation = $request->occupation;
      $patient->hiv_status = $request->hiv;
      $patient->past_history = $request->past_history;
      $patient->current_issue = $request->current_issue;
      $patient->current_medication = $request->current_medication;

      $patient->save();

      $patient->Allergy()->sync($request->allergies);
      $patient->symptoms()->sync($request->symptoms);      

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $patients = Patient::with('gender')->with('marital_status')->with('allergy')
        ->with('symptoms')->with('incomes')->find($id);

        return $patients;
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

    

    public function search_patient(Request $query){       
       
      $this->validate($query,array(
            'input'=>'required|max:255',
            'option'=>'required'
        ));
        
        $input = $query->input;
        $option = $query->option;
       $id;
        $patients;
        $date;      
       if($option=="name"){
        $id= Patient::where('first_name','LIKE',$input)->orWhere('last_name','Like',$input)->get()->pluck('id');
       }else if($option=="email"){
           $id=Patient::where('email','LIKE',$input)->get()->pluck('id');
       }else if($option=="gender"){
           $gender_id= Gender::select('id')->where('gender',$input)->value('id');
           $id= Patient::where('gender_id',$gender_id)->get()->pluck('id');
       }else if($option=="symptom"){
           $data = Symptom::where('symptom','LIKE',$input)->with('patients')->get();
           $id= $data->pluck('patients')->collapse()->pluck('id');
       }else if($option=="allergy"){
           $data=Allergy::where('allergies','LIKE',$input)->with('patients')->get();
           $id=$data->pluck('patients')->collapse()->pluck('id');
       }else if($option=="date"){             
           $date = Carbon::parse($input);
           $id = Patient::whereDate('created_at',Carbon::parse($input))->get()->pluck('id');           
       }

       $patients = Patient::whereIn('id',$id)->with('gender')->with('marital_status')->with('allergy')->with('symptoms')->orderBy('first_name')->get();
     
       return $patients;
     
      
      
    }   
       
}
