<?php
namespace App\Services;

use DB;

use App\Models\File;



class FileService {

    public static function processFileList($patient_id){
        $file = File::select(DB::raw('group_concat(id) as file_id'),DB::raw('group_concat(file_name) as file_name'),    
        DB::raw('group_concat(file_path) as file_path'),
        DB::raw('group_concat(original_name) as original_name'),'description','patient_id','user_id','created_at')
        ->where('patient_id',1)
        ->groupBy('description')
        ->get();

        //TODO: Data retrived and needs to reconstruct return array
        return $file;
    }
}





?>