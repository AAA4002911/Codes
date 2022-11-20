function mirror(root) {
    if (root == null) {return null}
    let ls = mirror(root.left);
    let rs = mirror(root.right);
    root.left = rs;
    root.right = ls;
    return root;
}