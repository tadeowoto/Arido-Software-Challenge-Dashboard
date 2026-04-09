import type { UserResponse } from "@/types/userTypes";
import { apiFetch } from "./apiConfig";

export const userService = {
    getAll: (): Promise<UserResponse[]> => {
        return apiFetch("/users/with-access");
    },

/*     create: (userData: any): Promise<UserResponse> => {

        console.log(userData)

        const newUser = {
            username: userData.username,
            password: userData.password,
            status: "ACTIVE",
            groupId: userData.groupId,
            accessLevelId: userData.accessLevelId

        }

        console.log("New User Data:", newUser);

     return apiFetch("/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    }); 
  } */



}