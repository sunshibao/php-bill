<!DOCTYPE html>
<html lang="en" dir="ltr" class=" theme-united">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="author" content="664588619@qq.com">
    <script type="text/javascript" async="" src="{{ asset('style/analytics.js') }}"></script>
    <script type="text/javascript" async="" src="{{ asset('style/js.js') }}"></script>
    <script type="text/javascript" async="" src="{{ asset('style/analytics.js') }}"></script>
    <script type="text/javascript" async="" src="{{ asset('style/archive.js') }}"></script>
    <script type="text/javascript" async="" src="{{ asset('style/post.js') }}"></script>
    <script type="text/javascript" async="" src="{{ asset('style/salon.js') }}"></script>
    <script type="text/javascript" async="" src="{{ asset('style/about.js') }}"></script>
    <script src="{{ asset('style/hm.js') }}"></script>
    <script async="" src="{{ asset('style/js(1).js') }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-158867676-1');
    </script>
    <title>孙世宝的博客</title>
    <link rel="stylesheet" href="{{ asset('style/common.css') }}">
    <link rel="stylesheet" href="{{ asset('style/index.css') }}">
    <link rel="stylesheet" href="{{ asset('style/archive.css') }}">
    <link rel="stylesheet" href="{{ asset('style/post.css') }}">
    <link rel="stylesheet" href="{{ asset('style/salon.css') }}">
    <link rel="stylesheet" href="{{ asset('style/about.css') }}">

    <script>
        top != self && top.host != self.host && (top.location = self.location);
        (function (d) {
            d.className = d.className.replace(/\bno-js/, '');
        })(document.documentElement);
        var $CONFIG = {
            'data': {}
        };
    </script>
    <script src="{{ asset('style/zepto.min.js') }}"></script>
    <script src="{{ asset('style/common.js') }}"></script>
</head>
<body class="page page-type-page">

@yield('left')

@yield('content')

@extends('newblog.footer')

</body>
</html>
