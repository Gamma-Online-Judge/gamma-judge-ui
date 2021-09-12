import { Problem } from "../models/Problem";
import { fetchApi } from "./baseRequest";

export const getProblemAsync = async (problemId: string) => {
    const result = await fetchApi(`/problems/${problemId}`);
    return new Problem(result)
}

export const getAllProblems = async () => {
    const result = await fetchApi(`/problems`) as [];
    return result.map(data => new Problem(data))
}

export const getProblemsFromCustomIds = async (customIds: string[]) => {
    const query = JSON.stringify({
        "customId": {
            "$in": customIds
        }
    })
    const requestOptions: RequestInit = {
        method: "POST",
        body: query
    }
    const result = await fetchApi(`/problems/query`, requestOptions) as [];
    console.log(result)
    return result.map(data => new Problem(data))
}