<?php

namespace App\Http\Controllers;


use App\Models\Article;
use App\Models\Category;

class NewBlogController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::query()
            ->with([
                'category'
            ])
            ->orderBy('sort','desc')
            ->orderBy('id', 'desc')
            ->paginate(30);

        return view('newblog.index', compact('articles'));
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
//    public function archives()
//    {
//        $articles = Article::query()
//            ->with([
//                'category'
//            ])
//            ->orderBy('sort','desc')
//            ->orderBy('id', 'desc')
//            ->paginate(100);
//
//        return view('newblog.archives', compact('articles'));
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function article($id)
    {
        $article = Article::findOrFail($id);

        $article->increment("read_count");

        return view('newblog.article', compact('article'));
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        return view('newblog.about');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function salon()
    {
        return view('newblog.tech-salon');
    }

    public function category($id)
    {
        $category = Category::findOrFail($id);

        $articles = $category->article()
            ->orderBy('sort','desc')
            ->orderBy('id', 'desc')
            ->paginate(100);

        return view('newblog.archives', compact('articles', 'category'));
    }
}
