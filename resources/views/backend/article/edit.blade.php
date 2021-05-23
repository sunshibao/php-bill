@extends('layouts.backend')

@section('title', '添加备注')

@section('header')
    <h1>
        添加备注
    </h1>
@endsection

@section('content')
        <!-- /.row -->
    <div class="row">
        <div class="col-md-12">
            @include('backend.alert.warning')
            <div class="box box-solid">
                <form role="form" method="post" action="{{ route('backend.wuge.wugeupdate', ['id' => $bill->id]) }}" id="article-form">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="title">产品名称</label>
                            <div class="row">
                                <div class='col-md-6'>
                                    {{ $bill->product }}
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="content">备注</label>
                            <div>
                                <textarea  id="remark" name="remark">{!! $bill->remark !!}</textarea>
                            </div>
                        </div>

                    </div>
                    {{ csrf_field() }}
                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">修改</button>
                        <button type="button" id="reset-btn" class="btn btn-warning">重置</button>
                    </div>
                </form>

            </div>
            <!-- /.box -->
        </div>
    </div>
@endsection

@section('javascript')
    <script>
        markdownEditorInit();
    </script>
@endsection
