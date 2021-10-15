import { Problem } from "../models/Problem";
import { api } from "./axiosBase";

export const getProblemAsync = async (problemId: string) => {
    const result = await api.get(`/problems/${problemId}`);
    return new Problem(result.data)
}

export const getAllProblems = async (limit: number, skip: number) => {
    const result = await api.get(`/problems?limit=${limit}&skip=${skip}`);
    const problemsData = result.data as []
    return problemsData.map(data => new Problem(data))
}

export const getProblemsAsync = async (problemsIds: string[]) =>
    Promise.all(problemsIds.map(getProblemAsync))