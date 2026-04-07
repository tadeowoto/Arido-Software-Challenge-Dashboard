
export interface UserResponse {
    userId: number;
    username: string;
    status: string;
    createdAt: string | null;
    groups: group[];
}
interface group {
    groupName: string;
    accessLevel: string;
}