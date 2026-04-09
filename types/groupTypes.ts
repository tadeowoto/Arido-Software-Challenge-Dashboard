export type SecurityGroupResponse = {
    groupId: number;
    name: string;
    description: string;
}

export type SecurityGroupAndLevelAccess = {
    groupId: number | undefined;
    levelAccessId: number | undefined;
}

export interface FormData {
  username: string;
  password: string;
  userGroupsAndLevelAccess: SecurityGroupAndLevelAccess[];
  permission: string;
}