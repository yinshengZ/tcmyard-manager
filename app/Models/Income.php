<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Income extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function patient(){
        return $this->belongsTo('App\Models\Patient','patient_id');
    }

    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }
    public function income_type(){
        return $this->belongsTo('App\Models\IncomeType','income_type_id');
    }
}
