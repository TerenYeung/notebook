//优先队列
//优先队列的每一个元素既包含值又包含优先级
//根据元素的优先级进行排序，优先级高者排在前面
//如果优先级的值较小的元素排在前面，叫做最小优先队列

//创建一个优先队列的类
function PriorityQueue(){
    //创建一个优先队列
    var items = []
    //创建一个优先队列元素的类
    function QueueElement(value,prior){
        this.value = value
        this.prior = prior
    }
    //入队操作,给定入队元素的的值和优先级
    this.enqueue = function(value,prior){
        var queueElement = new QueueElement(value,prior)
        //先判断队列是否为空，若是直接入队
        if(this.isEmpty()){
            items.push(queueElement)
        }else{
            //如果队列不为空，则将该元素和队列每一个元素进行遍历比较优先级
            //将该元素插入比起优先级低一位的元素之前
            
            //设置一个状态锁，表示元素是否入列
            var added = false
            for(var i = 0; i<items.length;i++){
                if(queueElement.prior<items[i].prior){
                    items.splice(i,0,queueElement)
                    added = true
                    break
                }
            }
            //如果遍历之后发现优先级是最低，则直接push到队列最后
            if(!added){
                items.push(queueElement)
            }
        }
    }
    //出队操作，一样是队列的首元素先出
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
            console.log(`value: ${item.value},prior: ${item.prior}\n`)
        })
        // console.log(items)
    }
}

var priorQueue = new PriorityQueue()
priorQueue.enqueue('foo',2)
priorQueue.enqueue('bar',1)
priorQueue.enqueue('baz',3)
priorQueue.print()
/*
	value: bar, prior: 1
	value: foo, prior: 2
	value: baz, prior: 3
*/