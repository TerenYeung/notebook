### Linux 系统简介
[](https://dn-anything-about-doc.qbox.me/linux_base/1-1.png/logoblackfont)

 Linux 也就是系统调用和内核那两层。当然直观地看，我们使用的操作系统还包含一些在其上运行的应用程序，比如文本编辑器、浏览器、电子邮件等。

 #### Linux学习路径
 [](https://dn-anything-about-doc.qbox.me/linux_base/1-8.png/logoblackfont)

 #### 基本概念及操作

 - Linux桌面环境介绍
 相对于现在的 Windows 系统，UNIX/Linux 本身是没有图形界面的，我们通常在 Unix/Linux 发行版上看到的图形界面实际都只是运行在 Linux 系统之上的一套软件

 [](https://dn-anything-about-doc.qbox.me/linux_base/2-1.png/logoblackfont)

 #### Linux终端
 - Terminal
 通常在我们使用 Linux 时，我们并不是直接与系统打交道，而是通过一个叫做 Shell 的中间程序来完成的，在图形界面下为了实现让我们在一个窗口中完成接受用户输入和显示输出，Linux 系统还提供了一个叫做终端模拟器的程序（Terminal），下面几个比较常见的终端模拟器，例如 gnome-terminal，kconsole，xterm，rxvt，kvt，nxterm 和 eterm，目前我们的实验中的终端程序是 xfce 桌面环境自带的 xfce-terminal。

 终端本质上是对应着 Linux 上的 /dev/tty 设备，Linux 的多用户登陆就是通过不同的 /dev/tty 设备完成的，Linux 默认提供了 6 个纯命令行界面的 “terminal”（准确的说这里应该是 6 个 virtual consoles）来让用户登录，在物理机系统上你可以通过使用[Ctrl]+[Alt]+[F1]～[F6]进行切换

 当你切换到其中一个终端后想要切换回图形界面，你可以按下[Ctrl]+[Alt]+[F7]来完成。

 - Shell
 Shell 是指“提供给使用者使用界面”的软件（命令解析器）,普通意义上的 Shell 就是可以接受用户输入命令的程序。它之所以被称作 Shell 是因为它隐藏了操作系统底层的细节

 在 UNIX/Linux 中比较流行的常见的 Shell 有 bash，zsh，ksh，csh 等等，Ubuntu 终端默认使用的是 bash，默认的桌面环境是 GNOME 或者 Unity（基于 GNOME），但我们的环境中使用的分别是zsh 和 xfce。

 #### 快捷键

 - tab 补全命令，目录和文件
 - 快速创建文件
 touch {1..10}.html
 touch {hello,world}.html
 - 手册
 man
- Ctrl+d
 ---

 ### 用户和文件权限管理

 #### Linux用户管理
 Linux 是一个可以实现多用户登陆的操作系统，比如“李雷”和“韩梅梅”都可以同时登陆同一台主机，他们共享一些主机的资源，但他们也分别有自己的用户空间，用于存放各自的文件。但实际上他们的文件都是放在同一个物理磁盘上的甚至同一个逻辑分区或者目录里，但是由于 Linux 的 用户管理 和 权限机制 ，不同用户不可以轻易地查看、修改彼此的文件

 - 查看用户
 who am i 
 who mom likes
 who -a
 who -d

 - 创建用户
在 Linux 系统里， root 账户拥有整个系统至高无上的权利，比如 新建/添加 用户。

root 权限，系统权限的一种，与 SYSTEM 权限可以理解成一个概念，但高于 Administrator 权限，root 是 Linux 和 UNIX 系统中的超级管理员用户帐户，该帐户拥有整个系统至高无上的权力，所有对象他都可以操作，所以很多黑客在入侵系统的时候，都要把权限提升到 root 权限，用 Windows 的方法理解也就是将自己的非法帐户添加到 Administrators 用户组。更比如安卓操作系统中（基于 Linux 内核）获得 root 权限之后就意味着已经获得了手机的最高权限，这时候你可以对手机中的任何文件（包括系统文件）执行所有增、删、改、查的操作。

如何获取root权限
使用sudo命令
我们一般登录系统时都是以普通账户的身份登录的，要创建用户需要 root 权限，这里就要用到 sudo 这个命令了。不过使用这个命令有两个大前提，一是你要知道当前登录用户的密码，二是当前用户必须在 sudo 用户组

- sudo <cmd>可以以特权级别运行cmd命令，需要当前用户属于sudo组，且需要输入当前用户密码。
- su - <user>命令也是切换用户，同时环境变量也会跟着改变成目标用户的环境变量。
- su <user>可以切换到用户user，执行时需要输入目标用户的密码
```
$ sudo adduser lilei
$ su -l lilei
```

#### 用户组
在 Linux 里面每个用户都有一个归属（用户组），用户组简单地理解就是一组用户的集合，它们共享一些资源和权限，同时拥有私有资源，就跟家的形式差不多，你的兄弟姐妹（不同的用户）属于同一个家（用户组），你们可以共同拥有这个家（共享资源），爸妈对待你们都一样（共享权限），你偶尔写写日记，其他人未经允许不能查看（私有资源和权限）。当然一个用户是可以属于多个用户组的，正如你既属于家庭，又属于学校或公司。

- 查看自己属于哪些用户组
```
$ groups shiyanlou
$ cat /etc/group | sort
$ cat /etc/group | grep -E "shiyanlou"
```

- 将用户加入sudo用户组
默认情况下新创建的用户是不具有 root 权限的，也不在 sudo 用户组，可以让其加入sudo用户组从而获取 root 权限。
```
$ su -l lilei
$ sudo ls
```


```
会提示 lilei 不在 sudoers 文件中，意思就是 lilei 不在 sudo 用户组中，至于 sudoers 文件（/etc/sudoers）你现在最好不要动它，操作不慎会导致比较麻烦的后果。

使用 usermod 命令可以为用户添加用户组，同样使用该命令你必需有 root 权限，你可以直接使用 root 用户为其它用户添加用户组，或者用其它已经在 sudo 用户组的用户使用 sudo 命令获取权限来执行该命令

这里我用 shiyanlou 用户执行 sudo 命令将 lilei 添加到 sudo 用户组，让它也可以使用 sudo 命令获得 root 权限

$ su shiyanlou 此处需要输入shiyanlou用户密码，可以点击右侧工具栏中的“SSH直连”查看
$ groups lilei
$ sudo usermod -G sudo lilei
$ groups lilei
然后你再切换回 lilei 用户，现在就可以使用 sudo 获取 root 权限了。
```

- 删除用户
```
$ sudo deluser lilei --remove-home
```

#### Linux文件权限

- 查看文件
```
$ ls -l
```
[](https://dn-anything-about-doc.qbox.me/linux_base/3-9.png/logoblackfont)
[](https://dn-anything-about-doc.qbox.me/linux_base/3-10.png/logoblackfont)
    - 文件类型

```
查看文件详情
ls -l 或 ll
查看所有文件
ls -a
查看文件大小
ls -sh 或 ls -lh
查看文件大小，按序排列
ls -sSh
```

```
查看文件所有者
ll filename

变更文件所有者
sudo chown <username> filename

修改文件访问权限

chmod 700 filename//只有用户才能访问

chmod gou+rwm filename//用户、用户组和其他用户均可读写执行；


```

---

### Linux 目录结构和文件基本操作

#### Linux目录结构
 Linux 的目录与 Windows 的目录的区别，或许对于一般操作上的感受来说没有多大不同，但从它们的实现机制来说是完全不同的。

 一种不同是体现在目录与存储介质（磁盘，内存，DVD 等）的关系上，以往的 Windows 一直是以存储介质为主的，主要以盘符（C 盘，D 盘...）及分区来实现文件管理，然后之下才是目录，目录就显得不是那么重要，除系统文件之外的用户文件放在任何地方任何目录也是没有多大关系。所以通常 Windows 在使用一段时间后，磁盘上面的文件目录会显得杂乱无章（少数善于整理的用户除外吧）。然而 UNIX/Linux 恰好相反，UNIX 是以目录为主的，Linux 也继承了这一优良特性。 Linux 是以树形目录结构的形式来构建整个系统的，可以理解为树形目录是一个用户可操作系统的骨架。虽然本质上无论是目录结构还是操作系统内核都是存储在磁盘上的，但从逻辑上来说 Linux 的磁盘是“挂在”（挂载在）目录上的，每一个目录不仅能使用本地磁盘分区的文件系统，也可以使用网络上的文件系统。举例来说，可以利用网络文件系统（Network File System，NFS）服务器载入某特定目录等。

> Linux目录结构复杂在于系统的正常运行是以目录结构为基础的，对于初学者来说里面大部分目录都不知道其作用；
> 简单在于其中大部分目录结构是规定好了（FHS 标准），是死的，当你掌握后，你在里面的一切操作都会变得井然有序。

遵循的规范是FHS，即FHS（英文：Filesystem Hierarchy Standard 中文：文件系统层次结构标准），多数 Linux 版本采用这种文件组织形式，FHS 定义了系统中每个区域的用途、所需要的最小构成的文件和目录同时还给出了例外处理与矛盾处理。

FHS 定义了两层规范，第一层是， / 下面的各个目录应该要放什么文件数据，例如 /etc 应该要放置设置文件，/bin 与 /sbin 则应该要放置可执行文件等等。

第二层则是针对 /usr 及 /var 这两个目录的子目录来定义。例如 /var/log 放置系统登录文件、/usr/share 放置共享数据等等
[](https://dn-anything-about-doc.qbox.me/linux_base/4-1.png/logoblackfont)

，FHS 是根据以往无数 Linux 用户和开发者的经验总结出来的，并且会维持更新，FHS 依据文件系统使用的频繁与否以及是否允许用户随意改动（注意，不是不能，学习过程中，不要怕这些），将目录定义为四种交互作用的形态，如下表所示：
[](https://dn-anything-about-doc.qbox.me/document-uid18510labid59timestamp1482919171956.png/wm)

- 目录路径
路径就是你要去哪儿的路线，如果你想进入某个具体的目录或者想获得某个目录的文件（目录本身也是文件）那就得用路径来找到了。

```
切换目录
cd .
cd ../
cd - 表示上一次所在目录
cd ~ 表示当前用户的home目录，即/home/teren
```

相对路径和绝对路径

---

#### Linux文件的基本操作
- 新建空白文件
```
touch:主要作用是来更改已有文件的时间戳的（比如，最近访问时间，最近修改时间）
也可用来创建文件
```

- 新建文件夹
```
mkdir teren

创建包含多级目录的文件夹
mkdir -p  father/son/grandson
```

- 复制命令
```
$ cp test father/son/grandson
复制文件夹：
$ cp -r father family
```

- 移动或重命名文件
```
mv file father/son/grandson
重命名
mv file file2
批量重命名
# 使用通配符批量创建 5 个文件
$ touch file{1..5}.txt

# 批量将这 5 个后缀为 .txt 的文本文件重命名为以 .c 为后缀的文件
$ rename 's/\.txt/\.c/' *.txt

# 批量将这 5 个文件，文件名改为大写
$ rename 'y/a-z/A-Z/' *.c
```

- 查看文件
这两个命令都是用来打印文件内容到标准输出（终端）,其中cat为正序显示，tac倒序显示。
标准输入输出：当我们执行一个 shell 命令行时通常会自动打开三个标准文件，即标准输入文件（stdin），默认对应终端的键盘；标准输出文件（stdout）和标准错误输出文件（stderr），这两个文件都对应被重定向到终端的屏幕，以便我们能直接看到输出内容。进程将从标准输入文件中得到输入数据，将正常输出数据输出到标准输出文件，而将错误信息送到标准错误文件中
```
cat demo
cat -n demo//显示行数
nl demo//添加行号并打印，更加专业
```

```
-b : 指定添加行号的方式，主要有两种：
    -b a:表示无论是否为空行，同样列出行号("cat -n"就是这种方式)
    -b t:只列出非空行的编号并列出（默认为这种方式）
-n : 设置行号的样式，主要有三种：
    -n ln:在行号字段最左端显示
    -n rn:在行号字段最右边显示，且不加 0
    -n rz:在行号字段最右边显示，且加 0
-w : 行号字段占用的位数(默认为 6 位)
```
[](https://dn-anything-about-doc.qbox.me/linux_base/4-11.png/logoblackfont)

```
more filename
head
tail
tail -n 1 filname

```

- 查看文件类型
```
file filename
```


- 打开监视之眼
```
nohup xeyes &
```



---

### 环境变量与文件查找

#### 环境变量

- 变量
```
要解释环境变量，得先明白变量是什么，准确的说应该是 Shell 变量

变量>>用于记录值的符号>>为了便于运算和处理，根据值的类型划分变量的类型

shell变量也是如此，有不同的类型和可以参与运算和有作用域的限定
```

```
//变量的创建
$ declare tmp
$ tmp=hello
$ echo $temp

```

- 环境变量
```
环境变量就是作用域比自定义变量要大，如Shell 的环境变量作用于自身和它的子进程。
```

```
在所有的 UNIX 和类 UNIX 系统中，每个进程都有其各自的环境变量设置，且默认情况下，当一个进程被创建时，处理创建过程中明确指定的话，它将继承其父进程的绝大部分环境设置。Shell 程序也作为一个进程运行在操作系统之上，而我们在 Shell中运行的大部分命令都将以 Shell 的子进程的方式运行。
```
[](https://dn-anything-about-doc.qbox.me/linux_base/5-2.png/logoblackfont)

```

$ temp=shiyanlou
$ echo $temp
$ shiyanlou
$ zsh//新建子进程
$ echo $temp
$ //无值显示
$ exit
$ export temp//导出temp为环境变量
$ zsh//实验楼的shell为zsh
$ echo $temp
$ shiyanlou
注意：为了与普通变量区分，通常我们习惯将环境变量名设为大写
```


```

通常我们会涉及到的环境变量有三种：

当前 Shell 进程私有用户自定义变量，如上面我们创建的 temp 变量，只在当前 Shell 中有效。
Shell 本身内建的变量。
从自定义变量导出的环境变量

shell的内建环境变量
用户自定义变量
用户自定义变量的导出变量

```

```

也有三个与上述三种环境变量相关的命令，set，env，export。这三个命令很相似，都可以用于打印相关环境变量,区别在于涉及的是不同范围的环境变量
```


> 查看各类环境变量

```
$ temp=shiyanlou
$ export  temp_env=hello
$ export|sort > export.txt
$ env|sort > env.txt
$ set|sort>set.txt
$ vimdiff export.txt env.txt set.txt

```

关于环境变量，可以简单的理解成在当前进程的子进程是否有效，有效则为环境变量，否则不是

---

#### 命令的查找路径



[](https://dn-anything-about-doc.qbox.me/linux_base/5-3.png/logoblackfont)

我们在 Shell 中输入一个命令，Shell 是怎么知道在哪去找到这个命令然后执行的呢？这是通过环境变量PATH来进行搜索的，这个PATH里面就保存了Shell中执行的命令的搜索路径；

查看PATH环境变量的内容
```
$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
```

系统就会按照 PATH 中设定的路径按照顺序依次到目录中去查找，如果存在同名的命令，则执行先找到的那个。

以一个例子切入
```
创建一个 Shell 脚本文件：
$ vim hello_shell.sh

#!/bin/bash

for ((i=0; i<10; i++));do
    echo "hello shell"
done

exit 0
$ chmod 755 hello_shell.sh
$ ./hello_shell.sh
```

```
创建一个 C 语言"hello world"程序：
$ vim hello_world.c

#include <stdio.h>

int main(void)
{
    printf("hello world!\n");
    return 0;
}

$ gcc -o hello_world hello_world.c
```

```
在/home/shiyanlou创建
$ mkdir mybin
$ mv hello_shell.sh hello_world mybin/
$ cd mybin
$ ./hello_shell.sh
$ ./hello_world
```
[](https://dn-anything-about-doc.qbox.me/linux_base/5-6.png/logoblackfont)

但我们只能在特定目录下执行该脚本；

回到上一级目录，也就是shiyanlou家目录，当再想运行那两个程序时，会发现提示命令找不到，除非加上命令的完整路径，但那样很不方便，如何做到想使用系统命令一样执行自己创建的脚本文件或者程序呢？那就要将命令所在路径添加到PATH环境变量了。

- 添加自定义路径到“PATH”环境变量
在前面我们应该注意到PATH里面的路径是以：作为分割符，所以我们可以这样添加自定义路径：
```
$ PATH=$PATH:/home/shiyanlou/mybin
```
现在你就可以在其他任意目录执行那两个命令了（注意需要去掉前面的./）。你可能会意识到这样还并没有很好的解决问题，因为我给 PATH 环境变量追加了一个路径，它也只是在当前 Shell 有效，我一旦退出终端，再打开就会发现又失效了。有没有方法让添加的环境变量全局有效？或者每次启动 Shell 时自动执行上面添加自定义路径到 PATH 的命令？下面我们就来说说后一种方式——让它自动执行。

每个用户的 home 目录中有一个 Shell 每次启动时会默认执行一个配置脚本，以初始化环境，包括添加一些用户自定义环境变量等等。zsh 的配置文件是.zshrc，相应 Bash 的配置文件为.bashrc。它们在etc下还都有一个或多个全局的配置文件，不过我们一般只修改用户目录下的配置文件。

我们可以简单的使用下面命令直接添加内容到.zshrc中：

```
$ echo "PATH=$PATH:/home/shiyanlou/mybin" >> .zshrc
```

上述命令中>>表示将标准输出以追加的方式重定向到一个文件中，注意前面用到的>是以覆盖的方式重定向到一个文件中，使用的时候一定要注意分辨。在指定文件不存在的情况下都会创建新的文件。


- 变量的删除

```
$ unset temp
```

- 如何让环境变量立即生效

```
$ source .zshrc
```

##### 搜索文件

```
$ whereis who -b -m -s
whereis只能搜索二进制文件(-b)，man帮助文件(-m)和源代码文件(-s)。如果想要获得更全面的搜索结果可以使用locate命令。
```

```
$ locate /etc/sh
注意,它不只是在 etc 目录下查找并会自动递归子目录进行查找
$ locate /usr/share/\*.jpg
```

```
which小而精
which本身是 Shell 内建的一个命令，我们通常使用which来确定是否安装了某个指定的软件，因为它只从PATH环境变量指定的路径中去搜索命令
```

```
find精而细
find应该是这几个命令中最强大的了，它不但可以通过文件类型、文件名进行查找而且可以根据文件的属性（如文件的时间戳，文件的权限等）进行搜索。find命令强大到，要把它将明白至少需要单独好几节课程才行，我们这里只介绍一些常用的内容。
```

---

《黑客帝国》电影里满屏幕代码的“数字雨”，在 Linux 里面你也可以轻松实现这样的效果，你只需要一个命令cmatrix。

需要先安装，因为 Ubuntu 没有预装：

$ sudo apt-get update;sudo apt-get install cmatrix

---

### 文件的打包与解压
先了解以下常见常用的压缩包文件格式，
```
简单介绍如下：

文件后缀名   说明
*.zip   zip程序打包压缩的文件
*.rar   rar程序压缩的文件
*.7z    7zip程序压缩的文件
*.tar   tar程序打包，未压缩的文件
*.gz    gzip程序(GNU zip)压缩的文件
*.xz    xz程序压缩的文件
*.bz2   bzip2程序压缩的文件
*.tar.gz    tar打包，gzip程序压缩的文件
*.tar.xz    tar打包，xz程序压缩的文件
*tar.bz2    tar打包，bzip2程序压缩的文件
*.tar.7z    tar打包，7z程序压缩的文件
讲了这么多种压缩文件，这么多个命令，不过我们一般只需要掌握几个命令即可，包括zip,rar,tar。下面会依次介绍这几个命令及对应的解压命令。
```

#### 压缩与解压
- zip压缩与解压
```
//压缩，-r参数表示递归打包包含子目录的全部内容，-q参数表示为安静模式，即不向屏幕输出信息，-o，表示输出文件，需在其后紧跟打包输出文件名

$ zip -r -q -o shiyanlou.zip /home/shiyanlou

//设置压缩级别为9和1（9最大,1最小），重新打包：
//最后那个-x是为了排除我们上一次创建的 zip 文件
$ zip -r -9 -q -o shiyanlou_9.zip /home/shiyanlou -x ~/*.zip
$ zip -r -1 -q -o shiyanlou_1.zip /home/shiyanlou -x ~/*.zip
//-h是将文件大小以k/m形式显示，-d查看文件深度，~包括当前文件夹，sort按照降序罗列
$ du -h -d 0 *.zip ~ | sort

//创建加密压缩包
$ zip -r -e -o shiyanlou_encrytion.zip /home/shiyanlou

```

```
关于zip命令，因为 Windows 系统与 Linux/Unix 在文本文件格式上的一些兼容问题，比如换行符（为不可见字符），在 Windows 为 CR+LF（Carriage-Return+Line-Feed：回车加换行），而在 Linux/Unix 上为 LF（换行），所以如果在不加处理的情况下，在 Linux 上编辑的文本，在 Windows 系统上打开可能看起来是没有换行的。如果你想让你在 Linux 创建的 zip 压缩文件在 Windows 上解压后没有任何问题，那么你还需要对命令做一些修改：

$ zip -r -l -o shiyanlou.zip /home/shiyanlou
需要加上-l参数将LF转换为CR+LF来达到以上目的。
```

- 解压zip文件
```
$ unzip shiyanlou.zip
$ unzip -q shiyanlou.zip -d ziptest
//如果你不想解压只想查看压缩包的内容你可以使用-l参数：
$ unzip -l shiyanlou.zip

//如果有有包含中文的文档或以中文作为文件名的文件时默认会采用 GBK 或其它编码，而 Linux 上面默认使用的是 UTF-8 编码，如果不加任何处理，直接解压的话可能会出现中文乱码的问题（有时候它会自动帮你处理），为了解决这个问题，我们可以在解压时指定编码类型。

使用-O（英文字母，大写o）参数指定编码类型：

unzip -O GBK 中文压缩文件.zip
```

- rar的解压与压缩

- tar的打包、压缩与解压
```
//创建一个tar包
$ tar -cf shiyanlou.tar ~
//解压一个tar包
$ tar -xf shiyanlou.tar -C tardir
//只查看不解包文件
$ tar -tf shiyanlou.tar

//创建不同的压缩格式文件
//gizp
$ tar -czf shiyanlou.tar.gz ~
//解压
$ tar -xzf shiyanlou.tar.gz

压缩文件格式  参数
*.tar.gz    -z
*.tar.xz    -J
*tar.bz2    -j
```



---

### 文件系统操作与磁盘管理

```
因为本课程的定位为入门基础，尽快上手，故没有打算涉及太多理论内容，前面省略了关于 Linux 文件系统的一些基本知识，也因为我们是在线实验环境，所以也避开了很少一部分但又十分重要的关于硬件的内容，我们只能期待用户能够抱着提高自学能力的心态自己去补充相关的知识
```

#### 查看磁盘和目录的容量

```
//使用 df 命令查看磁盘的容量
$ df -h
```
[](https://dn-anything-about-doc.qbox.me/linux_base/7-2.png/logo)
```
//使用 du 命令查看目录的容量
$ du -h
```

- 创建虚拟磁盘
```
dd命令用于转换和复制文件，不过它的复制不同于cp
```

```
dd默认从标准输入中读取，并写入到标准输出中，但可以用选项if（input file，输入文件）和of（output file，输出文件）改变。
```

```
$ dd of=test bs=10 count=1
hello world
$ du -b test
$ cat test
```

```
$ dd if=~/test of=test2 bs=10 count=1 conv=ucase
```

- 使用dd命令创建虚拟镜像文件
```
从/dev/zero设备创建一个容量为 256M 的空文件：
$ dd if=/dev/zero of=virtual.img bs=1M count=256
$ du -h virtual.img
```
[](https://dn-anything-about-doc.qbox.me/linux_base/7-7.png/logoblackfont)

- 使用mkfs命令格式化磁盘
```
你可以在命令行输入 sudo mkfs 然后按下Tab键，你可以看到很多个以 mkfs 为前缀的命令，这些不同的后缀其实就是表示着不同的文件系统，可以用 mkfs 格式化成的文件系统。

我们可以简单的使用下面的命令来将我们的虚拟磁盘镜像格式化为ext4文件系统：

$ sudo mkfs.ext4 virtual.img
```
[](https://dn-anything-about-doc.qbox.me/linux_base/7-9.png/logoblackfont)


##### 使用mount命令挂载磁盘到目录树

用户在 Linux/UNIX 的机器上打开一个文件以前，包含该文件的文件系统必须先进行挂载的动作，此时用户要对该文件系统执行 mount 的指令以进行挂载。

Linux/UNIX 命令行的 mount 指令是告诉操作系统，对应的文件系统已经准备好，可以使用了，而该文件系统会对应到一个特定的点（称为挂载点）。挂载好的文件、目录、设备以及特殊文件即可提供用户使用。

我们先来使用mount来查看下主机已经挂载的文件系统：

$ sudo mount
[](https://dn-anything-about-doc.qbox.me/linux_base/7-10.png/logoblackfont)

输出的结果中每一行表示一个设备或虚拟设备,每一行最前面是设备名，然后是 on 后面是挂载点，type 后面表示文件系统类型，再后面是挂载选项（比如可以在挂载时设定以只读方式挂载等等）。

我们现在直接来挂载我们创建的虚拟磁盘镜像到/mnt目录：

$ mount -o loop -t ext4 virtual.img /mnt 
# 也可以省略挂载类型，很多时候 mount 会自动识别

# 以只读方式挂载
$ mount -o loop --ro virtual.img /mnt
# 或者mount -o loop,ro virtual.img /mnt
使用 umount 命令卸载已挂载磁盘

# 命令格式 sudo umount 已挂载设备名或者挂载点，如：
$ sudo umount /mnt

!!!磁盘分区不是非常了解

---


### 命令执行顺序控制与管道

一、命令执行顺序的控制

1.顺序执行多条命令

```
$ sudo apt-get update
# 等待——————————然后输入下面的命令
$ sudo apt-get install some-tool
# 等待——————————然后输入下面的命令
$ some-tool
```
这时你可能就会想要是我可以一次性输入完，让它自己去一次执行各命令就好了，这就是我们这一小节要解决的问题。

```
$ sudo apt-get update;sudo apt-get install some-tool;some-tool
# 让它自己运行
```

```
# 因为我们的环境的原因，每次新启动实验会清除系统恢复初始状态，所以需要手动更新软件包索引，以便我们安装时能找到相应软件包的源

sudo apt-get update
```

不太理解Linux中的&&和||

---

二、管道
管道是什么,管道是一种通信机制，通常用于进程间的通信（也可通过socket进行网络通信），它表现出来的形式就是将前面每一个进程的输出(stdout)直接作为下一个进程的输入(stdin)。

管道又分为匿名管道和具名管道（这里将不会讨论在源程序中使用系统调用创建并使用管道的情况，它与命令行的管道在内核中实际都是采用相同的机制）。我们在使用一些过滤程序时经常会用到的就是匿名管道，在命令行中由|分隔符表示，|在前面的内容中我们已经多次使用到了。具名管道简单的说就是有名字的管道，通常只会在源程序中用到具名管道。下面我们就将通过一些常用的可以使用管道的"过滤程序"来帮助你熟练管道的使用。

$ ls -al /etc | less
通过管道将前一个命令(ls)的输出作为下一个命令(less)的输入，然后就可以一行一行地看。

grep查询命令

sort排序命令

