//创建一个类表示栈
//function Stack(){}

//声明一种数据结构保存栈元素
//var items=[]

//为栈声明一些方法
/*
push: 添加一个或多个新元素到栈顶
pop: 移除栈顶元素，返回被移除的元素
peek: 单纯返回栈顶元素
isEmpty: 判断是否为空栈
clear: 移除所有栈中元素
size: 返回栈中元素个数
*/
/*
this.push = function(elem){
	items.push(elem)
}

this.pop = function(){
	return items.pop()
}

this.peek = function(){
	return items[items.length-1]
}

this.isEmpty = function(){
	return items.length === 0
}

this.clear = function(){
	items = []
}

this.size = function(){
	return items.length
}

this.print = function(){
	console.log(items.toString())
}
*/
function Stack(){

	var items = []

	this.push = function(elem){
		items.push(elem)
	}

	this.pop = function(){
		return items.pop()
	}

	this.peek = function(){
		return items[items.length-1]
	}

	this.isEmpty = function(){
		return items.length === 0
	}

	this.clear = function(){
		items = []
	}

	this.size = function(){
		return items.length
	}

	this.print = function(){
		console.log(items.toString())
	}	
}
/*
var stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
console.log(stack.peek())
console.log(stack.size())
stack.print()
stack.pop()
stack.print()
*/

//栈的应用，进制转换——十进制转N进制

function baseConverter(decNumber,base){
	var remStack = new Stack(),
		rem,
		baseString = '',
		digits = '0123456789ABCDEF'

	while(decNumber > 0){
		rem = Math.floor(decNumber % base)
		remStack.push(rem)
		decNumber = Math.floor(decNumber / base)
	}
	while(!remStack.isEmpty()){
		baseString += digits[remStack.pop()]
	}
	console.log(baseString)
	return baseString
}
baseConverter(112312312,2)
baseConverter(12312321,16)