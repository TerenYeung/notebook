//优先队列思想
//每个优先队列元素既包含值又包含优先级
//根据元素的优先级进行队列的排序，优先级高者排在前面
//如果优先级的值较小的元素排在前面，叫做最小优先队列

function PriorityQueue(){
	//定义一个数组作为队列的容器
	let items = []
	//利用构造模式创建一个类，从而实现创造实例对象功能
	function QueueElement(elem,prior){
		this.elem = elem
		this.prior = prior
	}
	//入队操作
	this.enqueue = function(elem,prior){
		let queueElement = new QueueElement(elem,prior)
		//首选判断队列是否为空，若是直接push
		if(this.isEmpty()){
			items.push(queueElement)
		}else{
			//如果队列不为空，则将该元素和队列每一个元素进行遍历比较其优先级
			//如果优先级比其中一个元素高，则插入该元素之前
			//数组的forEach没有break
			var added = false
			for(var i=0; i<items.length; i++){
				if(queueElement.prior<items[i].prior){
					items.splice(i,0,queueElement)
					var added = true
					break
				}
			}
			if(!added){
				items.push(queueElement)
			}
		}
	}
	this.dequeue = function(){
		return items.shift()
	}
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
		items.forEach((item)=>{

			console.log(`value: ${item.elem}, prior: ${item.prior}\n`)
		})
		// console.log(items)
	}
}

let priorityQueue = new PriorityQueue()
// console.log(priorityQueue.isEmpty())
priorityQueue.enqueue('foo',1)
priorityQueue.enqueue('baz',3)
priorityQueue.enqueue('bar',2)
priorityQueue.print()