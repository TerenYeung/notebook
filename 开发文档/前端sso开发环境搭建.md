所需环境：python 2.7.10 、django==1.9.11、postgresql
下载指定的 python 版本，并搭建对应的虚拟环境
使用虚拟环境方便切换不同的 python 版本
上 python 官网下载所需要的 python 版本：https://www.python.org/downloads/release/python-2710/
安装虚拟环境使用的工具：
sudo pip install virtualenv
sudo pip install virtualenvwrapper --ignore-installed six
创建虚拟环境目录：mkdir pythonenv
配置全局：进入 ~/.bash_profile 添加以下两行命令
    export WORKON_HOME=~/**/pythonenv
    source /usr/local/bin/virtualenvwrapper.sh   (具体路径可通过 which virtualenvwrapper.sh 查找)
更新 .bash_profile： source ~/.bash_profile
配置并创建相应的 python 版本的虚拟环境
mkvirtualenv --python=/usr/local/bin/python2 python2   （路径视具体情况而定，后面的 python2 是虚拟环境名，可自定义）
使用 virtualenvwrapper 的命令来使用虚拟环境
列出所有虚拟环境 workon
激活环境 workon [环境名]
退出环境 deactivate
删除环境 rmvirtualenv [环境名]
输入 workon python2 激活虚拟环境 python2
安装 django
激活指定虚拟环境后，easy_install Django==1.9.11
安装 postgresql，并导入数据
上 postgresql 官网 下载 Postgres.app
配置环境变量，路径视具体情况而定
           export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.5/bin
进入 psql 环境：键入 psql
创建数据库： create database sso;
删除数据库：DROP DATABASE [dbname];
导入数据：向后端同学要一份数据库导出文件 sso.dump，在正常环境下（ 敲 \q 退出 psql ）：psql -d sso < ~/Downloads/sso.sql

postgresql 常用命令
\l：列出所有数据库。
\c [database_name]：连接其他数据库。
\d：列出当前数据库的所有表格。
\d [table_name]：列出某一张表格的结构。
获取 sso 代码
找同事要一份 sso 的代码
安装依赖：pip install -r develop_requirements.txt

目前发现安装依赖失败的原因有以下两个
postgresql 没有安装或者没有配置全局
缺少 libmagic ，使用 brew 安装 brew install libmagic
启动 sso
启动前，确保将 localhost 或者 127.0.0.1 添加到 ALLOWED_HOST 里面（在 sso/settings.py 文件里）



启动命令：python manage.py runserver，服务就算启动起来了
登录： 进入 127.0.0.1:8000/login  ，用户名 johndeng（ 没错，就是那个胖子 ），密码 111111
测试一下：127.0.0.1:8000/appsolution/xianmian

OK，至此环境搭建完毕，good luck！

文档不是很完善，期待你的补充。



python

安装模块：
sudo pip install

创建相应的的python版本的虚拟环境
mkvirtualenv --python=/usr/local/bin/python2 [虚拟变量名]

使用virtualenvwrapper命令来使用虚拟环境

//列出所有虚拟环境
workon
//激活环境
workon [环境名]
//退出环境
deactivate
//删除环境
rmvirtualenv [环境名]
