import { SecurityGroupResponse } from "@/types/groupTypes"
import { apiFetch } from "./apiConfig"

export const groupService = {
    getAllGroups: (): Promise<SecurityGroupResponse[]> => {
        return apiFetch("/groups")
    }
}