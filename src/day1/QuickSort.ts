function qs(arr: number[], lo: number, hi: number): void {

}

function partition(arr: number[], lo: number, hi: number): number {

    const pivot = arr[hi];
    let idx = lo - 1

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp
        }
    }
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}
