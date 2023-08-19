<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inventory extends Model
{
    use HasFactory;
    //use SoftDeletes;
    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'categories_id');
    }

    public function treatment_details()
    {
        return $this->belongsTo('App\Models\TreatmentDetails', 'inventory_id', 'id');
    }
}
