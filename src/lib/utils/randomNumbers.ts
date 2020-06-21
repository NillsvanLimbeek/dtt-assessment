export function randomNumbers(count: number, max: number) {
    // set only accepts unique values
    const numbers = new Set<number>();

    for (let i = 1; i <= count; i++) {
        numbers.add(Math.ceil(Math.random() * max));
    }

    return [...numbers];
}
