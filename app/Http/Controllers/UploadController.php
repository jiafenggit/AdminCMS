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
//        dd(111);
//        Input::get('key');
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

            dd($bytes);


            // 使用我们新建的uploads本地存储空间（目录）
//            Input::file('name')->move($destinationPath, $fileName);
//            $bool = Storage::disk('uploads')->put($filename, file_get_contents($realPath));

//// 移动一个已上传的文件
//            Input::file('name')->move($destinationPath);
//// 移动一个已上传的文件，并设置新的名字
//            Input::file('name')->move($destinationPath, $fileName);
//
//            // 文件是否上传成功
//            if ($file->isValid()) {
//                // 获取文件相关信息
//                $originalName = $file->getClientOriginalName(); // 文件原名
//                $ext = $file->getClientOriginalExtension();     // 扩展名
//                $realPath = $file->getRealPath();   //临时文件的绝对路径
//                $type = $file->getClientMimeType();     // image/jpeg
//

//            }
        }
    }

    public function getimgEditor(){
        dd(111);
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
