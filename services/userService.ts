import type { UserResponse, UserRequest } from "@/types/userTypes";
import { apiFetch } from "./apiConfig";
import { FormData } from "@/types/groupTypes";

export const userService = {
    getAll: (): Promise<UserResponse[]> => {
        return apiFetch("/users/with-access");
    },

     create: (userData: FormData ): Promise<UserResponse> => {

        const newUser: UserRequest = {
          username: userData.username,
          password: userData.password,
          status: "ACTIVE",
          accessLevelId: userData.userGroupsAndLevelAccess[0].levelAccessId,
          groupId: userData.userGroupsAndLevelAccess[0].groupId
        };
     return apiFetch("/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    }); 
  } 



}