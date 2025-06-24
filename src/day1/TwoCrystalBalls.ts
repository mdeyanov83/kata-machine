export default function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmont = Math.floor(Math.sqrt(breaks.lenght));

    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; j++) {

    }
}
