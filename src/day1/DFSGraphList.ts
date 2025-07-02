function walk(Graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[]): boolean {

    if (curr === needle) {
        return true;
    }
    if (seen[curr]) {
        return false;
    }
    seen[curr] = true;

    // recurse
    // pre
    path.push(curr);

    // recurse
    const list = graph[curr];
    for (let i = 0; i < list.length; ++i) {
        const edge = list[i];
        if (walk(Graph, edge.to, needle, seen, path)) {
            path.push(edge.to);
            return true;
        }
    }


    // post
    path.pop();
    return false;


}


export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number): number[] | null {



}
