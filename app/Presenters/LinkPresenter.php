<?php

namespace App\Presenters;

use App\Models\Link;

/**
 * Class LinkPresenter
 *
 * @package namespace App\Presenters;
 */
class LinkPresenter
{
    /**
     * 获取友情链接
     *
     * @return mixed
     */
    public function linkList()
    {
        $links = Link::query()->orderBy('sequence', 'desc')->where("sequence","!=",0)->get(['name','url']);
        return $links;
    }
}
