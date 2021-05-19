<?php

return [
    'disk' => env('BLOG_DISK', 'qiniu'),
    'system_key' => [
        'blog_name',
        'motto',
        'title',
        'seo_keyword',
        'seo_desc',
        'icp',
        'github_url',
        'weibo_url',
        'disqus_short_name',
        'comment_plugin',
        'statistics_script'
    ],
    'menu' => [
        [
            'tree_title' => [
                'icon' => 'fa fa-files-o',
                'name' => '报单'
            ],
            'backend.wuge.index' => [
                'icon' => '',
                'name' => '报单管理'
            ]
        ]
//        [
//            'tree_title' => [
//                'icon' => 'fa fa-user',
//                'name' => '用户'
//            ],
//            'backend.user.index' => [
//                'icon' => '',
//                'name' => '用户管理'
//            ],
//            'backend.user.create' => [
//                'icon' => '',
//                'name' => '用户添加'
//            ]
//        ]
    ]
];
