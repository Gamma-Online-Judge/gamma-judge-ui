import { Problem } from "../models/Problem";

const BASE_URL = 'https://df74e436-41b3-4675-99d3-756563dfe55d.mock.pstmn.io'

export const getAsync = async (endpoint: string, headers: Headers = new Headers()) =>{
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions)
    const data = await response.json();
    return data;
}

export const getProblemAsync = async (problemId: string): Promise<Problem> => {
    const response = await getAsync(`problems/${problemId}`);
    return new Problem(response);
}