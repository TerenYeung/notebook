/*
这里不能直接用
export = 'Hello Webpack!'

因为CommonJS使用
exports = module.exports

如果exports = 'Hello Webpack!'

那么在main.js使用require('./greet')，先显示为空对象；
*/
module.exports = 'Hello Webpack!'