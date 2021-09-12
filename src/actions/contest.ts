import { Contest } from "../models/Contest";
import { fetchApi } from "./baseRequest";

export const getContestAsync = async (contestId: string) => {
    const data = await fetchApi(`/contests/${contestId}`);
    return new Contest(data);
}

export const getAllContests = async () => {
    const result = await fetchApi(`/contests`) as [];
    return result.map(data => new Contest(data));
}