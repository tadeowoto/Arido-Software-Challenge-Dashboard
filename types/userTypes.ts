
export interface UserResponse {
    userId: number;
    username: string;
    status: string;
    createdAt: string;
    groups: group[];
}
interface group {
    groupName: string;
    accessLevel: string;
}