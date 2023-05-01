<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\PaymentMethod;

class PaymentMethodController extends Controller
{
    /**
     * @return all payment methods
     */
    public function index(){
        $payment_methods = PaymentMethod::select('id','payment_type')->get();
        return $payment_methods;
    }
}
