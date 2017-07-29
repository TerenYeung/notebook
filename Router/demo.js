// 点击不同带hash #链接
// 监听hashchange事件
// 从location.hash获取当前url
// 映射到对应的回调函数，通常是渲染组件或是视图
function Router() {
  this.routes = {};
  this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function() {};
};

Router.prototype.refresh = function() {
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
};

Router.prototype.init = function() {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}


window.Router = new Router();
window.Router.init();
var content = document.querySelector('body');
// change Page anything

function changeBgColor(color) {
  content.style.backgroundColor = color;
}
Router.route('/', function() {
  changeBgColor('white');
});
Router.route('/orange', function() {
  changeBgColor('orange');
});
Router.route('/purple', function() {
  changeBgColor('purple');
});
