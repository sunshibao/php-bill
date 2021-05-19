<?php

namespace App\Http\Controllers;

use App\Http\Requests\Wuge\CreateRequest;
use App\Models\Article;
use App\Models\Wuge;
use Illuminate\Http\Request;

class WugeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('wuge');
    }

    /**
     * @param CreateRequest $request
     * @return $this|\Illuminate\Http\RedirectResponse
     */
    public function store(CreateRequest $request)
    {
        Wuge::create($this->basicFields($request));
        return redirect()->back()->with('success', '操作成功');
    }


    private function basicFields(Request $request)
    {
        return array_merge($request->all());
    }

    /**
     * @param CreateRequest $request
     * @return $this|\Illuminate\Http\RedirectResponse
     */
    public function search(Request $request)
    {
        $articles = Wuge::where('mobile', '=', "{$request->mobile}")->orderBy('created_at', 'desc')->paginate(100);
        $mobile = $request->mobile;
        return view('wugesearch', compact('articles', 'mobile'));
    }


}
