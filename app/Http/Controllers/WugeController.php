<?php

namespace App\Http\Controllers;

use App\Http\Requests\Wuge\CreateRequest;
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
        return view('Wuge');
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function wugesearch()
    {
        return view('wugesearch');
    }

}
