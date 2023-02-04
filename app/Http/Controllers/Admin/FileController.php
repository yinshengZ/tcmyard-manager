<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\File;
use Illumiate\Support\Facades\Storage;
use Illuminate\Http\Request;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'file'=>'required'
        ]);

        $file = new File;
        if($request->file()){
            $file_name = time().'_'.$request->file('file')->getClientOriginalName();
            $file_path = $request->file('file')->storeAs('patient_files/'.$request->patient_id,$file_name,'public');
            $file->file_name = $file_name;
            $file->file_path = '/storage/'.$file_path;
            $file->file_type= $request->file('file')->getMimeType();
            $file->original_name = $request->file('file')->getClientOriginalName();
            $file->patient_id = $request->patient_id;
            $file->user_id = $request->user_id;
            $file->description = $request->description;
            $file->save();
        };

        $name = $request->file('file')->getClientOriginalName();
        $file_type=$request->file('file')->getMimeType();
        //return $request->file('file')->getClientOriginalExtension();
        //return $request->description;
        echo asset('storage/patient_files/1/1675272204_QQ图片20230110122711.jpg');
    }


    /**
     * Display the specific patient's files
     * @param int $id
     * @return json object of file info 
     */
    public function get_patient_files($id){
        $files = File::where('patient_id',$id);
        return $files;
    }
    


    /**
     * Display the patient's uploaded files
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
