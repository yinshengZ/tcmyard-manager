<?php
namespace App\Services;

use Illuminate\Support\Carbon;
use DateTime;



class Ultilities{

    public static function getDateFromWeek($year, $week){
        $date = Carbon::now();
        $date->setISODate($year,$week);
        
        $newDate = [
            "startOfWeek"=>$date->startOfWeek(),
            "endOfWeek"=>$date->endOfWeek()
        ];
        return $newDate;
    }



}






?>
