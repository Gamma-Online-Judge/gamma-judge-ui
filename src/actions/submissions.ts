import { Submission } from "../models/Submission";
import { api } from "./axiosBase";
import fs from 'fs'

export const getSubmission = async (contestId: string) => {
    const result = await api.get(`/submissions/${contestId}`);
    return new Submission(result.data);
}

export const getAllSubmissions = async (limit: number, skip: number) => {
    const result = await api.get(`/submissions?limit=${limit}&skip=${skip}`);
    const contestsData = result.data as []
    return contestsData.map(data => new Submission(data))
}

export const submitCode = async (problemId: string, file: File, language: string, userId: string) => {
    var data = new FormData();
    data.append('language', language);
    data.append('problemId', problemId);
    data.append('files', file);
    data.append('userId', userId);
    const result = await api.post(`/submissions`, data);
    console.log(result.data);
    return new Submission(result.data);
}

