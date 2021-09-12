import { stringify } from "querystring";
import { Contest } from "../models/Contest";
import { Problem } from "../models/Problem";
import { fetchApi } from "./baseRequest";
import { getProblemsFromCustomIds } from "./problem";

export const getContestAsync = async (contestId: string) => {
    const data = await fetchApi(`/contests/${contestId}`);
    console.log(data)
    return new Contest(data);
}

export const getAllContests = async () => {
    const result = await fetchApi(`/contests`) as [];
    return result.map(data => new Contest(data));
}

export const getContestProblems = async (customIds: string[]) => {
    const problems = await getProblemsFromCustomIds(customIds)
    const result = new Map<string, Problem>();
    problems.map(problem => result.set(problem.customId, problem))
    return result;
}