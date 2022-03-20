

1// at each node get left & right subtree height
const getHeight = (node) => { 
    if (!node) return -1;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

const isBalanced = (root) => {
    if (!root )return true;

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    const diff = Math.abs(leftHeight - rightHeight);

    if(diff > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
}