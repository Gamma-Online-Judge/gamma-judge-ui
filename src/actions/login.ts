import { api } from "./axiosBase";

export const postLogin = async (username: string, password: string): Promise<any> => {
    var data = {
        username: username,
        password: password
    };
    const result = await api.post(`/login`, data);
    return result.data;
}

export const setUserLocalStorage = (user:any) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user? JSON.parse(user) : null;
}