Mercurial

一个Mercurial命令
hg command options para

查看版本
hg version

仓库是目录，里面包含历史的源代码和源代码的历史记录

克隆仓库，将生产一个完整的仓库副本
$ hg clone url

克隆仓库后，原本和副本都是独立的，二者修改不会产地，除非使用pull和push

查看仓库的历史记录，按时间顺序从近到远显示仓库中发生的变动事件

hg log

changeset:   1:82e55d328c8c
tag:         tip
user:        mpm@selenic.com
date:        Fri Aug 26 01:21:28 2005 -0700
summary:     Create a makefile

changeset:   0:0a04b987be5a
user:        mpm@selenic.com
date:        Fri Aug 26 01:20:50 2005 -0700
summary:     Create a standard "hello, world" program

显示结果表示：
1. 1个或多个改变集

2. changeset表示改变集

冒号前面的数字代表版本号;它是一种标识改变集的本地缩写.只是在你的本地仓库中这个版本号才有意义；

冒号后面的那个很长的十六进制串是 ChangeSetID; 它是标识改变集的全局唯一标识符, 在所有包含这个改变集的仓库中都相同. 如果你正在和其他人讨论某个改变集,请使用这个 ChangeSetID,而不是上面说的版本号

tag 是一个标签,可以理解成为一个改变集指定的名字.
名叫tip 的特殊标签总是表示，它是仓库中最后一个改变集。

parent 标志了改变集的父辈，当你从几个仓库合并而来的情况下，父辈有多个。
大多数情况只有一个父辈，它比目前的改变集旧。这是在我们例子中使用的。

hg log -v
hg log --debug


通过指定-v诊断输出选项来获得更多更详细的历史信息, 或者指定--debug选项来获得历史信息中的一切细节

---------------

在 Mercurial 开发实践中一个好的做法是把每个变更隔离在各自的仓库里
这样可以避免把不相关的代码混杂起来， 并且便于一个接一个的测试每一部分工作

也就是说每次修改代码时，都要给项目拷贝一份副本，并赋予描述性名字以说明这个仓库目的

万一我们被别的事情打扰，在创建变更集之后忘记了它里面有哪些变更，怎么办呢？ 这时候我们要用到status命令

hg status 
hg st

使用diff可以检查文件的实际改变
hg diff

放弃变更并重新开始
hg revert hello.c 
hg revert --all

revert重命名被编辑文件hello.c为hello.c.orig并恢复hello.c到它的未编辑状态

改变主意想要重用我们做的修改，我们只需要移除未编辑状态的hello.c然后重命名我们改过的hello.c.orig为hello.c

创建一个变更集的动作称为提交
hg commit


与别的仓库分享改变
如何把变更集从一个仓库传递到另一个仓库去

hg pull url
在 Pull 后，缺省情况下 Mercurial 不更新工作目录。这意味着虽然 仓库 现在有变更集， 但在工作目录中的 hello.c 文件仍然是Pull 之前老的内容。
hg update

hg merge将不同仓库的修改合并在一起，通常处理简单的合并

复杂的冲突：两个人同时更改同一个文件的同一段代码，然后必须给出处理的方法。这称之为冲突；处理这类冲突称之为合并。



