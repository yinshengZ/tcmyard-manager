<?php

namespace App\Http\Controllers\admin;

use App\Models\Patient;
use DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PatientStatController extends Controller
{
    public function get_most_patients_gender()
    {
        $gender = Patient::select('gender_id', DB::raw('count(*) as total'))->groupBy('gender_id')->orderBy('total', 'DESC')->with('gender')->get();

        return $gender;
    }
}
