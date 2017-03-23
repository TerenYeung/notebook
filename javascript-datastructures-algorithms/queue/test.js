//循环队列（击鼓传花）
function hotPotato(elems,num){
    var queue = new Queue()
    //将给定的元素传入队列
    elems.forEach((elem)=>{
        queue.enqueue(elem)
    })
    var eliminated = ''
    while(queue.size()>1){
        //给定传递花的次数
        for(var i=0; i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(`${eliminated}在击鼓传花游戏中被淘汰`)
    }
    //返回剩余最后一个元素
    return queue.dequeue()
}
var elems = ['foo','bar','baz','hub']
var winner = hotPotato(elems,8)
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
