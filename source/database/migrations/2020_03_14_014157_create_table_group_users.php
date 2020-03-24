<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableGroupUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_group_users', function (Blueprint $table) {
            $table->bigIncrements('group_user_id');
            $table->string('group_user_code',56);
            $table->string('group_user_name', 128);
            $table->json('group_user_permission');
            $table->string('user_member_created', 256);
            $table->string('user_member_updated', 256);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_group_users');
    }
}
