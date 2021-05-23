<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wuge extends Model
{
    protected $fillable = ['type','express_name', 'express_num', 'product', 'wx_name', 'alipay_qrcode', 'alipay_name', 'mobile', 'remark','is_remit','bank_info'];

    protected $table = 'wuge';

}
