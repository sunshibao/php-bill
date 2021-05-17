<div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading">文章分类</div>

    @inject('category', 'App\Presenters\CategoryPresenter')

    <?php $categoryList = $category->categoryList(); ?>
    <!-- List group -->
    <ul class="list-group">
        @if ($categoryList)
            @foreach ($categoryList as $hal)
                <li class="list-group-item">
                    <span class="badge">{{ $hal->count }}</span>
                    <a href="{{ route('category', ['id' => $hal->id]) }}" target="_blank">
                        {{ $hal->name}}
                    </a>
                </li>
            @endforeach
        @endif
    </ul>
</div>
