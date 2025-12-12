function solution(a, b) {
    const n = a.length;
    let inDegreeMap = new Map();
    let outDegreeMap = new Map();
    let nextMap = new Map();
    // 確認每個節點的的degree是否符合條件
    for (let i = 0; i < n; i++) {
        const from = a[i];
        const to = b[i];
        if (nextMap.has(from)) return false;
        nextMap.set(from, to);

        let currentOutDegree = outDegreeMap.get(from) || 0;
        let currentInDegree = inDegreeMap.get(to) || 0;
        currentOutDegree += 1;
        currentInDegree += 1;
        if (currentInDegree > 1 || currentOutDegree > 1) return false;
        outDegreeMap.set(from, currentOutDegree);
        inDegreeMap.set(to, currentInDegree);
    }
    // 檢查是否有遺漏的node
    for (let node = 1; node <= n; node++) {
        if ((inDegreeMap.get(node) || 0) !== 1) return false;
        if ((outDegreeMap.get(node) || 0) !== 1) return false;
    }
    // 檢查是否形成單一cycle
    let visited = new Set();
    let startNode = a[0];
    let currentNode = startNode;
    for (let i = 0; i < n; i++) {
        if (visited.has(currentNode)) return false;
        visited.add(currentNode);
        currentNode = nextMap.get(currentNode);
    }
    return visited.size === n && currentNode === startNode;
}

// Example usage:
console.log(solution([1, 2], [2, 1])); // true
console.log(solution([1, 1, 2], [2, 2, 1])); // false