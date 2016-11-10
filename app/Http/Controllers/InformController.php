<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inform;
use Illuminate\Http\Request;
use Input;

class InformController extends Controller
{
    public function getDtinforms(){
        $dtinforms = Inform::where('columnId', '=', 1)->get();
        return response()->success(compact('dtinforms'));
    }

    /**
     * Create new user role.
     *
     * @return JSON
     */
    public function postDtinforms()
    {
        $dtinforms = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => 1,
        ]);

        return response()->success(compact('dtinforms'));
    }
}
