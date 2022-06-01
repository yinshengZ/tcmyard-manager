<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->unsignedBigInteger('gender_id'); //gender table needs creating
            $table->string('postcode');
            $table->string('telephone');
            $table->string('email');
            $table->unsignedBigInteger('marital_status_id'); //marital_status table needs creating
            $table->string('occupation')->nullable();
            $table->boolean('hiv_status')->default(0);
            $table->text('past_history')->nullable();
            $table->text('current_issue');
            $table->unsignedBigInteger('allergies_id')->nullable(); //allergies needs creating
            $table->text('current_medication')->nullable();
            $table->date('date_of_birth');
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
        Schema::dropIfExists('patients');
    }
}
