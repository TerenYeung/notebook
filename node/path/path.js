function print(value){
	console.log(value)
}
//path模块用于处理文件和文件夹路径

//path模块属于node的核心模块
const path = require('path')

//POSIX
/*
	POSIX表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX ）
	POSIX标准定义了操作系统应该为应用程序提供的接口标准；
*/

//通过path.win32和path.posix，path模块可以自动识别不同操作系统下的路径格式
var pathWin = path.win32.basename('C:\\temp\\myfile.html')
var pathPosix = path.posix.basename('/tmp/myfile.html')
//console.log(pathWin)
//console.log(pathPosix)

//path.basename()返回路径下的最后一部分
//包括扩展名
var basenameExt = path.basename('/foo/bar/baz/index.html')
var basename = path.basename('/foo/bar/baz/index.html','.html')
// print(basenameExt)
// print(basename)

//path.delimiter，路径分隔符
//; for Windows
//: for POSIX
// print(process.env.PATH)
var pathGroup = process.env.PATH.split(path.delimiter)
// print(pathGroup)

//path.dirname(path)返回路径文件夹名
var dirname = path.dirname('/foo/bar/baz/index.html')
// print(dirname)

//path.extname(path)返回最后出现.的文件扩展名，如果路径
//最后部分没有.或是最后部分出现的.是在basename前，则返回空字符

var extname = path.extname('/foo/bar/baz/index.html')
var extname2Dot = path.extname('/foo/bar.baz.html')
var extnameLastDot = path.extname('/foo/bar.')
var extnameNoDot = path.extname('index')
var extnameFirstDot = path.extname('.index')
// print(extname)
// print(extname2Dot)
// print(extnameNoDot)
// print(extnameFirstDot)

/*
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
 */
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
// print(pathFormat)

//path.parse(path)返回路径对象
var pathStr = '/home/user/dir/file.txt'
var pathParse = path.parse(pathStr)
// print(pathParse)

//path.isAbsolute()判断是否为绝对路径
// print(path.isAbsolute('/home/user/index.html'))
// print(path.isAbsolute('./index.html'))
// print(path.isAbsolute(''))

//path.join()将路径片段合并成路径字符串
//print(path.posix.join('/foo','bar','baz/public','index.html'))
//print(path.join(''))//.
//print(path.posix.join('/foo','bar','.baz'))// /foo/bar/.baz

//path.normalize(path)
// print(path.posix.normalize('/foo///bar///baz/index.html/..'))// /foo/bar/baz

//path.relative(from,to)返回相对于第一个路径的相对路径
var pathRelative = path.posix.relative('/foo/bar/baz','/foo/bar/hub/index.html')
// print(pathRelative)// ../hub/index.html

//path.resolve()将一系列路径片段解析为绝对路径
// print(path.resolve())//如果没有路径片段，返回process.cwd()
//path.resolve从右往左解析，只要拼接为绝对路径，就停止解析
// print(path.posix.resolve('/foo','/bar','baz','hub'))// /bar/baz/hub
// print(path.posix.resolve('/foo','./bar','baz'))// /foo/bar/baz

//path.sep返回系统平台特定的路径分隔符
// \ on  Windows
// / on POSIX
//print(path.win32.sep) // \
//print(path.posix.sep) // /