
### 安装webpack

- 全局安装

```
$ npm i webapck -g
```

- 局部安装

```
$ npm i webpack -D
```


### loader

- url-loader

返回一个Data Url如果文件小于特定字节；

```

module.exports = {

}
```

### 01-一个文件的手动打包

一个简单的webpack命令，就可以把main.js入口文件打包成bundle.js打包文件

```
$ webpack main.js bundle.js
```

在浏览器打开index.html，看到显示效果；


### 02-多文件存在依赖关系的打包

使用CommonJS模块规范本在浏览器下无法运行，但通过webpack可以打包成浏览器识别的代码;


```
//main.js
const greet = require('./greet')
document.write('Hello World\n');
document.write(greet);

//greet.js
/*
这里不能直接用
export = 'Hello Webpack!'

因为CommonJS使用
exports = module.exports

如果exports = 'Hello Webpack!'

那么在main.js使用require('./greet')，先显示为空对象；
*/
module.exports = 'Hello Webpack!'
```
在浏览器打开index.html，看到显示效果；

通过webpack的打包机制，可以使用AMD、CommonJS、ES6等模块化编程方式实现模块化编程；

### 03-一个webpack的简单配置

每次输入

```
$ webpack main.js bundle.js
```
太麻烦，可以建立一个webpack.config.js对webpack进行配置


```
//webpack.config.js

module.exports = {
	entry:'./main.js', //入口文件
	output:{
		filename: './bundle.js' //打包文件
	}
}
```

然后直接输入

```
$ webpack
```
webpack就会自动将main.js打包成bundle.js

### 04-webpack的loader的使用

loader是一个资源文件的转换器，是一个函数，接手资源文件源码作为参数，并返回新的代码；

安装两个loader

```
$ npm i style-loader cssloader -D
```

style-loader是将css代码注入style标签

css-loader是将css代码中@import和url的资源文件像require方式引入并合并

新建style.css和font.css

```
//style.css
@import url('./font.css');

body {
	color: red;
}

//font.css
body {
	font-family: monospace;
	font-size: 20px;
}

//main.js中添加一句
require('style-loader!css-loader!./style.css')
```

```
$ webpack
```

上述代码执行顺序由右向左，将style.css的资源文件通过处理符“！”传给css-loader,css-loader查找style.css里面有没有@import和url，有的话采用require的方式引入资源并合并,然后在由style-loader处理添加入style标签；

如果存在每个需要引入css的文件都要在开头写一句
```
require('style-loader!css-loader!xxx.css')
```
那太麻烦了？

还记得03部分的webpack.config.js吗？我们可以在里面配置loader；

```
//webpack.config.js
module.exports = {
	entry: './main.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader']
			}
		]
	}
}

//main.js
require('./style.css')
```
```
$ webpack
```

直接搞定，每次直接引入css,webpack会自动读取配置文件中的module下的loaders，使用test字段进行正则匹配，如果文件是以css,那么使用style-loader和css-loader进行处理；

这样一来，通过webpack的loader机制，好像引入的任何资源就像引入js一样，直接使用

```
require('./xxx.css')
require('./yyy.png')
```
loader注重于将资源进行转换为bundle.js中的js代码，这个打包后的js代码在浏览器进行解析时会进行特定的处理而畅通无阻的运行，从而实现各种各样的资源都可以通过require等模块化方式引入；

### 05-webpack的plugin

webpack的plugin提供webpack的扩展功能，可以理解为loader是为各种资源转换为js代码而生，而plugin则提供除资源转换的其他功能；

以HtmlWebPackPlugin插件为例，讲讲webpack插件的使用；

在生产环境中常常会向静态文件的文件名加MD5戳（用于不同版本的标识），如bundle_[hash].js，这里的[hash]会在构建时，被该chunk的内容的MD5结果替换，只要内容发生改变则文件名改变；

因此，在index.html直接指定bundle.js就不太现实；

HtmlWebPackPlugin可以很好解决这一问题，它会自动生成一个几乎为空的页面并注入构建的结果文件路径，因此路径中包含动态内容也能较好处理；

总之，HtmlWebPackPlugin这个插件可以动态构建一个html页面；

安装plugin

webpack的插件有内置插件和第三方插件，内置插件直接在webpack.config.js中引入webpack进行配置

```
const webpack = require('webpack');
//直接引入BannerPlugin插件
webpack.BannerPlugin
```

安装第三方插件——HtmlWebpackPlugin

```
$ npm i html-webpack-plugin -D

//webpack.config.js
```

具体配置请看一下链接：
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

```
const webpack = require('webpack');
//直接引入BannerPlugin插件
//webpack.BannerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './main.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test5',
			filename: 'index.html',
		})
	]
}
```
现在不需要写index.html，直接运行webpack后就会动态构建html页面；

### 06-webpack的实时构建

前面虽然通过webpack.config.js省去了输入入口文件和出口文件的工序，但是
我们每次修改代码都要进行手动webpack，还是有点麻烦；

通过
```
$ webpack -w
```
会自动监听入口文件，根据构建得到的依赖关系，监听所有文件的改动；

但是我们还是需要不时的刷新页面，以看到页面更新后的效果，
通过

```
$ npm i webpack-dev-server -g
```
安装webpack的辅助开发与调试工具，实现自动刷新；

现在直接在该目录下运行

```
$ webpack-dev-server
```
就可以看到效果了；




