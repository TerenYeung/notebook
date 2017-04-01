### 什么是LNMP
	- Linux系统下Nginx+MySQL+PHP这种网站服务器架构
	- Linux是类Unix计算机操作系统
	- Nginx是一个高兴能的HTTP的反响代理服务器，也是一个IMAP/POP3/SMTP代理服务器
		- POP3:Post Office Protocol 3的简称，即邮局协议的第3个版本,它规定怎样将个人计算机连接到Internet的邮件服务器和下载电子邮件的电子协议
		- STMP:Simple Mail Transfer Protocol，即简单邮件传输协议。它是一组用于从源地址到目的地址传输邮件的规范，通过它来控制邮件的中转方式。SMTP 协议属于 TCP/IP 协议簇，它帮助每台计算机在发送或中转信件时找到下一个目的地。SMTP 服务器就是遵循 SMTP 协议的发送邮件服务器
		- IMAP:全称是Internet Mail Access Protocol，即交互式邮件存取协议，它是跟POP3类似邮件访问标准协议之一。不同的是，开启了IMAP后，您在电子邮件客户端收取的邮件仍然保留在服务器上，同时在客户端上的操作都会反馈到服务器上，如：删除邮件，标记已读等，服务器上的邮件也会做相应的动作。
	- MySQL:小型关系型数据库管理系统
	- PHP:服务器端执行的嵌入HTML文档的脚本语言

	这四种软件均为免费开源软件，组合到一起，成为一个免费、高效、扩展性强的网站服务系统



#### Nginx基本操作

- nginx：打开nginx,若报错，使用sudo nginx
- nginx -s reload | reopen | stop | quit

**配置Nginx**

```
cd /usr/local/etc/nginx/
mkdir conf.d
```

**修改Nginx配置文件**

```
vim nginx.conf

```

主要修改位置是最后的include

```
    worker_processes  1;
    error_log       /usr/local/var/log/nginx/error.log warn;
    pid        /usr/local/var/run/nginx.pid;
    events {
        worker_connections  256;
    }
    http {
        include       mime.types;
        default_type  application/octet-stream;
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
        access_log      /usr/local/var/log/nginx/access.log main;
        port_in_redirect off;
        sendfile        on;
        keepalive_timeout  65;
        include /usr/local/etc/nginx/conf.d/*.conf;
    }
```

**修改自定义文件**

```
vim ./conf.d/default.conf

```
配置一个监听
```
server {
    listen       80;
    server_name  localhost;

    root /Users/username/Sites/; # 该项要修改为你准备存放相关网页的路径

    location / {
        index index.php;
        autoindex on;
    }

    #proxy the php scripts to php-fpm
    location ~ \.php$ {
        include /usr/local/etc/nginx/fastcgi.conf;
        fastcgi_intercept_errors on;
        fastcgi_pass   127.0.0.1:9000;
    }

}

```

#### MySQL的基本操作

mysql.server start

mysql -uroot -p // 通过root开启mysql

mysql> create database <databasename>ifanr

mysql> use <databasename>ifanr

mysqo> show database;

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| ifanr              |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```
```
mysql> show tables;
+---------------------------------------+
| Tables_in_ifanr                       |
+---------------------------------------+
| wp_2_comment_rating                   |
| wp_2_commentmeta                      |
| wp_2_comments                         |
| wp_2_links                            |
| wp_2_options                          |
| wp_2_postmeta                         |
| wp_2_posts                            |
| wp_2_term_relationships               |
| wp_2_term_taxonomy                    |
| wp_2_terms                            |
| wp_2_w3tc_cdn_queue                   |
| wp_3_commentmeta                      |
| wp_3_comments                         |
| wp_3_customcontactforms_field_options |
| wp_3_customcontactforms_fields        |
| wp_3_customcontactforms_forms         |
| wp_3_customcontactforms_styles        |
| wp_3_customcontactforms_user_data     |
| wp_3_dpsc_temp_file_log               |
| wp_3_dpsc_transactions                |
| wp_3_links                            |
| wp_3_options                          |
| wp_3_postmeta                         |
| wp_3_posts                            |
| wp_3_term_relationships               |
| wp_3_term_taxonomy                    |
| wp_3_terms                            |
| wp_ak_twitter                         |
| wp_author_adsense                     |
| wp_awsomnews                          |
| wp_bd_log                             |
| wp_blog_versions_                     |
| wp_blogs_                             |
| wp_comment_rating                     |
| wp_commentmeta                        |
| wp_comments                           |
| wp_domain_mapping                     |
| wp_domain_mapping_logins              |
| wp_flutter_layout                     |
| wp_flutter_layout_settings            |
| wp_flutter_layout_vars                |
| wp_golfresult                         |
| wp_golftable                          |
| wp_links                              |
| wp_mban_banner                        |
| wp_mban_options                       |
| wp_mban_zone                          |
| wp_mobilepress                        |
| wp_options                            |
| wp_orgseriesicons                     |
| wp_pollsa                             |
| wp_pollsip                            |
| wp_pollsq                             |
| wp_postmeta                           |
| wp_postrank                           |
| wp_posts                              |
| wp_psgalleries                        |
| wp_psimagepages                       |
| wp_pt_post                            |
| wp_pt_templates                       |
| wp_rc_cwp_custom_field_options        |
| wp_rc_cwp_custom_field_properties     |
| wp_rc_cwp_custom_field_types          |
| wp_rc_cwp_module_groups               |
| wp_rc_cwp_modules                     |
| wp_rc_cwp_modules_duplicates          |
| wp_rc_cwp_panel_category              |
| wp_rc_cwp_panel_custom_field          |
| wp_rc_cwp_panel_standard_field        |
| wp_rc_cwp_post_meta                   |
| wp_rc_cwp_write_panels                |
| wp_registration_log_                  |
| wp_signups_                           |
| wp_site_                              |
| wp_sitemeta_                          |
| wp_sodahead_user                      |
| wp_ssp_galleries                      |
| wp_sticky                             |
| wp_tdomf_table_forms                  |
| wp_tdomf_table_widgets                |
| wp_term_relationships                 |
| wp_term_taxonomy                      |
| wp_termmeta                           |
| wp_terms                              |
| wp_usermeta                           |
| wp_users                              |
| wp_w3tc_cdn_queue                     |
| wp_wsal_metadata                      |
| wp_wsal_occurrences                   |
| wp_wsal_options                       |
| wpau_active_plugins_info              |
| wpau_upgrade_log                      |
+---------------------------------------+
92 rows in set (0.01 sec)
```

mysql> source ~/Downloads/ifanrwp.sql.bak //导入数据库

### PHP

php-fpm

### PHP与数据库交互

- phpMyAdmin

phpMyAdmin 就是一个管理mysql数据库的工具，是居于Web的模式，缺陷也很多，尤其安全性；

不用这个工具 还有很多其他图形化工具，不过生产环境绝大多数全命令行mysql工具

MySQLi extension,PHP 5 及以上版本建议使用以下方式连接 MySQL,表达了 PHP 和 MySQL 数据库之间的连接

- MySQL客户端

在shell下运行mysql语句

```
$ mysql -u adminusername -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 5340 to server version: 3.23.54

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql> CREATE DATABASE databasename;
Query OK, 1 row affected (0.00 sec)

mysql> GRANT ALL PRIVILEGES ON databasename.* TO "wordpressusername"@"hostname"
    -> IDENTIFIED BY "password";
Query OK, 0 rows affected (0.00 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.01 sec)

mysql> EXIT
Bye
$
```