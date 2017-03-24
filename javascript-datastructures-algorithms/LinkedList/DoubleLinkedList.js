function DoubleLinkedList(){
	// 每个双向链表包括元素、上一个节点和下一个节点
	var Node = function(elem){
		this.elem = elem
		this.next = null
		this.prev = null
	}
	var length = 0,
		head = null,
		tail = null
	//在任意位置插入节点
	this.insert = function(position,elem){
		if(position>=0 && position <= length){
			var node = new Node(elem),
				current = head,
				index = 0
			if(position === 0){
				//往双向链表第一项添加节点
				if(!head){
					head = node
					tail = node
				}else{
					
					head = node

				}
			}else if (position === length){
				//往双向链表的最后一项添加节点
			}else{
				//往双向链表任意一项添加节点
			}

		}else{
			return false
		}
	}
}