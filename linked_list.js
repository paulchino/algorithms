function Ll_node(val) {
	this.val = val;
	this.next = null;
}

function Linked_list() {
	this.head = null;
}

//------ add at end
Linked_list.prototype.addEnd = function(val) {
	var node = new Ll_node(val);
	if ( !this.head ) {
		//if linked list is empty
		this.head = node;
	} else {
		//append to the tail
		var track = this.head;
		while (track.next != null) {
			track = track.next;
		}
		track.next = node;
	}
}

//------ count 
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

//------ insert at position. position 1 is the start
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
	if (pos == 1 && this.head != null) {
		this.head = this.head.next;
		p.next = null;
	} else {
		var p = this.head, prev, counter = 1;	
		while (p != null && counter < pos) {
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

//------ 2.1 cracking_code 
Linked_list.prototype.remove_duplicates = function() {
	//empty or just one node
	if (this.head == null || this.head.next == null ) return ll;
	var hash = {};
	hash[this.head.val] = true;
	var prev = this.head, current = this.head.next
	while (current != null) {
		//check hash
		if (hash.hasOwnProperty(current.val)) {
			//skip the node
			prev.next = current.next;
		} else {
			//put in hash
			hash[current.val] = true;
		}
	prev = current;
	current = current.next
	}
}

//------- 2.2 cracking_code
// find the kth to last element of a single linked list
Linked_list.prototype.kth = function(k) {
	//find number of elements in ll
	var length = this.count(), count = 1;

	//console.log(count);
	if ( k > length ) {
		console.log("out of bounds");
		return
	}

	var position = this.head;
	while ( count < length - k ) {
		//move head
		position = position.next;
		count++;
	}
	return position.val;
}


var list = new Linked_list;
list.addEnd(2);
list.addEnd(3);
list.addEnd(6);
list.insert(1,100);
list.addEnd(2);