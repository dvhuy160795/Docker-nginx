<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
	public function index(){
    	return view('home.index');
    }

    public function getPosts(){
    	return (new Post())->getPosts();
    }

    public function addPost($request){
    	var_dump($request);die;
    }
}
