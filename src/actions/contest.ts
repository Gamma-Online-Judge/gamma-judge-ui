import { Contest } from "../models/Contest";
import { fetchApi } from "./baseRequest";

export const getContestAsync = async (problemId: string) => {
    return await fetchApi(`/contests/${problemId}`) as Contest;
}

export const getAllContests = async () => {
    return await fetchApi(`/contests`) as Contest[];
}