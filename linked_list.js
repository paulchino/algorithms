function Ll_node(val) {
	this.val = val;
	this.next = null;
}

function Linked_list() {
	this.head = null;

}

//add at end
Linked_list.prototype.addEnd = function(val) {
	var node = new Ll_node(val);
	if (!this.head) {
		//if linked list is empty
		this.head = node;
	} else {
		//appent to the tail
		var track = this.head;
		while (track.next != null) {
			track = track.next;
		}
		track.next = node;
	}
}

//count 
Linked_list.prototype.count = function() {
	var count = 0;
	if (this.head == null) return count;
	var track = this.head;
	while(track != null) {
		track = track.next;
		count++;
	}
	return count
}

//insert at position. position 1 is the start
Linked_list.prototype.insert = function(val, pos) {
	//3 cases - insert at beginning, insert at end, insert in the middle
	var node = new Ll_node(val);
	if (pos == 1 && this.head != null ) {
		//insert in front;
		node.next = this.head;
		this.head = node;
		return
	} else {
		var p = this.head, prev, counter = 1;
			while(p != null && counter < pos) {
				prev = p;
				p = p.next;
				counter++;
			}
			//this also handles the last element
			node.next = p;
			prev.next = node; 
	}
}

Linked_list.prototype.delete = function(pos) {
	//first 
	
	if (pos == 1 && this.head != null) {
		this.head = this.head.next;
		p.next = null;
	} else {
		var p = this.head, prev, counter = 1;	
		while(p != null && counter < pos) {
			counter++;
			prev = p;
			p = p.next;
		}
		if ( p == null) {
			console.log('position does not exist');
		} else {
			prev.next = p.next;
			p = null;
		}
	}
}




var list = new Linked_list;
list.addEnd(2);
list.addEnd(3);
list.addEnd(6);
list.insert(1,100);
list.delete(2);