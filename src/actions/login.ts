import { api } from "./axiosBase";

export const postLogin = async (username: string, password: string) => {
    console.log(username, password);
    var data = {
        username: username,
        password: password
    };
    const result = await api.post(`/login`, data);
    return result.data;
}