<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inform;
use Illuminate\Http\Request;

class InformController extends Controller
{
    public function getDtinforms(){
        $dtinforms = Inform::where('columnId', '=', 1)->get();
        return response()->success(compact('dtinforms'));
    }

    public function getLists(){
        $informs = Inform::all();
        return response()->success(compact('informs'));
    }
}
