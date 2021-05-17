## Moell Blog

Moell Blog 是一个基于Laravel5.7 开发并支持markdown语法的博客。

### 功能

- 支持Markdown, 文章实时预览效果
- 图片拖拽上传
- 支持七牛云存储
- 支持多种编程语言代码高亮
- 文章搜索
- 文章分类
- 文章标签
- 自定义导航，分类设置为导航
- 友情链接
- 自定义页面
- RSS
- 评论插件 disqus

### 前端演示地址

查看 [moell](http://blog.skill86.com/)

### 安装

获取源码

```
git clone https://github.com/moell-peng/moell-blog.git
```

进入项目目录

```
cd moell-blog
```

安装项目依赖

```
composer install
```

生成.env

```
cp .env.example .env
php artisan key:generate
```

编辑.env环境配置

```
APP_URL=http://localhost #使用本地文件系统存储文件时，必须填写正确地址
APP_DEBUG=true #关闭调试

DB_HOST= #数据库地址
DB_PORT=3306 #数据库端口
DB_DATABASE= #数据库名称
DB_USERNAME= #数据库用户
DB_PASSWORD= #数据库密码
```

默认下使用了本地文件系统，需执行 `php artisan storage:link` 来创建符号链接。 可以通过 `BLOG_DISK` 来进行配置，支持 qiniu 和 public ,qiniu 配置请参照 filesystem.php 。

运行数据迁移和数据填充

```
php artisan migrate
php artisan db:seed
```

将项目根目录指向入口public目录

**Nginx**

```
location / {
		root   /www/moell-blog/public;
		try_files $uri $uri/ /index.php?$query_string;
		index  index.php index.html index.htm;
}
```

设置目录权限

```
chown -R nginx:nginx  storage/
chmod -R 755 public/
chown -R nginx:nginx  public/
```

调优

> 部署到线上可选，本地测试无需执行

```
php artisan optimize
php artisan config:cache
php artisan route:cache
```