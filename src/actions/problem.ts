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