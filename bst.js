//binary search tree

//3 Main operations, insert delete, and lookup

//1 how to create a bst without repeating
//2 how to print out
//3 determine if bst is real bst
//4 number of nodes
//5 max depth of tree


//create a node
function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

//Tree Constructor
function BinarySearchTree() {
	this.root = null;

	//insert node
	this.push = function(val) {
		if (!this.root) {
			//first node
			this.root = new Node(val);
			return
		}

		//tracker
		var currentNode = this.root;
		//create new node 
		var newNode = new Node(val);

		while(currentNode) {
			if (val < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return
				} else {
					currentNode = currentNode.left;
				}
			}
			else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return
				} else {
					currentNode = currentNode.right;
				}
			}
		} 
	}
}

//inorder transversal
function inorder(node) {
	if (node) {
		inorder(node.left);
		console.log(node.value);
		inorder(node.right);
	}
}

//find min value
function minBST(node) {
	if (!node) {
		return
	}

	if (node.left) {
		return minBST(node.left);
	}
	return node.value
}

//find max value
function maxBST(node) {
	if (!node) {
		return
	}

	if (node.right) {
		return maxBST(node.right)
	}
	return node.value
}

//find min depth of BST. 
//min depth defined by left and right left == null
function minDepth(root) {
	if ( root == null ) return 0;
	if ( root.left == null ) return minDepth(root.right) + 1;
	if ( root.right == null ) return minDepth(root.left) + 1;
	return Math.min(minDepth(root.right), minDepth(root.left)) + 1;
}


var exBST = new BinarySearchTree();
exBST.push(40);
exBST.push(25);
exBST.push(10);
exBST.push(32);
exBST.push(78);
exBST.push(-100);



