
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

/* interface GroupRequest {
    groupId: number | undefined;
    levelAccessId: number | undefined;
} */

export interface UserRequest {
    username: string;
    password: string;
    status: string;
    accessLevelId: number | undefined;
    groupId: number | undefined;
}

