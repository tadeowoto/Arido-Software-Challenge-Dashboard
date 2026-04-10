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
          securityGroups: userData.userGroupsAndLevelAccess.map(group => ({
            groupId: Number(group.groupId),           
            accessLevelId: Number(group.levelAccessId)
          }))
        };
     return apiFetch("/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    }); 
    },

    getUserByUsername: (username: string): Promise<UserResponse> => {
      return apiFetch(`/users/with-access/${username}`);
    } 
}