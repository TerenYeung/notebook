
class Stack{
	constructor() {
		this.items = []
	}
	push(elem){
		this.items.push(elem)
	}
	pop(elem){
		return this.items.pop()
	}
	peek(elem){
		return this.items[this.items.length-1]
	}
	isEmpty(){
		return this.items.length === 0
	}
	size(){
		return this.items.length
	}
	clear(){
		this.items = []
	}
	print(){
		console.log(this.items)
	}
}

var stack = new Stack()
stack.push(1)
stack.push('hello')
stack.print()
stack.pop()
stack.print()
console.log(stack.size())