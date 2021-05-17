@inject('systemPresenter', 'App\Presenters\SystemPresenter')

@extends('default.page')

@section('title', $systemPresenter->checkReturnValue('title', $page->title))

@section('description', $systemPresenter->checkReturnValue('seo_desc', $page->desc))

@section('keywords', $systemPresenter->checkReturnValue('seo_keyword', $page->keyword))

@section('style')
    <link rel="stylesheet" href="{{ asset('share.js/css/share.min.css') }}">
@endsection

@section('header-text')
    <div class="text-inner">
        <div class="row to-animate fadeInUp animated">
            <div class="col-md-12">
                <h3 class="color-white">
                    {{ $page->title }}
                </h3>

                <p class="color-white m-t-25">
                    {{ $page->desc }}
                </p>
            </div>
        </div>
    </div>
@endsection

@section('content')
    <div class="markdown-preview" style="padding:0;">
        {!! $page->html_content !!}
    </div>

    <div style="margin-top:20px;">
        <div id="share" class="social-share"></div>
    </div>
    <!-- 评论插件 -->
    @include('default.comment.index', [
        'commentId' => "page-".$page->id,
        'commentTitle' => $page->title,
        'commentUrl' => Request::getUri()
    ])
@endsection

@section('script')
    <script src="{{ asset('share.js/js/jquery.share.min.js') }}"></script>

    <script>
        $(function(){
            $('#share').share({sites: ['qzone', 'qq', 'weibo','wechat']});
        });
    </script>

@endsection
