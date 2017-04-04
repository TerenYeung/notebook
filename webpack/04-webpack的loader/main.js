//require('style-loader!css-loader!./style.css')

//使用webpack.config.js方式引入css
require('./style.css')

const greet = require('./greet')
document.write('Hello World\n');
document.write(greet);