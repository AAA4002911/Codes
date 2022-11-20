function findLCA(root, n1, n2) {
    if (root == null) { return null }
    if (root.value == n1 || root.value == n2) { return root; }

    let ls = findLCA(root.left, n1, n2);
    let rs = findLCA(root.right, n1, n2);

    if (ls != null && rs != null) { return root }
    if (ls != null) { return ls }
    if (rs != null) { return rs }
}