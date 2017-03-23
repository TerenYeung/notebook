function LinkedList(){
	
	//创建一个链表节点的类
	var Node = function(elem){
		this.elem = elem
		this.next = null
	}
	//初始化链表长度和首地址
	var length = 0,head = null
	//向链表尾部添加元素，首先要获取head地址，然后一步一步遍历获取最后一个节点地址，将其next属性指向新节点
	this.append = function(elem){
		let node = new Node(elem),current
		if(head === null){
			head = node
		}else{
			current = head
			while(current.next){
				//遍历节点，不断找到下一个节点
				current = current.next
			}
			current.next = node
		}
		length++
	}
	this.removeAt = function(position){
		//检查边界
		if(position > -1 && position < length){
			var current = head,
				previous,
				index = 0
			//移除第一项
			//链表移除节点只需要调整指针
			if(position === 0){
				head = current.next
			}else{
				while(index++ < position){
					previous = current
					current = current.next
				}
				//调整上一个节点的next直接指向current.next
				previous.next = current.next
			}
			length--
			return current.elem

		}else{
			return null
		}
	}
	//找到位置的上一个节点和下一个节点，然后调整这两个节点的node.next
	this.insert = function(position,elem){
		//边界检测
		if(position > -1 && position < length){
			var node = new Node(elem),
				current = head,
				previous,
				index = 0
			if(position === 0){
				head = node
				node.next = current
			}else{
				while(index++ < position){
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node
			}
			length++
			return true

		}else{
			return false

		}
	}
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
		retrn head
	}
	this.print = function(){
		var current = head,
			arr = []
		while(current){
			arr.push(current.elem)
			current = current.next
		}
		console.log(arr)
	}
}
var linkedList = new LinkedList()
linkedList.append('hello')
linkedList.append('world')
linkedList.append(123456)
linkedList.print()
linkedList.removeAt(1)
linkedList.insert(0,'we')
linkedList.print()
console.log(linkedList.indexOf(123456))