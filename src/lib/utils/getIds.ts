export function getIds(data: string[]) {
    return data.map((el) => {
        const split = el.split('/');
        return split[split.length - 1];
    });
}
