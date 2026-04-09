
export interface UserResponse {
    userId: number;
    username: string;
    status: string;
    createdAt: string | null;
    groups: Group[];
}
export interface Group {
    groupName: string;
    accessLevel: string;
}