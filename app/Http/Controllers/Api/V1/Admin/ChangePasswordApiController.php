<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Resources\Admin\UserResource;
use Gate;
use Illuminate\Http\Request;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class ChangePasswordApiController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'new_password' => ['required'],
            'new_confirm_password' => ['same:new_password'],
        ]);

        User::find(auth()->user()->id)->update(['password'=> Hash::make($request->new_password)]);

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
