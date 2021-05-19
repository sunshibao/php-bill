<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="五哥报单系统">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="format-detection" content="telphone=no">
    <meta name="renderer" content="webkit">
    <link rel="shortcut icon" type="image/x-icon" href="">
    <link rel="icon" sizes="any" mask="" href="">
    <title>五哥报单系统</title>

    <link rel="stylesheet" href="{{ asset('wuge/css/chunk-common.1cb400fcc3a8.css') }}">
    <link rel="stylesheet" href="{{ asset('wuge/css/44.29184bc47457.css') }}">

</head>
<body>
<![endif]-->
<div id="app">
    <div data-v-5e3ac0d4="" class="app-formview mui-clearfix" style="">
        <form role="form" action="{{ url('wugesubmit') }}" enctype="multipart/form-data"  method="post" id="user-form">
            <div data-v-5e3ac0d4="" class="app-formview__bg"></div>
            <div data-v-5e3ac0d4="">
                <div data-v-5e3ac0d4="">
                    <article data-v-5e3ac0d4="" ontouchstart="" class="form-view normal-view form-view__pc">
                        <div class="form-content custom-form-background">
                            <section class="form-fields js-form-content">
                                <div class="base-fields">
                                    <div data-id="5f6024f929aba0043d00001a" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="title" data-readonly="0" data-tier="3" class="form-field">
                                        <div class="field-body">
                                            <div class="field-label form-label custom-form-title"><h1
                                                    style="text-align: center;">五哥报单系统</h1></div>
                                            <div class="field-description custom-form-description max-width-limit">
{{--                                                <p>--}}
{{--                                                    <font--}}
{{--                                                        color="#333333"><span--}}
{{--                                                            style="font-family:宋体; font-size:inherit; font-style:inherit; font-variant-ligatures:inherit; font-variant-caps:inherit;"><b>查询链接：</b></span></font><a--}}
{{--                                                        href="http://wuge.skill86.com/wugesearch" target="_blank"--}}
{{--                                                        style="font-family:inherit; font-size:inherit; font-style:inherit; font-variant-ligatures:inherit; font-variant-caps:inherit; font-weight:inherit;">wuge.skill86.com/wugesearch</a>--}}
{{--                                                </p>--}}
                                                <p>
                                                    <b style="font-style:inherit; font-variant-ligatures:inherit; font-variant-caps:inherit; font-size:16px; color:rgb(208, 2, 27); font-family:宋体;">转寄注意事项:</b>

                                                </p>
                                                <p><span
                                                        style="color:inherit; font-size:inherit; font-style:inherit; font-variant-ligatures:inherit; font-variant-caps:inherit; font-weight:inherit; font-family:宋体;">地址：广东省深圳市福田区赛格科技园三栋东 六楼</span>
                                                </p>
                                                <p><span
                                                        style="color:inherit; font-size:inherit; font-style:inherit; font-variant-ligatures:inherit; font-variant-caps:inherit; font-weight:inherit; font-family:宋体;">姓名：王雷</span>
                                                </p>
                                                <p><span
                                                        style="color:inherit; font-size:inherit; font-style:inherit; font-variant-ligatures:inherit; font-variant-caps:inherit; font-weight:inherit; font-family:宋体;">电话：15891489777</span>
                                                </p>
                                                <p><span style="font-family:宋体;"><font color="#d0021b"
                                                                                       size="2"><b>出货结算</b></font></span>
                                                </p>
                                                <ol>
                                                    <li><font color="#333333"><span
                                                                style="font-family:宋体;">货品</span>18<span
                                                                style="font-family:宋体;">点前签收的当天打款；</span>18<span
                                                                style="font-family:宋体;">点后签收的第二天打款</span></font>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>


                                    </div>
                                    <div data-id="5eb6c765c490d4af62000028" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="text" data-readonly="0" data-required="true" data-isnumber="true"
                                         data-tier="3" class="form-field field__required">


                                        <div data-v-133e279e="" class="field-body">
                                            <div data-v-133e279e="" class="field-label form-label custom-form-label">
                                                <h3>
                                                    <span>报单分类</span> <small
                                                        class="field-error-tiper mui-hidden"></small></h3></div>
                                            <div data-v-133e279e="" class="field-description custom-form-description">
                                                美妆还是手机
                                            </div>
                                            <div data-v-133e279e="" class="field-form">
                                                <label data-v-133e279e="" class="field-control field-number">
                                                    <select name="type" id="type" class="form-control">
                                                        <option value="0">美妆</option>
                                                        <option value="1">手机</option>
                                                        <option value="2">茅台</option>
                                                        <option value="3">其他</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-id="5eb6c765c490d4af62000028" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="text" data-readonly="0" data-required="true" data-isnumber="true"
                                         data-tier="3" class="form-field field__required">


                                        <div data-v-133e279e="" class="field-body">
                                            <div data-v-133e279e="" class="field-label form-label custom-form-label">
                                                <h3>
                                                    <span>快递</span> <small
                                                        class="field-error-tiper mui-hidden"></small></h3></div>
                                            <div data-v-133e279e="" class="field-description custom-form-description">
                                                什么快递 如：顺丰快递
                                            </div>
                                            <div data-v-133e279e="" class="field-form">
                                                <label data-v-133e279e="" class="field-control field-number">
                                                    <input data-v-133e279e="" type="text" name="express_name"
                                                           placeholder="请输入文字"
                                                           class="mui-input js-vd__input js-fd">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-id="5eb6c765c490d4af62000028" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="text" data-readonly="0" data-required="true" data-isnumber="true"
                                         data-tier="3" class="form-field field__required">


                                        <div data-v-133e279e="" class="field-body">
                                            <div data-v-133e279e="" class="field-label form-label custom-form-label">
                                                <h3>
                                                    <span>快递单号</span> <small
                                                        class="field-error-tiper mui-hidden"></small></h3></div>
                                            <div data-v-133e279e="" class="field-description custom-form-description">
                                                快递单号 如：SF111222333444
                                            </div>
                                            <div data-v-133e279e="" class="field-form">
                                                <label data-v-133e279e="" class="field-control field-number">
                                                    <input data-v-133e279e="" type="text" name="express_num"
                                                           placeholder="请输入文字"
                                                           class="mui-input js-vd__input js-fd">
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-id="5eb6c620c490d4af62000024" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="text" data-readonly="0" data-required="true" data-tier="3"
                                         data-be-only="true" class="form-field field__required">


                                        <div data-v-133e279e="" class="field-body">
                                            <div data-v-133e279e="" class="field-label form-label custom-form-label">
                                                <h3>
                                                    <span>产品型号--颜色--数量--价格</span> <small
                                                        class="field-error-tiper mui-hidden"></small></h3></div>
                                            <div data-v-133e279e="" class="field-description custom-form-description">
                                                示例：<br>iPhone11 64G--黑--1--5499
                                            </div>
                                            <div data-v-133e279e="" class="field-form">
                                                <label data-v-133e279e="" class="field-control fluid">
                                                    <textarea data-v-133e279e="" placeholder="" rows="4" name="product"
                                                              class="mui-input js-vd__input js-fd"></textarea>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-id="5eb6c70cc490d4af62000025" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="name" data-readonly="0" data-required="true" data-isremember="true"
                                         data-tier="3" class="form-field field__required">
                                        <div class="field-body">
                                            <div class="field-label form-label custom-form-label"><h3><span>微信昵称</span>
                                                    <small class="field-error-tiper mui-hidden"></small></h3></div>
                                            <div class="field-description custom-form-description"
                                                 style="display: none;"></div>
                                            <div class="field-form"><label class="field-control field-name"><input
                                                        type="text" name="wx_name" class="mui-input js-vd__input js-fd">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-id="5ef0820bc490d4af6200003f" data-form-id="5ebe1937cf0f350f2597b4d7"
                                         data-type="text" data-readonly="0" data-required="true" data-isremember="true"
                                         data-tier="3" class="form-field field__required">


                                        <div data-v-133e279e="" class="field-body">
                                            <div data-v-133e279e="" class="field-label form-label custom-form-label">
                                                <h3>
                                                    <span>支富宝收款码</span> <small
                                                        class="field-error-tiper mui-hidden"></small></h3></div>
                                            <div data-v-133e279e="" class="field-description custom-form-description">
                                                一定要确认好自己的收款码，传错后果不负责。
                                            </div>
                                            <div data-v-133e279e="" class="field-form"><label data-v-133e279e=""
                                                                                              class="field-control">
                                                    <input type="file" name="alipay_qrcode" id="alipay_qrcode" accept="image/png,image/gif,image/jpeg"> </label>
                                            </div>
                                        </div>
                                    </div>

