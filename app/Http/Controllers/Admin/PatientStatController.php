<?php

namespace App\Http\Controllers\admin;

use App\Models\Patient;
use App\Models\Income;
use DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;

class PatientStatController extends Controller
{
    public function get_custom_number_patients($request)
    {
        $patient = Patient::with('gender')->orderBy('created_at', 'DESC')->paginate($request);
        return $patient;
    }

    public function get_current_year_monthly_patients()
    {
        $patients = Patient::select([DB::raw("COUNT(id) as count"), DB::raw("date_joined as date_joined"), 'date_joined', 'first_name'])
            ->whereBetween('date_joined', [Carbon::now()->startOfYear(), Carbon::now()])
            ->groupBy(DB::raw('MONTH(date_joined)'))
            ->orderBy('date_joined', 'ASC')->get();
        return $patients;
    }

    public function get_most_patients_gender()
    {
        $gender = Patient::select('gender_id', DB::raw('count(*) as total'))->groupBy('gender_id')->orderBy('total', 'DESC')->with('gender')->get();

        return $gender;
    }

    public function get_most_patients_locale()
    {
        $locale = Patient::select('postcode', DB::raw("SUBSTRING_INDEX(postcode,' ',1) as locale"), DB::raw("count(SUBSTRING_INDEX(postcode,' ',1)) as total"))

            ->groupBy('locale')
            ->orderBy('total', 'DESC')
            ->get();
        return $locale;
    }

    public function get_patient_average_spending()
    {
        $patients = Patient::all()->count();
        $all_incomes = Income::sum('amount');

        return $all_incomes / $patients;
    }
}
