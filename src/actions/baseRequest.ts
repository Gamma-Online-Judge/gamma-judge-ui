const BASE_URL = 'http://localhost:3001'

export const fetchApi = async (url: string, requestOptions?: RequestInit) => {
    const response = await fetch(`${BASE_URL}${url}`, requestOptions);
    return await response.json();
}