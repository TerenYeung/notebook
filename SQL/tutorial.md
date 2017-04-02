
### 数据库技术的基础

#### 什么是数据库技术

数据库技术就是数据管理的技术，是计算机科学与计算的重要分支，是信息系统的核心和基础；

#### 基本概念的认识

理清概念，才能清晰的前行；

- 数据

存储在存储介质上的物理符号，包括数字、字符、图形、图像、audio和vedio等数据类型；

- 信息

经过加工处理后的数据；

单纯的数据是无价值的，经过处理后符合特定目的的数据，即信息才是有价值的；

数据承载信息，信息表现数据内涵；

- 数据处理

把数据变成信息的过程，即

对原始数据进行收集、整理、加工、存储、传输和检索等一系列操作过程；

- 数据库

数据库是存储在计算机的有组织、可共享的数据集合；

数据库按一定的数据模型组织、描述和存储；

- 数据库管理系统

对数据库进行管理的系统软件，提供如下主要功能：

	- 数据定义功能

	DBMS提供数据定义语言DDL,对数据库中相关内容进行定义；

	- 数据操纵功能

	DBMS提供数据操作语言DML,对象数据库进行基本操作，即数据的增删改查；

	- 数据库运行控制功能

	是DBMS的核心功能，包括：
		- 并发控制，多个用户同时使用某些数据；
		- 安全性检查
		- 数据完整性条件检查
		- 数据库内部维护

	- 数据库的建立和维护功能
		- 数据库的建立，是指数据的载入、转储、重组织和数据库的恢复功能；
		- 数据库的维护，是指数据库结构的修改、变更集扩充功能；

**【注】**

作为一个前端攻城狮，前期主要在数据库的建立与维护、数据的定义、数据操纵等功能理解；

- 数据库系统

	拥有数据库并利用数据库技术进行数据管理的计算机系统；

	数据库系统的体系包括：

		- 计算机硬件设备
		- 数据库及相关软件系统
		- 开发及管理人员

#### 数据管理的发展过程

数据管理发展大致经历人工管理阶段、文件系统管理阶段和数据库系统管理阶段；

- 人工管理阶段

20世纪50年代：

硬件方面存储介质只有磁带、纸带等，没有磁盘，软件方面没有操作系统和数据管理软件；

此时，数据和程序集合在一起，每个程序有自己的数据集，彼此独立，数据无法共享；

- 文件系统管理阶段

20世纪60年代：

硬件方面出现了磁带、磁盘等大容量存储介质，软件方面有操作系统和用文件系统处理数据的技术；

文件系统是专门处理数据的系统软件，系统中数据以文件形式存储在外存，应用程序通过文件系统对文件数据进行存取，文件系统是应用程序和数据之间的一个接口，实现对数据的增删改查功能；

这段期间，数据管理有如下特点：

	- 数据以文件形式长期存储在外存，文件系统提供接口对文件进行操作；

	- 程序和数据之间分开，数据的物理结构和逻辑结构有所区别；

	- 但文件结构的设计仍基于特定应用，程序与数据结构之间的依赖关系未根本改变；

	- 存在数据冗余，同样的数据可能存在多个文件中；

- 数据库系统管理阶段

硬件方面出现大容量磁盘；

软件方面出现为多用户、多应用程序共享数据的数据库管理技术；

此时的数据管理有如下特点：
	- 数据不在针对特定应用，是面向全组织;
	- 具有整体的结构性、共享性高和冗余度小
	- 实现程序与数据的解耦和对数据的统一控制；



