export type SecurityGroupResponse = {
    groupId: number;
    name: string;
    description: string;
}

export type SecurityGroupAndLevelAccess = {
    groupId: number | undefined;
    levelAccessId: number | undefined;
}