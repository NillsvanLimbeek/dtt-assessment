export function sortByString<T>(arr: T[], type: string) {
    return arr.sort((a: any, b: any) => {
        const objA = a[type].toUpperCase();
        const objB = b[type].toUpperCase();

        if (objA < objB) {
            return -1;
        }

        if (objA > objB) {
            return 1;
        }

        return 0;
    });
}
