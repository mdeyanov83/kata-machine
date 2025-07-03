function hasUnivisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;
    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) {
            continue;
        }
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }
    return idx;
}


export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList): number[] {



    const seen = new Array(arr.length).fill(false);
    const dist = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnivisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);

        
    }

}

