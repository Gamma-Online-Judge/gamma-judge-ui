import { Contest } from "../models/Contest";
import { fetchApi } from "./baseRequest";

export const getContestAsync = async (contestId: string) => {
    const data = await fetchApi(`/contests/${contestId}`);
    return new Contest(data);
}

export const getAllContests = async (limit: number, skip: number) => {
    const body = {
        "options": {
            "limit": limit,
            "skip": skip
        }
    }
    const requestOptions: RequestInit = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(body)
    }
    console.log(body)
    const result = await fetchApi(`/contests/query`, requestOptions) as [];
    console.log(body)
    return result.map(data => new Contest(data))
}

export const getContestsByCustomIds = async (customIds: string[]) => {
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
    const result = await fetchApi(`/contests/query`, requestOptions) as [];
    return result.map(data => new Contest(data))
}

export const getContestsMapByCustomId = async (customIds: string[]) => {
    const contests = await getContestsByCustomIds(customIds);
    const result = new Map<string, Contest>();
    contests.map((contest) => result.set(contest.customId, contest));
    return result;
};

