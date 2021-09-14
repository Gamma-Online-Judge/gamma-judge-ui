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

export const getProblemsByCustomIds = async (customIds: string[]) => {
    const query = JSON.stringify({
        "filter": {
            "customId": {
                "$in": customIds
            }
        }
    })
    const requestOptions: RequestInit = {
        method: "POST",
        body: query
    }
    const result = await fetchApi(`/problems/query`, requestOptions) as [];
    return result.map(data => new Problem(data))
}

export const getProblemsMapByCustomId = async (customIds: string[]) => {
    const problems = await getProblemsByCustomIds(customIds);
    const result = new Map<string, Problem>();
    problems.map((problem) => result.set(problem.customId, problem));
    return result;
};