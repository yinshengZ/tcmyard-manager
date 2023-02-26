<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\File;
use App\Services\FileService;
use Illuminate\Support\Facades\Storage;
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
            $original_name = str_replace(" ","_", $request->file('file')->getClientOriginalName());
            $file_name = time().'_'.$original_name;
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

    }

    /**
     * Update patient files
     * @param Request $request
     * @return json response of updating result
     */
    public function update_patient_file(Request $request){
        return $request;
    }


    /**
     * Display the specific patient's files
     * @param int $id
     * @return json object of file info 
     */
    public function get_patient_files($id){
        $file_details=[];
        $files = File::where('patient_id',$id)->with('user')->get();
        foreach($files as $index=>$file){
            $file_detail =[];
            $file_detail['id']=$file->id;
            $file_detail['file_name']=  $file->original_name;
            $file_detail['url'] = url($file->file_path);
            $file_detail['description'] = $file->description;
            $file_detail['file_type']= $file->file_type;
            $fie_detail['created_at'] = $file->created_at;
            $file_detail['uploaded_by']=$file->user['nickname'];
            array_push($file_details,$file_detail);
        }
        return $file_details;
    }
    


 




    /**
     * Delete the file requested by user
     *
     * @param  int  $id
     * @return json response of deletion result
     */
    public function destroy($id)
    {
        $file = FileService::processFileList($id);

        return $file;
    }
}
