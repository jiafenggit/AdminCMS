<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inform;
use Illuminate\Http\Request;
use Input;

class InformController extends Controller
{
    /**
     * columnId
     * 1 = dtinform 交易动态
     * 2 = teaknowledge 茶知识
     * 3 =
     * 4 =
     * 5 =
     *
     *
     */
    //交易动态
    const dtinform = 1;
    //茶知识
    const teaknowledge = 2;
    //茶文化
    const teaculture = 3;
    //茶藏品
    const teacollection = 4;
    //通知公告
    const tradeannouncement = 5;
    //交易规则
    const traderule = 6;

    /* 交易动态 start */
    /**
     * Get all Dt informs.
     *
     * @return JSON
     */
    public function getDtinforms(){
        $dtinforms = Inform::where('columnId', '=', self::dtinform)->get();
        return response()->success(compact('dtinforms'));
    }

    /**
     * Create new dt inform.
     *
     * @return JSON
     */
    public function postDtinforms()
    {
        $dtinform = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => self::dtinform
        ]);

        return response()->success(compact('dtinform'));
    }

    /**
     * Get system Dtinform referenced by id.
     *
     * @param int Dtinform ID
     *
     * @return JSON
     */
    public function getDtinformsShow($id)
    {
        $dtinform = Inform::find($id);

        return response()->success($dtinform);
    }

    /**
     * Update system Dtinform.
     *
     * @return JSON
     */
    public function putDtinformsShow()
    {
        $informForm = Input::get('data');
        $affectedRows = Inform::where('id', '=', intval($informForm['id']))->update($informForm);
        if($affectedRows>0){
            return response()->success($informForm);
        }else{
            return response()->error($informForm);
        }
    }

    /**
     * Delete system Dtinform referenced by id.
     *
     * @param int Dtinform ID
     *
     * @return JSON
     */
    public function deleteDtinforms($id)
    {
        Inform::destroy($id);

        return response()->success('success');
    }
    /* 交易动态 end */

    /* 关于茶 start */
    /* 茶知识 start */
    /**
     * Get all Teaknowledge.
     *
     * @return JSON
     */
    public function getTeaknowledges(){
        $teaknowledges = Inform::where('columnId', '=', self::teaknowledge)->get();
        return response()->success(compact('teaknowledges'));
    }

    /**
     * Create new Teaknowledge.
     *
     * @return JSON
     */
    public function postTeaknowledges()
    {
        $teaknowledge = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => self::teaknowledge
        ]);

        return response()->success(compact('teaknowledge'));
    }

    /**
     * Get system Teaknowledge referenced by id.
     *
     * @param int Teaknowledge ID
     *
     * @return JSON
     */
    public function getTeaknowledgesShow($id)
    {
        $teaknowledge = Inform::find($id);

        return response()->success($teaknowledge);
    }

    /**
     * Update system Teaknowledge.
     *
     * @return JSON
     */
    public function putTeaknowledgesShow()
    {
        $teaknowledgeForm = Input::get('data');
        $affectedRows = Inform::where('id', '=', intval($teaknowledgeForm['id']))->update($teaknowledgeForm);
        if($affectedRows>0){
            return response()->success($teaknowledgeForm);
        }else{
            return response()->error($teaknowledgeForm);
        }
    }

    /**
     * Delete system Teaknowledge referenced by id.
     *
     * @param int Teaknowledge ID
     *
     * @return JSON
     */
    public function deleteTeaknowledges($id)
    {
        Inform::destroy($id);

        return response()->success('success');
    }
    /* 茶知识 end */
    /* 茶文化 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTeacultures(){
        $teacultures = Inform::where('columnId', '=', self::teaculture)->get();
        return response()->success(compact('teacultures'));
    }

    /**
     * Create new TeaCulture.
     *
     * @return JSON
     */
    public function postTeacultures()
    {
        $teaculture = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => self::teaculture
        ]);

        return response()->success(compact('teaculture'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTeaculturesShow($id)
    {
        $teaculture = Inform::find($id);

        return response()->success($teaculture);
    }

    /**
     * Update system TeaCulture.
     *
     * @return JSON
     */
    public function putTeaculturesShow()
    {
        $teacultureForm = Input::get('data');
        $affectedRows = Inform::where('id', '=', intval($teacultureForm['id']))->update($teacultureForm);
        if($affectedRows>0){
            return response()->success($teacultureForm);
        }else{
            return response()->error($teacultureForm);
        }
    }

    /**
     * Delete system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function deleteTeacultures($id)
    {
        Inform::destroy($id);

        return response()->success('success');
    }
    /* 茶文化 end */
    /* 关于茶 end */

    /* 藏品展示 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTeacollections(){
        $teacollections = Inform::where('columnId', '=', self::teacollection)->get();
        return response()->success(compact('teacollections'));
    }

    /**
     * Create new TeaCulture.
     *
     * @return JSON
     */
    public function postTeacollections()
    {
        $teacollection = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => self::teacollection
        ]);

        return response()->success(compact('teacollection'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTeacollectionsShow($id)
    {
        $teacollection = Inform::find($id);

        return response()->success($teacollection);
    }

    /**
     * Update system TeaCulture.
     *
     * @return JSON
     */
    public function putTeacollectionsShow()
    {
        $teacollectionForm = Input::get('data');
        $affectedRows = Inform::where('id', '=', intval($teacollectionForm['id']))->update($teacollectionForm);
        if($affectedRows>0){
            return response()->success($teacollectionForm);
        }else{
            return response()->error($teacollectionForm);
        }
    }
    public function putTeacollectionimgsShow()
    {
        $teacollectionForm = Input::get('data');
        dd($teacollectionForm);
        $affectedRows = Inform::where('id', '=', intval($teacollectionForm['id']))->update($teacollectionForm);
        if($affectedRows>0){
            return response()->success($teacollectionForm);
        }else{
            return response()->error($teacollectionForm);
        }
    }



    /**
     * Delete system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function deleteTeacollections($id)
    {
        Inform::destroy($id);

        return response()->success('success');
    }
    /* 藏品展示 end */

    /* 信息中心 start */
    /* 通知公告 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTradeannouncements(){
        $tradeannouncements = Inform::where('columnId', '=', self::tradeannouncement)->get();
        return response()->success(compact('tradeannouncements'));
    }

    /**
     * Create new TeaCulture.
     *
     * @return JSON
     */
    public function postTradeannouncements()
    {
        $tradeannouncement = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => self::tradeannouncement
        ]);

        return response()->success(compact('tradeannouncement'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTradeannouncementsShow($id)
    {
        $tradeannouncement = Inform::find($id);

        return response()->success($tradeannouncement);
    }

    /**
     * Update system TeaCulture.
     *
     * @return JSON
     */
    public function putTradeannouncementsShow()
    {
        $tradeannouncementForm = Input::get('data');
        $affectedRows = Inform::where('id', '=', intval($tradeannouncementForm['id']))->update($tradeannouncementForm);
        if($affectedRows>0){
            return response()->success($tradeannouncementForm);
        }else{
            return response()->error($tradeannouncementForm);
        }
    }

    /**
     * Delete system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function deleteTradeannouncements($id)
    {
        Inform::destroy($id);

        return response()->success('success');
    }
    /* 通知公告 end */

    /* 通知公告 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTraderules(){
        $traderules = Inform::where('columnId', '=', self::traderule)->get();
        return response()->success(compact('traderules'));
    }

    /**
     * Create new TeaCulture.
     *
     * @return JSON
     */
    public function postTraderules()
    {
        $traderule = Inform::create([
            'title' => Input::get('title'),
            'content' => Input::get('content'),
            'columnId' => self::traderule
        ]);

        return response()->success(compact('$traderule'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTraderulesShow($id)
    {
        $traderule = Inform::find($id);

        return response()->success($traderule);
    }

    /**
     * Update system TeaCulture.
     *
     * @return JSON
     */
    public function putTraderulesShow()
    {
        $traderuleForm = Input::get('data');
        $affectedRows = Inform::where('id', '=', intval($traderuleForm['id']))->update($traderuleForm);
        if($affectedRows>0){
            return response()->success($traderuleForm);
        }else{
            return response()->error($traderuleForm);
        }
    }

    /**
     * Delete system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function deleteTraderules($id)
    {
        Inform::destroy($id);

        return response()->success('success');
    }
    /* 通知公告 end */

    /* 信息中心 end */
}
