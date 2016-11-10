<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewController extends Controller
{
    public function getLists(){
//        $newsObj = new News();
//        $news = $newsObj->getDtNewsLists();

        $news = News::all();
        return response()->success(compact('news'));
    }

    public function getDtlists()
    {
        $news = News::all();
        return response()->success(compact('news'));
    }

    public function dtlists(){
//        $newsObj = new News();
//        $news = $newsObj->getDtNewsLists();
dd(111);
        $news = News::all();
        return response()->success(compact('news'));
    }
}
