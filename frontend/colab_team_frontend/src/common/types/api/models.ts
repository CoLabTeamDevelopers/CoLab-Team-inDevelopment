export type DateString = Date | string;

export interface User {
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  isStaff: string;
  isActive: boolean;
  dateJoined: DateString;
}

export interface Profile {
  user: User;
  profilePic: string;
  bio: string;
  isVerified: string;
  createdOn: DateString;
}

export interface AuthToken {
  key: string;
  hash: string;
  user: User;
  ipAddress: string;
  createdAt: DateString;
  expiredAt: DateString;
}

export interface Post {
  title: string;
  description: string;
  user: User;
  requirements?: string;
  benefits?: string;
  max_contributors?: string;
  category?: string;
  isClosed: boolean;
  createdAt: DateString;
}

export interface Group {
  post: Post;
  name: string;
  members: User[];
}

export interface Membership {
  user: User;
  group?: Group;
  role?: string;
  dateJoined: DateString;
}

export interface Task {
  name: string;
  description?: string;
  createdBy: User;
  post?: Post;
  createdAt: DateString;
}
