import { Problem } from "../models/Problem";

const BASE_URL = 'http://localhost:3001'

const fetchJson = async (url: string, requestOptions?: RequestInit) => {
    const response = await fetch(url, requestOptions);
    return await response.json();
}

export const getProblemAsync = async (problemId: string): Promise<Problem> => {
    return await fetchJson(`${BASE_URL}/problems/${problemId}`);
}

export const getAllProblems = async () => {
    return await fetchJson(`${BASE_URL}/problems`);
}