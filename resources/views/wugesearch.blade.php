<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="format-detection" content="telphone=no">
    <meta name="renderer" content="webkit">
    <link rel="shortcut icon" type="image/x-icon" href="https://fanqier.cn/static/img/logo/favicon.ico">
    <link rel="icon" sizes="any" mask="" href="https://fanqier.cn/static/img/logo/favicon.ico">
    <title>五哥报单系统</title>

    <link rel="stylesheet" href="{{ asset('wuge/css/chunk-common.1cb400fcc3a8.css') }}">
    <link rel="stylesheet" href="{{ asset('wuge/css/1.8a9c42f34f96.css') }}">
    <link rel="stylesheet" href="{{ asset('wuge/css/70.d66fdb592b5c.css') }}">

    <script charset="utf-8" src="{{ asset('wuge/js/70.9871b33ebf72382e2681.js') }}"></script>
</head>
<body>
<div id="app">
    <div data-v-1819b974="" class="query-page">
        <section data-v-1819b974="" class="ps-scoller open-query-get get-query ps ps--theme_default"
                 data-ps-id="b786edfa-91a8-62c3-6ef3-77c9fa4d390e">

            <div data-v-1819b974="">
                <div data-v-1819b974="" class="open-query-enter"><h2 data-v-1819b974="" class="title">五哥报单系统</h2>
                    <div data-v-1819b974="" class="enter-base-content">
                        <hr data-v-1819b974="" style="">
                        <div data-v-1819b974="" class="query-enter-content" style=""><span data-v-1819b974="">请录入任一查询条件，查询符合条件的回复（文本精确查询）</span>
                            <div data-v-1819b974="">
                                <form class="navbar-form navbar-right" action="{{ route('wugesearch') }}" method="get">
                                <div data-v-eae20abc="" data-v-1819b974="">
                                    <div data-v-eae20abc="" class="condition-content">
                                        <div data-v-eae20abc="" class="query-item"><span data-v-eae20abc=""
                                                                                         class="query-item-type">手机号(特殊情况联系)</span>
                                            <div data-v-eae20abc="" class="query-content query-text query-textarea">
                                                <div data-v-eae20abc="" class="pre"></div>
                                                <textarea data-v-eae20abc="" type="text" name="mobile"
                                                          class="open-query-password">{{$mobile}}</textarea></div>
                                        </div>
                                    </div>
                                    <div data-v-eae20abc="" class="query-button">
                                        <button data-v-eae20abc="" type="submit" class="mui-button primary conf-qr">查询</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                @if($articles)
                <div data-v-1819b974="" class="result-start">
                    <div data-v-37d243da="" data-v-1819b974="" class="query-result-show">
                        <div data-v-37d243da="" class="result-content">
                            <section data-v-37d243da=""
                                     class="ps-scoller search-data-scroll ps ps--theme_default ps--active-y"
                                     data-ps-id="e1dfc8e2-adea-150d-1492-1788dc359db8" style="height: 456px;">
                                <div data-v-37d243da="" class="records-container">
                                    @foreach ($articles as $k=>$article)
                                    <div data-v-37d243da="">
                                        <div data-v-37d243da="" class="records-ele">
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left list-index">{{$k+1}}</div>
                                                <div data-v-37d243da="" class="right text-right"></div>
                                            </div>
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left">提交时间</div>
                                                <div data-v-37d243da="" class="right"><span data-v-e27b4fe0=""
                                                                                            data-v-37d243da=""
                                                                                            style="white-space: pre-line;">{{$article->created_at}}</span>
                                                </div>
                                            </div>
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left">产品名称</div>
                                                <div data-v-37d243da="" class="right"><span data-v-e27b4fe0=""
                                                                                            data-v-37d243da=""
                                                                                            style="white-space: pre-line;">{{$article->product}}</span>
                                                </div>
                                            </div>
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left">微信昵称</div>
                                                <div data-v-37d243da="" class="right"><span data-v-e27b4fe0=""
                                                                                            data-v-37d243da=""
                                                                                            style="white-space: pre-line;">{{$article->wx_name}}</span>
                                                </div>
                                            </div>
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left">支富宝账号</div>
                                                <div data-v-37d243da="" class="right"><span data-v-e27b4fe0=""
                                                                                            data-v-37d243da=""
                                                                                            style="white-space: pre-line;">{{$article->alipay_num}}</span>
                                                </div>
                                            </div>
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left">支富宝真实姓名</div>
                                                <div data-v-37d243da="" class="right"><span data-v-e27b4fe0=""
                                                                                            data-v-37d243da=""
                                                                                            style="white-space: pre-line;">{{$article->alipay_name}}</span>
                                                </div>
                                            </div>
                                            <div data-v-37d243da="" class="field">
                                                <div data-v-37d243da="" class="left">备注</div>
                                                <div data-v-37d243da="" class="right"><span data-v-e27b4fe0=""
                                                                                            data-v-37d243da=""
                                                                                            style="white-space: pre-line;">{{$article->remark}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                @else
                    <div data-v-1819b974="" class="err-query" style="display: none;">
                        未查到相关信息...
                    </div>
                @endif
            </div>

            <div data-v-1819b974="" class="loading" style="display: none;"></div>
            <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                <div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
            </div>
            <div class="ps__scrollbar-y-rail" style="top: 0px; right: 0px; height: 946px;">
                <div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
            </div>
        </section>
    </div>
</div>
</div>
</body>
</html>
