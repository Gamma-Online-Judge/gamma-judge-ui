import { stringify } from "querystring";
import { Contest } from "../models/Contest";
import { Problem } from "../models/Problem";
import { fetchApi } from "./baseRequest";

export const getContestAsync = async (contestId: string) => {
    const data = await fetchApi(`/contests/${contestId}`);
    console.log(data)
    return new Contest(data);
}

export const getAllContests = async () => {
    const result = await fetchApi(`/contests`) as [];
    return result.map(data => new Contest(data));
}

export const getContestsByCustomIds = async (customIds: string[]) => {
    const query = JSON.stringify({
        "customId": {
            "$in": customIds
        }
    })
    const requestOptions: RequestInit = {
        method: "POST",
        body: query
    }
    const result = await fetchApi(`/contests/query`, requestOptions) as [];
    console.log(result)
    return result.map(data => new Contest(data))
}
