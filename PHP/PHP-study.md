### 什么是PHP
	PHP（全称：PHP：Hypertext Preprocessor，即"PHP：超文本预处理器"）是一种通用开源脚本语言

#### PHP的特点

- PHP 脚本在服务器上执行,然后将纯 HTML 结果发送回浏览器。

- PHP 文件可包含文本、HTML、JavaScript代码和 PHP 代码
	- 内嵌入HTML

		```
		<!DOCTYPE html>
		<html>
		<body>

		<?php
		echo "Hello World!";
		?>

		</body>
		</html>
		```
- PHP 中的每个代码行都必须以分号结束。分号是一种分隔符，用于把指令集区分开来,有两种在浏览器输出文本的基础指令：echo 和 print

#### 什么是php-fpm

一个PHPFastCGI管理器，所谓CGI就是HTTP服务器与你的或其他机器的程序进行交流的工具；

HTTP服务器 -> CGI，类似一个关口，用于HTTP服务器与其他程序交流；

FastCGI像是一个常驻(long-live)型的CGI，它可以一直执行着，只要激活后，不会每次都要花费时间去fork一次；


#### PHP连接MySQL

PHP可以根据用户发出的操作数据的请求，通过内置使用SQL语言操作数据库；

PHP连接MySQL的方式可通过MySQLi extension
PDO

- 数据库里面有许多数据表
- 每个表里面有


### 数据库的基本操作

- 创建数据库
- 删除数据库
- 增加数据
- 删除数据
- 修改数据
- 查询数据


