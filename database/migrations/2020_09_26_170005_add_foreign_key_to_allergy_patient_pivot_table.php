<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAllergyPatientPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('allergy_patient', function (Blueprint $table) {
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('allergy_id')->references('id')->on('allergies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('allergy_patient', function (Blueprint $table) {
            
        });
    }
}
