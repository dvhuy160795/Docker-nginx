<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Attachment;
class AttachmentController extends Controller
{
    public function getAttachment() 
    {
    	$attach = new Attachment;
    	$attach->tags = "aaaa";
    	$attach->save();
    	echo "get Attachment";
    }
}
