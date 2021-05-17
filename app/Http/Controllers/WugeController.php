<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Backend\ArticleController;
use App\Http\Requests\Backend\Article\CreateRequest;
use App\Models\Article;

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
    public function submit(CreateRequest $request)
    {
        $article = Article::create(array_merge($this->basicFields($request), ['user_id' => Auth::id()]));

        if ($request->filled('tags')) {
            $this->storeArticleTags($article, $request->tags);
        }

        return  redirect()->route('backend.article.index')->with('success', '文章添加成功');
    }

}
