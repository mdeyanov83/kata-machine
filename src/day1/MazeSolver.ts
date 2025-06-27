const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // 1. Base Case
    // off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >+ maze.length) {
        return false;
    }

    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // reached the end
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    // if seen
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 recurse
    // pre
    path.push(curr);

    // recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x,y] = dir[i];
        walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y,
        },)
    }

    // post
    path.pop();



}


}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}
