<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreatmentDetails extends Model
{
    use HasFactory;

    public function treatment(){
        return $this->belongsTo('App\Models\Treatment','treatment_id');
    }
}
