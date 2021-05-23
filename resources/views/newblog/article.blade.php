@inject('systemPresenter', 'App\Presenters\SystemPresenter')

@extends('newblog.app')

@section('left')
<div class="page-type-post">
    <nav class="navbar navbar-default g-navbar-box hidden-print" id="Js_page-navbar">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target=".navbar-collapse">
            <span class="icon-bar">
            </span>
                <span class="icon-bar">
            </span>
                <span class="icon-bar">
            </span>
            </button>
            <a class="navbar-brand" href="{{ url('/')}}" title="孙世宝的博客"
               target="_self">
                孙世宝的博客
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right" id="JS_nav_list">
                <li class="menu-item menu-item-home">
                    <a class="menu-item-link" href="{{ url('/')}}" target="_self" title="查看最新文章">
                        最新文章
                    </a>
                </li>
                <li class="menu-item menu-item-archive">
                    <a class="menu-item-link" href="{{ url('newblog/category/2')}}" target="_self"
                       title="查看文章存档内容">
                        文章存档
                    </a>
                </li>
                <li class="menu-item menu-item-salon">
                    <a class="menu-item-link" href="{{ url('newblog/tech-salon')}}" target="_self"
                       title="了解技术沙龙">
                        技术沙龙
                    </a>
                </li>
                <li class="menu-item menu-item-about">
                    <a class="menu-item-link" href="{{ url('newblog/about')}}" target="_self"
                       title="了解更多关于我们的事情">
                        关于我们
                    </a>
                </li>
            </ul>
        </div>
        <div class="navbar-bottom">
            <p class="copyright">
                © 2019 孙世宝的博客
            </p>
            <p class="copyright">
                All rights reserved.
            </p>
        </div>
    </nav>
</div>
@endsection

@section('content')

<div class="container-fluid page-type-post page-type-conetnt" id="J_main-container">
    <div class="row">
        <div class="col-md-12">
            <div class="post-container"><h1 class="post-title"><a
                        href="{{ route('newblog/article',['id' => $article->id]) }}" rel="bookmark">{!! $article->title !!}</a>
                </h1>
                <div class="meta-box"><span class="m-post-date"><i class="fa fa-calendar-o"></i>{{ date('Y年m月d日', strtotime($article->created_at)) }}</span>
                    <span class="m-post-nick">作者: 孙世宝</span>
                    <span class="m-post-reading"><i class="fa fa-hourglass-start"></i> {{ $article->read_count }} views</span></div>
                <div class="post-content">
                    <div class="content">
                        {!! $article->html_content !!}
                    </div>
                </div>
                <div class="meta-box post-bottom-meta-box hidden-print">
                    <span class="tag-links"><i class="fa fa-tags" aria-hidden="true"></i>
                        <a href="https://github.com/sunshibao" rel="tag">GitHub</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
