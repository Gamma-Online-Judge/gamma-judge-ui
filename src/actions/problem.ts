import { Problem } from "../models/Problem";

const BASE_URL = 'http://localhost:3001'

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

export const getAllProblems = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {}
    };
    const response = await fetch(`${BASE_URL}/problems`, requestOptions);
    console.log('response', response)
    const responseJson = await response.json()
    console.log('responseJson', responseJson)
    return responseJson;
}