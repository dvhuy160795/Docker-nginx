<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MaintainController extends Controller
{
    public function index() {
        return view("maintain.index");
    }
}
