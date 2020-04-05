<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;

class ManageUsersController extends Controller
{
    public function index() {
        return [11111];
    }

    public function postUser(Request $request) {
        $dataForm = $request->all();
        $validator = Validator::make($dataForm, [
            'user_code' => 'bail|required|max:20',
            'user_name' => 'bail|required|max:255',
        ], [
            'user_code.required' => 'user_code.required',
            'user_code.max' => 'user_code.max',
            'user_name.required' => 'user_name.required',
            'user_name.max' => 'user_name.max',
        ]);

        if (!$validator->passes()) {
            $rawMessagesValdate = $validator->getMessageBag()->getMessages();
            $messages = [];
            foreach ($dataForm as $field => $value) {
                foreach ($rawMessagesValdate[$field] ?? [] as $message) {
                    $messages[] = $message;
                }
            }
            return response()->json($messages,402);
        }

        $isSaved = (new User())->saveUser($dataForm);
        return response()->json($isSaved);
    }

    public function getUsers() {
        $data = User::all();
        return response()->json($data);
    }
}
