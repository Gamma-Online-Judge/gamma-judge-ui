import { api } from "./axiosBase";

interface IUser {
    username: string;
    name: string;
    email: string;
    password: string;
}

export const createUser = async (user: IUser): Promise<any> => {
    return api.post(`/user`, user).then(res => {
        return res.data;
    }).catch(err => {
        throw new Error(err.response.statusText);
    });
}