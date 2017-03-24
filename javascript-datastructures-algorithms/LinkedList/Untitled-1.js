//单向链表

//创建一个单向链表的类
function LinkedList(){
    //创建一个单向链表元素的类
    var Node = function(elem){
        this.elem = elem
        this.next = null
    }
    //初始化链表长度和首地址
    var length = 0,head = null
    
    //对链表增删改查操作都要从head开始寻址

    //向链表尾部添加元素，首先要获取head首地址，然后一步一步遍历到最后一个节点
    this.append = function(elem){
        //将传入元素初始化为Node实例
        var node = new Node(elem),current
        //如果首地址为空，即为空链表，则head直接指向该节点
        if(head === null){
            head = node
        }else{
            //如果首地址不为空，则遍历每一个节点的next属性，知道next指向空时，此时节点为最后一个节点
            current = head
            while(current.next){
                //只要当前节点的next属性存在，那么下一个节点就存在，将current设置为下一个节点
                current = current.next
            }
            //直到next指向空时，设置next指向先创建的node
            current.next = node
        }
        length++
    }
    //移除任意位置上的节点
    this.removeAt = function(position){
        //边界检测
        if(position >=0 && position < length){
            var current = head,
                previous,
                index = 0
            //若移除第一项，只需调整首指针
            if(position === 0){
                head = current.next
            }else{
                //从第0位开始遍历直到指定的删除位置
               while(index++<position){
                   //每次遍历，将当前节点变为上一个节点，下一个节点变为当前节点
                   previous = current
                   current = current.next
               }
               //一直到要删除的节点，此时调整该节点上一个节点的指针，让它直接指向该节点的下一个节点
               previous.next = current.next 
            }
            length--
            return current.elem
        }else{
            return null
        }
    }
    //从任意位置上插入节点
    this.insert = function(position,elem){
        //边界检测
        if(position>-1 && position < length){
            //创建一个节点实例
            var node = new Node(elem),
                current = head,
                previous,
                index = 0
                //如果往第一位添加节点
                if(position === 0){
                    //首地址调整至新节点
                    head = node
                    //新节点的next指向原来head指向的节点
                    node.next = current
                }else{
                    //遍历节点到指定位置
                    while(index++<position){
                        previous = current
                        current = current.next
                    }
                    //已经到了指定位置，将指定位置的上一个节点的next指向新节点，新节点的next指向当前节点
                    previous.next = node
                    node.next = current
                }
                //插入成功后，长度+1，返回true
                length++
                return true
        }else{
            return false
        }
    }
    //获取指定元素的下标
    this.indexOf = function(elem){
        var current = head,
            index = -1
        while(current){
            index++
            if(current.elem === elem){
                return index
            }
            current = current.next
        }
        return -1
    }
    //移除指定元素
    this.remove = function(elem){
        var index = this.indexOf(elem)
        return this.removeAt(index)
    }
    this.isEmpty = function(){
        return length === 0
    }
    this.size = function(){
        return length
    }
    this.getHead = function(){
        return head
    }
    this.print = function(){
        var current = head,
            array = []
        while(current){
            array.push(current.elem)
            current = current.next
        }
        console.log(array)
    }
}

var linkedList = new LinkedList()
linkedList.append('world')
linkedList.insert(0,'hello')
linkedList.append('teren')
linkedList.print()//['hello','world','teren']
linkedList.removeAt(2)//teren
console.log(linkedList.indexOf('hello'))//0
console.log(linkedList.getHead())//'hello'
linkedList.remove('world')//'world'
linkedList.print()
