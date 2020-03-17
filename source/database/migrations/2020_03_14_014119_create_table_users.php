<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_users', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->string('user_code',56);
            $table->string('user_name', 128);
            $table->string('user_password', 256);
            $table->string('user_mail', 256);
            $table->string('user_phone', 256);
            $table->string('user_address', 256);
            $table->string('user_group_id', 256);
            $table->json('user_other_info');
            $table->string('user_member_created', 256);
            $table->string('user_member_updated', 256);
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
        Schema::dropIfExists('table_users');
    }
}
