import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "b5d66a17-e300-438a-836a-f262d6d4bfa6"}
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
       return instance.get(`profile/${userId}`)
    }
}
export const authAPI = {
    me(){
       return instance.get(`auth/me`)
    }
}