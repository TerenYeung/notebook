
WordPress基于PHP和MySQL

### 安装WordPress

```
tar -xzvf wordpress.verison.tar.gz
```

### phpMyAdmin

phpMyAdmin 是一个用PHP语言编写的软件工具，通过 phpmyadmin 我们可以使用web方式控制和操作MySQL数据库。

phpmyadmin 配置文件一般被命名为config.inc.php（根目录），config.default.php(根目录或者根目录下libraries目录内)，之所以会有这么多名称，是因为phpmyadmin的版本不一样造成的

#### phpMyAdmi配置

打开phpmyadmin的配置文件，依次找到下面各项，按照说明配置即可：

- 访问网址

$cfg['PmaAbsoluteUri'] ='';这里填写phpmyadmin的访问网址

- mysql主机信息

$cfg['Servers'][$i]['host'] = 'localhost'; //填写localhost或mysql所在服务器的ip地址，如果mysql和该phpmyadmin在同一服务器，则按默认localhost

$cfg['Servers'][$i]['port'] = ''; //mysql端口，如果是默认3306，保留为空即可

- mysql用户名和密码

$cfg['Servers'][$i]['user'] = 'root'; // MySQL user 访问phpmyadmin使用的mysql用户名
fg['Servers'][$i]['password'] = ''; // MySQL password (only needed对应上述mysql用户名的密码

- 认证方法

$cfg['Servers'][$i]['auth_type'] = 'cookie';

这里有四种认证模式可供选择：cookie，http，HTTP，config

config方式即输入phpmyadmin的访问网址即可直接进入，无需输入用户名和密码，是不安全的，不推荐使用。
当该项设置为cookie，http或HTTP时，登录phpmyadmin需要数据用户名和密码进行验证，,具体如下：
PHP安装模式为Apache，可以使用http和cookie；
PHP安装模式为CGI，可以使用cookie

短语密码(blowfish_secret)的设置

$cfg['blowfish_secret'] = '';

如果认证方法设置为cookie，就需要设置短语密码，置于设置什么密码，由您自己决定 ，但是不能留空，否则会在登录phpmyadmin时提示错误。