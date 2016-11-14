<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Storage;
use App\Http\Requests;
use Input;

class UploadController extends Controller
{//
    public function imgEditor(){
        if (Input::hasFile('file')) {
            $file = Input::file('file');
            $realPath = $file->getRealPath();//临时文件的绝对路径
            $originalName = $file->getClientOriginalName();// 文件原名
            $ext = $file->getClientOriginalExtension();// 扩展名
            $size = $file->getSize();
            $type = $file->getMimeType();// image/jpeg

            // 上传文件
            $filename = date('YmdHis') . uniqid() . '.' . $ext;
            $bytes = Storage::disk('upload')->put(
                $filename,
                file_get_contents($realPath)
            );

            if(!$bytes){
                exit('保存文件失败！');
            }
            $link = '/uploads/'.$filename;
            return response()->json(compact('link'));

        }else{
            return response()->error('unauthorized', 401);
        }

    }
}
