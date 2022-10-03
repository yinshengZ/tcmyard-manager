<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incomes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('amount');
            $table->unsignedBigInteger('income_type_id');
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('treatment_id');
            $table->unsignedBigInteger('service_id');
            $table->unsignedTinyInteger('discount');
            $table->longtext('description');
            $table->unsignedBigInteger('quantity');
            $table->softDeletes('deleted_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('incomes');
    }
}
