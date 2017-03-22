//队列遵循先进先出原则（FIFO）

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

var queue = new Queue()
queue.enqueue(1,2,3,4)
queue.print()
queue.dequeue()
queue.print()