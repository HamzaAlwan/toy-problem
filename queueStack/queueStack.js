//Write a stack. Once you’re done, 
//implement a queue using two stacks to create FIFO behavior. 
//The queue should not have any storage separate from its stacks.


var Stack = function() {
	var storage = [];

	this.push = function(val){
		return storage.push(val)
	};

	this.pop = function(){
		return storage.pop(val)
	};

	this.size = function(){
		return storage.length
	};
};

var Queue = function() {

	var inbox = new Stack();
	var outbox = new Stack();

	this.enqueue = function(val){
		return storage.push(val)
	};

	this.dequeue = function(){
		return storage.shift()	
	};

	this.size = function(){
		return storage.length
	};
};