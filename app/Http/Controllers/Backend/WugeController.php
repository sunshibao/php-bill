<?php


namespace App\Http\Controllers\Backend;


use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\ArticleTag;
use App\Models\Wuge;
use Illuminate\Http\Request;

class WugeController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $bills = tap(Wuge::latest(), function ($query) use ($request) {
            if ($request->filled('type')) {
                $query->where('type', "{$request->type}");
            }

            if ($request->filled('is_remit')) {
                $query->where('is_remit', "{$request->is_remit}");
            }

            if ($request->filled('express_num')) {
                $query->where('express_num','like', "%{$request->express_num}%");
            }
        })->paginate();
        $type = $request->type;
        $is_remit = $request->is_remit;
        $express_num = $request->express_num;
        return view('backend.article.index', compact('bills', 'type', 'is_remit', 'express_num'));
    }

    /**
     * @param Request $request
     * @return $this|\Illuminate\Http\RedirectResponse
     */
    public function wugeremit(Request $request)
    {
        $bill = Wuge::find($request->id);
        $bill->is_remit = 1;
        $bill->save();
        return redirect()->route('backend.wuge.index')->with('success', '已标记打款');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function wugeremark(Request $request)
    {
        $bill = Wuge::find($request->id);

        return view('backend.article.edit', compact('bill'));
    }

    /**
     * @param Request $request
     * @return $this|\Illuminate\Http\RedirectResponse
     */
    public function wugeupdate(Request $request)
    {
        $bill = Wuge::find($request->id);
        $bill->remark = $request->remark;
        $bill->save();

        return redirect()->route('backend.wuge.index')->with('success', '备注成功');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
