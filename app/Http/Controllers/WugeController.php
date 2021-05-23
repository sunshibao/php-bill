<?php

namespace App\Http\Controllers;

use App\Http\Requests\Wuge\CreateRequest;
use App\Models\User;
use App\Models\Wuge;
use Illuminate\Http\Request;
use Storage;

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

        $data = [
            'alipay_qrcode' => $this->uploadAlipayQrcode($request),
        ];
        Wuge::create(array_merge($request->all(), $data));
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

    /**
     * @param Request $request
     * @return string
     */
    private function uploadAlipayQrcode(Request $request)
    {
        $url = '';
        if ($request->hasFile('alipay_qrcode')
            && $request->file('alipay_qrcode')->isValid()
            && in_array($request->alipay_qrcode->extension(), ["png", "jpg", "jpeg", "gif"])
        ) {

            $path = $request->alipay_qrcode->store('avatars', config('blog.disk'));
            $url = Storage::disk(config('blog.disk'))->url($path);
        }
        return $url;
    }

}
