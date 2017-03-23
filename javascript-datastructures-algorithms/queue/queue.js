//创建一个队列的类，队列遵循FIFO原则
function Queue(){
    //创建一个队列
    var items = []
    //入队操作，每次添加向队列的最后一个元素后添加
    this.enqueue = function(){
        var elems = [].slice.call(arguments)
        elems.map((elem)=>{
            items.push(elem)
        })      
    }
    //出队操作，每次删除元素，都是删除队列的第一个元素
    this.dequeue = function(){
        return items.shift()
    }
    //返回队列的首元素
    this.front = function(){
        return items[0]
    }
    //判断是否为空队列
    this.isEmpty = function(){
        return items.length === 0
    }
    //清空队列
    this.clear = function(){
        items = []
    }
    //队列元素个数
    this.size = function(){
        return items.length
    }
    //标准输出
    this.print = function(){
        console.log(items)
    }
}
var queue = new Queue()
queue.enqueue(1,2,3,4,5)//
queue.print()//[1,2,3,4,5]
queue.dequeue()//2
queue.print()//[2,3,4,5]
console.log(queue.front())//2
console.log(queue.size())//4