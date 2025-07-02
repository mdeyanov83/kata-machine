export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    graph: WeightedAdjacencyMatrix;
    source: number;
    needle: number: number[] | null { }

    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < graph.length; ++i){
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }

    } whiile (q.length);

    if (prev[needle] === -1) {
        return [];
    }

    // build it backwards
    //
    let curr = needle;
    const out: number[] = [];

    whtle (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].contaat(out.reverse());
}
