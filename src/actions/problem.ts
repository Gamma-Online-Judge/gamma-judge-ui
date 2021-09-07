import { Problem } from "../models/Problem";
import { fetchApi } from "./baseRequest";

export const getProblemAsync = async (problemId: string) => {
    return await fetchApi(`/problems/${problemId}`) as Problem;
}

export const getAllProblems = async () => {
    return await fetchApi(`/problems`) as Problem[];
}