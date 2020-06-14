export async function fetchData<T>(request: RequestInfo): Promise<T> {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/${request}`,
        );
        const body = await response.json();
        return body;
    } catch (error) {
        throw new Error('Fetch failed...');
    }
}
