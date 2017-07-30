# VIM 的哲学
VIM 基于模式编辑的哲学，在不同的模式下键位有不同的含义。

你可以在：
normal mode 下浏览文件；
insert mode 下插入文本；
visual mode 下选取行；
command-line mode 下执行命令；

## 从vimtutor 入手

LESSION 1

Lession 1.1 MOVING THE CURSOR
h, j, k, l 方向键

Lession 1.2 EXITING VIM
<ESC> to normal mode;
type :q! force to quit without saving anything;


Lession 1.3 TEXT EDITING - DELETION
x to delete a character;

Lession 1.4 TEXT EDITING - INSERTION
i to insert text;
a to append text after the cursor;

Lession 1.5 TEXT EDITING - APENDING
A to append text in that line;
I to insert text in the beginning of the line;

Lession 1.6 EDITING A FILE
use :wq to save a file and exit

---

LESSION 2 DELETION COMMANDS 

dw to delete a word;

d$ to delete to the end of the line;

- OPERATORS AND MOTIONS

operators 是操作符，表明对文本操作的命令类型，如d, c, r, x, p等；

motions 是行动符，是对操作符的修饰，如dap，删除整段文本，常见的行动符有：
b, e, w, 0, $, gg, G等；

```
 operator [number] motion
 operation：想要做什么，如d；
 [number]：重复范围的次数，如2;
 motion：操作符的作用范围，如w;
 d2w;
```

- 撤销与反撤销

u 撤销最后一步命令，U 撤销一整行的命令；

CTRL-R 反撤销；

---

LESSION 3

Lession 3.1 THE PUT COMMAND

p to paste the text after the cursor;

Lession 3.2 THE REPLACE COMMAND

type r to replace the character at the cursor in the normal mode;

type R to replace more than one character;

Lession 3.3 THE CHANGE OPERATOR

type c to change the text at the cursor in the insert mode;

r vs c :
r 操作符通常用于单个字符的替换，并且不会进入 insert mode;
c 操作符通常用于复杂文本的替换，会进入 insert mode;

---

LESSION 4

Lession 4.1 FILE STATUS AND CURSOR LOCATION

CTRL-G to see the status of file;

gg to move the start of the file;

G to move the bottom of the file;

Lession 4.2 THE SEARCH COMMAND

/ into search pattern mode
? intio search paatern mode but in the opposite direction

type n to the next one
type N to the previous one

type CTRL-G to display the file status;

Lession 4.3 MATCHING PARENTHESES SEARCH

type % to find a matching ), ], or }

Lession 4.4 THE SUBSTITUTE COMMAND

type :s/old/new/ to replace old to new inthe first matched word;

type :s/old/new/g to replace in the line;

type :1,10s/old/new/g to replace between num-one to num-ten line;

type :%s/old/new/g to replace in the file;

type :%s/old/new/gc to replace int he file with a prompt;

---

LESSION 5

Lession 5.1 HOW TO EXECUTE AN EXTERNAL COMMAND

: 进入 command-line mode
:! 可以在外部执行 shell 执行后返回 vim；

Lession 5.3 SELECTING TEXT TO WRITE

v 5G to select 5 line of text;

press : and then will see '<,'>;

press w TEST to write content into TEST;

Lession 5.4 RETRIEVING AND MERGING FILES

:r <filename> to retrive content from file;

the content will display on current vim;

---

LESSION 6

Lession 6.1 THE OPEN COMMAND

o to open up a line below the cursor and place you in insert mode;

O to open up a line above the cursor in insert mode;

Lession 6.4 COPY AND PASTE TEXT

type y to copy text;

type p to paste text;

Lession 6.5 SET OPTION

set an option to search

:set ic to ignore case;

:set hls is (hlsearch and incsearch) to higtlight and instantly find the result;

:noh to kill the highlight the result;

prepend "no" to switch an option off: :set noic

---

LESSION 7

Lession 7.1 GETTING HELP

type :help to get help

Lession 7.3 COMPLETION

CTRL-W to jump to another window;

in the : mode, user CTRL-D, will show a list of commands, use <Tab> to complete the command;

---

## 基础

- Buffers, windows, tabs

每次文本都作为缓冲区的一部分显示，文件的变动会同步到磁盘上；

窗口是buffers上一层的视图，将同一个窗口拆分时，它们还是在同一个缓冲区；

tab page 是窗口的集合，

- Active, loaded, listed, named buffers

vim filename 就将文件内容 loaded into buffer;

当 :w 之后，就可以将 the content of buffer 同步到磁盘；

buffer 有 active buffer 和 hidden buffer，active buffer 就是处于激活态的窗口；

:ls 可以展示当前所有的 listed 的 buffers，:ls! 展示所有的 buffers；

- Argument list

全局缓冲区列表可以展示当前所有窗口打开的文件；

也可以通过参数列表，去操作不同的文件；

:args
:next
:previous
:first
:last
:h argument-list

- mappings

按键映射

[按键映射](https://github.com/wsdjeg/vim-galore-zh_cn#%E6%8C%89%E9%94%AE%E6%98%A0%E5%B0%84)

映射占位符 

- Registers 寄存器

[寄存器](https://github.com/wsdjeg/vim-galore-zh_cn#%E5%AF%84%E5%AD%98%E5%99%A8)

- Ranges

与 normal mode 的文本的范围处理有一定的类似之处，Rages 文本处理是在 command-line mode 下进行的；

:1,$d
:.,5d
:.,+3d
:/^foo/, $delete

注意的是，,和;都可以表示返回，a,b 是以 b 作为当前行参考，a;b 是以 a 作为当前行参考;

- Marks

normal mode to type m{a-zA-Z} to mark a position;

type '{mark} to jump to the position of mark;

:delm {mark} to delete a mark

detail see :h mark-motions

[marks](https://github.com/wsdjeg/vim-galore-zh_cn#%E6%A0%87%E6%B3%A8)

- Autocmds

自动命令就是在使用 Vim 的时候会发出一系列的事件，可以针对这些事件执行回调函数；

:h aotocmd-events-abc to read the autocmd events;

- Changelist and Jumplist

:jumps
:changes

- Undo Tree

Vim 采用 tree 数据结构存储内容变更的历史记录；

有两种方式遍历这个树结构，按分支遍历，按时间遍历；

u and CTRL-R 是按分支遍历；

g- and g+ 是按时间遍历；

---

## HELP

如何获取 VIM 的内建帮助文本？

:h

- 关于帮助主题的简单规则

	- 使用单引号文本表示 options，:h 'textwidth'
	- VimL 函数以 () 结尾，:h reverse()
	- command-line 的 命令 以 : 开头，:h :echo
	- normal mode 的命令直接填，:h j


在 command-line type <c-d> 罗列出所有当前输入内容的帮助主题； 

如果不清楚具体:h 的内容，可以使用 :helpgrep keywords 去查找；

---

## TEMPORARY FILES

- backup files

在保存文件之前，Vim 会创建一个 backup file，如果保存成功，backup file 将被删除；

- swap files

当编辑文件时，未保存的变化结果将被写入 swap file;
获取当前 swap file 的文件名，:swapname;

- undo files

内容变更历史记录是保存在内存中的，在 Vim 退出时清空，如果想要让它持久化到磁盘，可设置:set undofile；


## 插件管理

- 代码折叠

zc 折叠代码
zo 展开代码

```
 set foldmethod=indent
 set foldmethod=syntax
 set foldmethod=marker
```
