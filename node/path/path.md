#### path模块

> **path模块用于处理文件和文件夹路径**

##### 引入path模块
path模块输入node核心模块，所以使用
```
const path = require('path')
```

##### POSIX VS win32

- **POSIX**
POSIX表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX )，POSIX标准定义了操作系统应该为应用程序提供的接口标准；

有点难理解，okay直接上代码...

```
封装一下标准输出
function print(value){
    console.log(value)
}
```

path模块提供一个path.sep的api返回特定操作系统下的路径分隔符

```
print(path.posix.sep)// /
print(path.win32.sep)// \
```

通过上述代码，我们可以知道，path提供一个posix接口，该接口下的所以属性和方法都包括在path模块中，但是它提供的关于路径的标准是采用Unix或类Unix操作系统的标准

##### 路径模型

<pre>
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘

</pre>

上面是一个简单的路径模型，对于我们学习path模块很重要；

- **获取文件夹名——path.dirrame**

```
var dirname = path.dirname('/foo/bar/baz/index.html')
print(dirname) // /foo/bar/baz
```

- **获取base——path.basename()**

```
var basenameExt = path.basename('/foo/bar/baz/index.html')
var basename = path.basename('/foo/bar/baz/index.html','.html')
print(basenameExt) // index.html
print(basename) // index
```

- **获取扩展名——path.extname**

```
//path.extname(path)返回最后出现.的文件扩展名，如果路径
//最后部分没有.或是最后部分出现的.是在basename前，则返回空字符

var extname = path.extname('/foo/bar/baz/index.html')
var extname2Dot = path.extname('/foo/bar.baz.html')
var extnameLastDot = path.extname('/foo/bar.')
var extnameNoDot = path.extname('index')
var extnameFirstDot = path.extname('.index')
print(extname) // .html
print(extname2Dot) // .html
print(extnameNoDot) // ''
print(extnameFirstDot) // '' 
```

- **格式化路径——path.format**

```
//path.format(pathObj)
//将路径对象格式化为路径字符串
//如果给定dir,则忽略root
//如果给定base,则忽略name和ext
var pathObj = {
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    name: 'file',
    ext: '.txt'
}
var pathFormat = path.posix.format(pathObj)
print(pathFormat) // /home/user/dir/file.txt
```

- **路径解析为对象——path.parse**

```
var pathStr = '/home/user/dir/file.txt'
var pathParse = path.parse(pathStr)
print(pathParse)
/*
    {
        root: '/',
        dir: '/home/user/dir',
        base: 'file.txt',
        name: 'file',
        ext: '.txt'
    }
*/
```

- **路径解析为绝对路径——path.resolve**
path.resolve()将一系列路径片段解析为绝对路径
```
print(path.resolve())//如果没有路径片段，返回process.cwd()
path.resolve从右往左解析，只要拼接为绝对路径，就停止解析
print(path.posix.resolve('/foo','/bar','baz','hub'))// /bar/baz/hub
print(path.posix.resolve('/foo','./bar','baz'))// /foo/bar/baz
```

- **路径合并——path.join**
path.join()将路径片段单纯合并成路径字符串
```
print(path.posix.join('/foo','bar','baz/public','index.html'))
print(path.join(''))//.
print(path.posix.join('/foo','bar','.baz'))// /foo/bar/.baz
```

- **系统的分隔符——path.delimiter和path.sep**
path.delimiter返回路径之间的分隔符
```
//; for Windows
//: for POSIX
// print(process.env.PATH)
var pathGroup = process.env.PATH.split(path.delimiter)
print(pathGroup)
```

path.sep返回路径分隔符
```
// \ on  Windows
// / on POSIX
print(path.win32.sep) // \
print(path.posix.sep) // /
```

- **其他api**

path.isAbsolute()判断是否为绝对路径
```
print(path.isAbsolute('/home/user/index.html')) // true
print(path.isAbsolute('./index.html')) // false
print(path.isAbsolute('')) // false
```

path.normalize()将路径规范化
```
print(path.posix.normalize('/foo///bar///baz/index.html/..'))// /foo/bar/baz
```

path.relative(from,to)返回第二个路径相对于第一个路径的相对路径
```
var pathRelative = path.posix.relative('/foo/bar/baz','/foo/bar/hub/index.html')
print(pathRelative)// ../hub/index.html
```