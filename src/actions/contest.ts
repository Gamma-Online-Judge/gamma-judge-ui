import { Contest } from "../models/Contest";
import { fetchApi } from "./baseRequest";

export const getContestAsync = async (problemId: string) => {
    const data = await fetchApi(`/contests/${problemId}`);
    return new Contest(data);
}

export const getAllContests = async () => {
    const result = await fetchApi(`/contests`) as [];
    return result.map(data => new Contest(data));
}