![database-history](http://upload-images.jianshu.io/upload_images/1993435-7f5ef63823fe44bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 概念模型和数据模型

概念模型： 对信息世界的管理对象、属性和联系等信息的抽象和形式化描述，概念模型不依赖与DBMS；

数据模型：
按计算机系统的观点对数据建模，是数据库管理系统的实现；

- 概念模型包括以下概念：
	- 实体和实体集

		- 实体是客观存在并且相互区别的事物，包括具体的事物和事物之间的联系；
		如，每一个学生以及班级中学生与学生的关系是一个实体

		- 实体集是具有相同属性的实体的集合，如若干学生组成的学生实体集；

	- 属性和属性值

		- 属性是描述实体的特性，如学生的名字和学号；

		- 属性值是属性的具体指，如学生的学号为1；

	- 实体集间的联系
		实体级之间的对应关系成为联系，根据一个实体集中每个实体与另一个实体集中的实体可能出现的数目对应关系，两个实体集之间的关系可分为3个类型：

		- 1对1联系
			实体集A与实体集B的1对1联系，记做1：1，实体集A中每个实体在实体集B中至多有一个实体与之联系；
			如，班级实体集和班长实体集，班级实体集中的每一班在班长实体集中至多有一个班长实体与之联系；

		- 1对n联系
			实体集A中的每一个实体在实体集B中与之对应的实体至少1个，记做1：n；
			如，学校实体集中在学生实体集中的学生实体不止一个，但每一个学生只能属于一个学校；

		- n对n联系
			实体集A中每个实体在实体集B中对于对象的实体至少1个，反之亦然，记做n：n;
			如，教师实体集中每个教师对应课程实体集中的多门课程实体，课程实体集中的每个课程实体也可对应教师实体集中的多个教师；

		- E-R模型
			E-R模型是用来描述现实世界的概念模型
			- 实体用矩形表示
			- 属性用椭圆表示
			- 联系用菱形表示实体集之间的联系
			- 连线用线段表示实体及其属性之间的联系

![concept-model](http://upload-images.jianshu.io/upload_images/1993435-a68555509cdf12aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


1对1联系可看做特殊的1对n联系，1对n联系可以看做特殊的n对n联系


- 数据模型

	数据模型由模型结构、数据操作和完整性约束组成，下面主要讲解模型结构和数据操作；

	- 模型结构
		模型结构经历层次模型、网状模型、关系模型和面向对象模型，这里重点讲解关系模型，稍微提及面向对象模型；

		关系模型是数据模型中最红要的额模型结构，应用最为广泛，常见的数据库管理系统MySQL、Oracle、SQL Server都是采用关系模型对数据进行组织；

		关系模型包括以下概念：

		- 关系
		就是一个二维表代表的数据集合，讲一个实体集放入一个二维表；
		理解：关系型数据库是以“关系”作为数据的基本单元，所以一个关系就是一个数据单元；

		- 关系结构
		关系结构描述关系中数据的意义，如student(学号，姓名，入学成绩)

		- 记录
		二维表中的一行成为一条记录或元组

		- 属性
		二维表中的每一列是的名称，每一列还有许多属性值，组成属性值集

		- 关键字
		唯一表示记录的属性，成为关键字，关键字包含一个以上时要选定主键；

	 	【面向对象模型】
	 		面向对象模型将现实世界的数据抽象为对象和类，代表的NoSQL数据库有MongoDB
	 		- 对象
	 		现实世界中实体的模型化，每个对象有唯一标识符、状态和行为；
	 			- 状态是对象属性值得集合
	 			- 行为是对对象状态的操作方法集

	 		- 类
	 		共享同一属性集合方法集的所有对象构成一个类

	 数据操作
	 	数据操作至少支持选择、投影和联接三种基本关系运算

	 	- 选择
	 		在关系中选择满足条件的元组，相当于查找一行的记录
	 	- 投影
	 		在关系中选择满足条件的属性列，相当于查找一列的属性
	 	- 联接
	 		将两个关系的属性拼接成一个新的关系

#### SQL基本操作

SQL，指结构化查询语言，全称是 Structured Query Language是用于处理数据库的标准计算机语言；

这里使用SQL去访问处理MySQL数据库，需要事先安装MySQL

- MySQL的安装

具体教程网上有，这里小羊就没赘述了；
安装完后，输入：

```
$ mysql -V
mysql  Ver 14.14 Distrib 5.7.17, for osx10.12 (x86_64) using  EditLine wrapper
```
查看是否安装成功；

- 开启数据库服务

```
$ mysql.server start
```


- 进入数据库

```
$ mysql -u root -p
# 输入密码
Enter password:
```
- 退出mysql

```
mysql> exit
Bye
```

- 显示数据库

```
>mysql show databases;

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| test               |
+--------------------+
1 rows in set (0.00 sec)
```

- 创建数据库

```
mysql> create database demo;
Query OK, 1 row affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| demo               |
| test               |
+--------------------+
2 rows in set (0.00 sec)
```

- 选择数据库

```
mysql> use demo;
Database changed
```

- 创建数据库的表

peole(...)代表前面的关系模型中的关系结构，定义一张表的结构；

括号的参数表示属性名，属性名后面是属性值得类型描述；

```
mysql> create table people(id int, lastname varchar(20), firstname varchar(20), age int);
Query OK, 0 rows affected (0.03 sec)
```

- 显示所有数据表
mysql> show tables;
+----------------+
| Tables_in_demo |
+----------------+
| people          |
+----------------+
1 row in set (0.00 sec)
```

- 插入记录（元祖）

```
mysql> insert into people values (1, 'teren', 'yeung', 18);
Query OK, 1 row affected (0.01 sec)
```

- 查询数据表

查询所有记录
```
mysql> select * from people;
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    1 | teren    | yeung     |   18 |
+------+----------+-----------+------+
1 row in set (0.00 sec)
```

查询特定属性的记录

```
mysql> select lastname, age from people;
+----------+------+
| lastname | age  |
+----------+------+
| teren    |   18 |
+----------+------+
1 row in set (0.00 sec)
```

查询唯一记录

```
mysql> select * from people;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    1 | teren       | yeung     |   18 |
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
+------+-------------+-----------+------+
4 rows in set (0.00 sec)

mysql> select distinct firstname from people;
+-----------+
| firstname |
+-----------+
| yeung     |
| cat       |
| dog       |
+-----------+
3 rows in set (0.00 sec)
```

条件查询

```
mysql> insert into people values (3,"kobe", "bryant", 18);
Query OK, 1 row affected (0.00 sec)

mysql> select * from people where lastname="kobe";
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    3 | kobe     | bryant    |   18 |
+------+----------+-----------+------+
1 row in set (0.00 sec)

mysql> select * from people where age<18;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
+------+-------------+-----------+------+
3 rows in set (0.00 sec)

mysql> select * from people;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    1 | teren       | yeung     |   18 |
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
|    3 | kobe        | bryant    |   18 |
+------+-------------+-----------+------+
5 rows in set (0.00 sec)

mysql> select * from people where age between 2 and  4;
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    2 | totora   | cat       |    2 |
+------+----------+-----------+------+
1 row in set (0.00 sec)
```

LIKE用于匹配符合特定模式的数据；

```

mysql> select * from people where lastname like 'teren';
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    1 | teren    | yeung     |   18 |
+------+----------+-----------+------+
1 row in set (0.00 sec)

mysql> select * from people where lastname not like 'teren';
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
|    3 | kobe        | bryant    |   18 |
+------+-------------+-----------+------+
4 rows in set (0.00 sec)

mysql> select * from people where lastname like '%ren';
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    1 | teren    | yeung     |   18 |
+------+----------+-----------+------+
1 row in set (0.00 sec)
```

IN用于符合查询符合IN集合后的数据

```
mysql> select * from people where lastname in ('hitachi', 'totora');
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    2 | totora   | cat       |    2 |
|    2 | hitachi  | dog       |    5 |
+------+----------+-----------+------+
2 rows in set (0.01 sec)
```

通配符

通配符|描述
--|--
%|替代0个或多个字符
-|替代一个字符
[charlist]|字符列表中的任一字符
[^charlist]|不属于字符列表的任一字符

```
mysql> select * from people where lastname like '%to%';
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    2 | totora   | cat       |    2 |
+------+----------+-----------+------+
1 row in set (0.00 sec)

mysql> select * from people where lastname like '_o%';
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    2 | totora   | cat       |    2 |
|    3 | kobe     | bryant    |   18 |
+------+----------+-----------+------+
2 rows in set (0.00 sec)

mysql> select * from people where lastname regexp '^[t]';
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    1 | teren    | yeung     |   18 |
|    2 | totora   | cat       |    2 |
+------+----------+-----------+------+
2 rows in set (0.00 sec)
```

AND && OR 运算符

```
mysql> select * from people where id=2 and age !=2;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
+------+-------------+-----------+------+
2 rows in set (0.00 sec)

mysql> select * from people where id=1 or age =2;
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    1 | teren    | yeung     |   18 |
|    2 | totora   | cat       |    2 |
+------+----------+-----------+------+
2 rows in set (0.00 sec)
```

ODBER BY关键字
对结果进行排序

```
mysql> select * from people order by lastname;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    2 | hello_kitty | cat       |    5 |
|    2 | hitachi     | dog       |    5 |
|    3 | kobe        | bryant    |   18 |
|    1 | teren       | yeung     |   18 |
|    2 | totora      | cat       |    2 |
+------+-------------+-----------+------+
5 rows in set (0.00 sec)

mysql> select * from people order by age desc, firstname;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    3 | kobe        | bryant    |   18 |
|    1 | teren       | yeung     |   18 |
|    2 | hello_kitty | cat       |    5 |
|    2 | hitachi     | dog       |    5 |
|    2 | totora      | cat       |    2 |
+------+-------------+-----------+------+
5 rows in set (0.00 sec)

```

SELEC TOP
返回指定数量记录
```
mysql> select * from people limit 3;
+------+----------+-----------+------+
| id   | lastname | firstname | age  |
+------+----------+-----------+------+
|    1 | teren    | yeung     |   20 |
|    2 | totora   | cat       |    2 |
|    2 | hitachi  | dog       |    5 |
+------+----------+-----------+------+
3 rows in set (0.00 sec)
```

别名查询
为查询结构的属性名或是表指定别名
```
mysql> select id as object_id, lastname as lname from people;
+-----------+-------------+
| object_id | lname       |
+-----------+-------------+
|         1 | teren       |
|         2 | totora      |
|         2 | hitachi     |
|         2 | hello_kitty |
+-----------+-------------+
4 rows in set (0.00 sec)

mysql> select * from people as c where c.id=2;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
+------+-------------+-----------+------+
3 rows in set (0.00 sec)
```
别名的使用场景，在设计复杂的查询时，可以简化查询语句；


数据更新

```
mysql> select * from people;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    1 | teren       | yeung     |   18 |
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
|    3 | kobe        | bryant    |   18 |
+------+-------------+-----------+------+
5 rows in set (0.00 sec)

mysql> update people set age=20 where lastname='teren';
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from people;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    1 | teren       | yeung     |   20 |
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
|    3 | kobe        | bryant    |   18 |
+------+-------------+-----------+------+
5 rows in set (0.00 sec)
```

添加、删除或修改列

- alter table table_name add column_name type

```
mysql> alter table book add date date;
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from book;
+----+------------+------------------+-------+------+
| id | bookname   | author           | price | date |
+----+------------+------------------+-------+------+
|  1 | MySQL      | Monty Widenius   |    20 | NULL |
|  2 | Python     | Guido van Rossum |    30 | NULL |
|  3 | JavaScript | Brendan Eich     |    30 | NULL |
+----+------------+------------------+-------+------+
3 rows in set (0.00 sec)

mysql> alter table book add remark varchar(20);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from book;
+----+------------+------------------+-------+------+--------+
| id | bookname   | author           | price | date | remark |
+----+------------+------------------+-------+------+--------+
|  1 | MySQL      | Monty Widenius   |    20 | NULL | NULL   |
|  2 | Python     | Guido van Rossum |    30 | NULL | NULL   |
|  3 | JavaScript | Brendan Eich     |    30 | NULL | NULL   |
+----+------------+------------------+-------+------+--------+
3 rows in set (0.00 sec)
```
- alter table table_name drop column column_name;

```
mysql> alter table book drop column remark;
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from book;
+----+------------+------------------+-------+------+
| id | bookname   | author           | price | date |
+----+------------+------------------+-------+------+
|  1 | MySQL      | Monty Widenius   |    20 | NULL |
|  2 | Python     | Guido van Rossum |    30 | NULL |
|  3 | JavaScript | Brendan Eich     |    30 | NULL |
+----+------------+------------------+-------+------+
3 rows in set (0.00 sec)
```

- 修改字段的数据类型

```
mysql> alter table book modify column date int;
Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0
```

删除特定记录

```
mysql> delete from people where lastname='kobe';
Query OK, 1 row affected (0.01 sec)

mysql> select * from people;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    1 | teren       | yeung     |   20 |
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
+------+-------------+-----------+------+
4 rows in set (0.00 sec)
```

复制数据表

```
mysql> create table animals select * from people;
Query OK, 4 rows affected (0.02 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> show tables;
+----------------+
| Tables_in_demo |
+----------------+
| animals        |
| people         |
+----------------+
2 rows in set (0.00 sec)

mysql> select * from animals;
+------+-------------+-----------+------+
| id   | lastname    | firstname | age  |
+------+-------------+-----------+------+
|    1 | teren       | yeung     |   20 |
|    2 | totora      | cat       |    2 |
|    2 | hitachi     | dog       |    5 |
|    2 | hello_kitty | cat       |    5 |
+------+-------------+-----------+------+
4 rows in set (0.00 sec)
```

SQL约束用于定义特定字段（属性）的规则

- PRIMARY KEY

唯一标识数据库表中的每条记录；

具有NOT NULL和UNIQU的约束规则；

每个表都有且只有一个主键


```
mysql> create table book(id int primary key, bookname varchar(30) not null, author varchar(20) unique, price int);
```

```
mysql> insert into book values(1, 'MySQL','teren', 20);
Query OK, 1 row affected (0.01 sec)

mysql> insert into book values(1, 'Python','Guido van Rossum', 30);
ERROR 1062 (23000): Duplicate entry '1' for key 'PRIMARY'
mysql> insert into book values(2, 'Python','Guido van Rossum', 30);
Query OK, 1 row affected (0.00 sec)

mysql> select * from book;
+----+----------+------------------+-------+
| id | bookname | author           | price |
+----+----------+------------------+-------+
|  1 | MySQL    | Monty Widenius   |    20 |
|  2 | Python   | Guido van Rossum |    30 |
+----+----------+------------------+-------+
2 rows in set (0.00 sec)
```

当表已经创建，需要后续进行字段约束，可使用 ALTER  ADD || ALTER DROP INDEX

```
mysql> select * from book;
+----+----------+------------------+-------+
| id | bookname | author           | price |
+----+----------+------------------+-------+
|  1 | MySQL    | Monty Widenius   |    20 |
|  2 | Python   | Guido van Rossum |    30 |
+----+----------+------------------+-------+
2 rows in set (0.00 sec)

mysql> alter table book add unique(price);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> insert into book values(3, 'JavaScript', 'Brendan Eich', 30);
ERROR 1062 (23000): Duplicate entry '30' for key 'price'
```

```
mysql> alter table book drop index price;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> insert into book values(3, 'JavaScript', 'Brendan Eich', 30);
Query OK, 1 row affected (0.00 sec)

mysql> select * from book;
+----+------------+------------------+-------+
| id | bookname   | author           | price |
+----+------------+------------------+-------+
|  1 | MySQL      | Monty Widenius   |    20 |
|  2 | Python     | Guido van Rossum |    30 |
|  3 | JavaScript | Brendan Eich     |    30 |
+----+------------+------------------+-------+
3 rows in set (0.00 sec)
```

- FOREIGN KEY

一个表中的FOREIGN KEY指向另一个表中的PRIMARY KEY

FOREIGN KEY技能表示表之间的联系，又能防止这种连接被破坏；

```
mysql> create table book_detail(id int,book_id int, field varchar(20),primary key(id), foreign key(book_id) references book(id));
Query OK, 0 rows affected (0.01 sec)
```

```
mysql> insert into book_detail values (1,1, 'DBMS');
Query OK, 1 row affected (0.00 sec)

mysql> select * from book_detail;
+----+---------+-------+
| id | book_id | field |
+----+---------+-------+
|  1 |       1 | DBMS  |
+----+---------+-------+
1 row in set (0.00 sec)
```

删除表

```
mysql> show tables;
+----------------+
| Tables_in_demo |
+----------------+
| animals        |
| book           |
| book_detail    |
| people         |
+----------------+
4 rows in set (0.00 sec)

mysql> show tables;
+----------------+
| Tables_in_demo |
+----------------+
| book           |
| book_detail    |
| people         |
+----------------+
3 rows in set (0.00 sec)
```

清空数据库

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| demo               |
| test               |
+--------------------+
2 rows in set (0.00 sec)

mysql> use test;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> select * from test;
+------+----------+-----------+---------+
| id   | lastname | firstname | address |
+------+----------+-----------+---------+
|    1 | teren    | yeung     | canton  |
|    2 | kobe     | bryant    | America |
+------+----------+-----------+---------+
2 rows in set (0.00 sec)

mysql> truncate table test;
Query OK, 0 rows affected (0.01 sec)

mysql> select * from test;
Empty set (0.00 sec)
```

删除数据库

```
mysql> drop database test;

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| demo               |
+--------------------+
1 rows in set (0.00 sec)
```

SQL函数

SQL还有许多内建函数，用于查询结果的简单计算，如有需要可以查找相关资料，这里不详细讲解；

一般前端工程师只要做到认识数据库到以上基本操作就行了，SQL那些查找的数据操作一般不用内建函数，而是采用特定高级语言的模块进行处理；

