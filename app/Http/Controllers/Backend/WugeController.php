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
            if ($request->filled('is_remit')) {
                $query->where('is_remit', "{$request->is_remit}");
            }

            if ($request->filled('mobile')) {
                $query->where('mobile', $request->mobile);
            }
        })->paginate();

        $is_remit = $request->is_remit;
        $mobile = $request->mobile;
        return view('backend.article.index', compact('bills', 'is_remit', 'mobile'));
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
}
