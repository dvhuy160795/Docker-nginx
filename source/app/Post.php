<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	public $table = "post";
    public function getPosts() 
    {
    	$res = $this->get();
    	return $res;
    }
}
