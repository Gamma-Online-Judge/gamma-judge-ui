import { api } from "./axiosBase";

interface IUser {
    username: string;
    name: string;
    email: string;
    password: string;
}

export const createUser = async (user: IUser): Promise<any> => {
    const result = await api.post(`/user`, user);
    return result.data;
}