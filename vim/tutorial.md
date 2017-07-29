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