{{--                                    <div data-id="5eb6c70ec490d4af62000026" data-form-id="5ebe1937cf0f350f2597b4d7"--}}
{{--                                         data-type="mobile" data-readonly="0" data-required="true"--}}
{{--                                         data-isremember="true"--}}
{{--                                         data-tier="3" class="form-field field__required">--}}
{{--                                        <div class="field-body">--}}
{{--                                            <div class="field-label form-label custom-form-label"><h3>--}}
{{--                                                    <span>手机号(特殊情况联系)</span> <small--}}
{{--                                                        class="field-error-tiper mui-hidden"></small></h3></div>--}}
{{--                                            <div class="field-description custom-form-description"--}}
{{--                                                 style="display: none;"></div>--}}
{{--                                            <div class="field-form"><label class="field-control field-mobile"><input--}}
{{--                                                        type="text" name="mobile" maxlength="11"--}}
{{--                                                        class="mui-input js-vd__input js-fd">--}}
{{--                                                </label></div>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                    <div data-id="5eb6c738c490d4af62000027" data-form-id="5ebe1937cf0f350f2597b4d7"--}}
{{--                                         data-type="text" data-readonly="0" data-tier="3" class="form-field">--}}
{{--                                        <div data-v-133e279e="" class="field-body">--}}
{{--                                            <div data-v-133e279e="" class="field-label form-label custom-form-label">--}}
{{--                                                <h3>--}}
{{--                                                    <span>备注</span> <small--}}
{{--                                                        class="field-error-tiper mui-hidden"></small></h3></div>--}}
{{--                                            <div data-v-133e279e="" class="field-description custom-form-description"--}}
{{--                                                 style="display: none;"></div>--}}
{{--                                            <div data-v-133e279e="" class="field-form"><label data-v-133e279e=""--}}
{{--                                                                                              class="field-control"><input--}}
{{--                                                        data-v-133e279e="" type="text" name="remark" placeholder=""--}}
{{--                                                        class="mui-input js-vd__input js-fd"> </label>--}}
{{--                                            </div>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
                                </div>
                                {{ csrf_field() }}
                                <div class="extend-fields">
                                    <div data-type="form-submit" class="form-field extend-field">
                                        <div class="form-submit-button">
                                            <button type="submit"
                                                    class="form-button__submit custom-form-submit-button js-form-submit">
                                                提交
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                    <div data-v-5e3ac0d4="" class="form-powered"></div>
                </div>
            </div>

            <div data-v-cda6051e="" data-v-5e3ac0d4="" class="el-dialog__wrapper dialog-submit-flow"
                 style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                     style="margin-top: 15vh; width: 400px;">
                    <div class="el-dialog__header"><span class="el-dialog__title"></span></div>
                </div>
            </div>
            <div data-v-5e3ac0d4="" class="el-dialog__wrapper limit-time-tip" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog"
                     style="margin-top: 15vh; width: 400px;">
                    <div class="el-dialog__header"><span class="el-dialog__title"></span></div>
                </div>
            </div>
        </form>
    </div>
</div>

</body>
</html>
