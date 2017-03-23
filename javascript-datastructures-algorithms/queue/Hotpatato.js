/*
击鼓传花思想：
给定一个元素菜单和每次传递的次数；


 */


function hotPatato(menu,num){
	var queue = new Queue()
	menu.forEach((item)=>{
		queue.enqueue(item)
	})
	var eliminated = ''
	while(queue.size()>1){
		for(var i=0;i<num;i++){
			queue.enqueue(queue.dequeue())
		}
		eliminated = queue.dequeue()
		console.log(`${eliminated}在击鼓传花游戏中被淘汰；`)
	}
	return queue.dequeue()
}

let menu = ['foo','bar','baz','cat','dog']
let winner = hotPatato(menu,8)
console.log(`胜利者：${winner}`)


function Queue(){
	
	var items = []
	//向队列添加1个或多个元素，注意是在队列尾部添加
	this.enqueue = function(){
		var elems = [].slice.call(arguments)
		elems.map((item)=>{
			items.push(item)
		})
	}
	//删除队列第一个元素
	this.dequeue = function(){
		return items.shift()
	}
	//返回队列的第一个元素
	this.front = function(){
		return items[0]
	}
	this.isEmpty = function(){
		return items.length === 0
	}
	this.size = function(){
		return items.length
	}
	this.print = function(){
		console.log(items)
	}
}
