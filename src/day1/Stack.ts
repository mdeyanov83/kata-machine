type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private: head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} ad Node<T>;

        this.length++;
        if (!this.head) {
            this.head =
        }
    }

    pop(): T | undefined {

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
