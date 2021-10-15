import { Contest } from "../models/Contest";
import { api } from "./axiosBase";

export const getContestAsync = async (contestId: string) => {
    const result = await api.get(`/contests/${contestId}`);
    return new Contest(result.data);
}

export const getAllContests = async (limit: number, skip: number) => {
    const result = await api.get(`/contests?limit=${limit}&skip=${skip}`);
    const contestsData = result.data as []
    return contestsData.map(data => new Contest(data))
}

export const getContestsAsync = async (contestsIds: string[]) =>
    Promise.all(contestsIds.map(getContestAsync))

