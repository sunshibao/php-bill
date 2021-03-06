@extends('layouts.backend')



@section('header')

@endsection

@section('content')
    <div class="row">
        <div class="col-xs-12">
            @include('backend.alert.success')
            <div class="box box-solid">
                <div class="box-header">
                    <form class="form-inline" action="" method="get">
                        <div class="form-group">
                            <label for="title">报单类型</label>&nbsp;
                            <select name="type" id="type" class="form-control">
                                <option value="0" @if ($type ==0) selected="selected" @endif>美妆</option>
                                <option value="1" @if ($type ==1) selected="selected" @endif>手机</option>
                                <option value="2" @if ($type ==2) selected="selected" @endif>茅台</option>
                                <option value="3" @if ($type ==3) selected="selected" @endif>其他</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="title">是否打款</label>&nbsp;
                            <select name="is_remit" id="is_remit" class="form-control">
                                <option value="0" @if ($is_remit ==0) selected="selected" @endif>未打款</option>
                                <option value="1" @if ($is_remit ==1) selected="selected" @endif>已打款</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="title">快递单号</label>&nbsp;
                            <input class="form-control" type="text" name="express_num" value="{{$express_num}}"
                                   placeholder="请输入快递单号"/>
                        </div>
                        <div class="form-group">
                            <label for="title">微信名称</label>&nbsp;
                            <input class="form-control" type="text" name="wx_name" value="{{$express_num}}"
                                   placeholder="请输入微信"/>
                        </div>

                        <button type="submit" class="btn btn-info">搜索</button>
                    </form>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding ">
                    <table class="table table-hover">
                        <tr>
                            <th>序号</th>
                            <th>产品名称</th>
                            <th>快递编号</th>
                            <th>微信名称</th>
                            <th>收款码</th>
                            <th>银行卡信息</th>
                            <th>备注</th>
                            <th>是否打款</th>
                            <th>操作</th>
                        </tr>
                        @if ($bills)
                            <?php $line = 1 ?>
                            @foreach($bills as $bill)
                                <tr>
                                    <td>{{ $line }}</td>
                                    <td>{{ $bill->product }}</td>
                                    <td>{{ $bill->express_num }}</td>
                                    <td>{{ $bill->wx_name }}</td>
                                    <td><img src="{{ $bill->alipay_qrcode }}" class="img-circle" alt="alipay Image"
                                             style="width:150px;height:170px;"></td>
                                    <td>{{ $bill->bank_info }}</td>
                                    <td>{{ $bill->remark }}</td>
                                    <td>
                                        @if ($bill->is_remit == 0)
                                            未打款
                                        @else
                                            已打款
                                        @endif

                                    </td>
                                    <td>
                                        <a href='{{ route("backend.wuge.wugeremit", ["id" => $bill->id]) }}'
                                           class='btn btn-info btn-xs'>
                                            <i class="fa fa-pencil"></i> 打款</a>
                                        <a href='{{ route("backend.wuge.wugeremark", ["id" => $bill->id]) }}'
                                           class='btn btn-info btn-xs'>
                                            <i class="fa fa-pencil"></i> 备注</a>
                                        <a href='{{ route("backend.wuge.wugedelete", ["id" => $bill->id]) }}'
                                           class='btn btn-info btn-xs'>
                                            <i class="fa fa-pencil"></i> 删除</a>
                                    </td>
                                </tr>
                                <?php $line++ ?>
                            @endforeach
                        @endif
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
@endsection

@section('javascript')
    <script>
        $(function () {
            $(".article-delete").click(function () {
                var url = $(this).attr('data-href');
                Moell.ajax.delete(url);
            });
        });
    </script>
@endsection
