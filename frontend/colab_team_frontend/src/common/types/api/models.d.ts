type DateString = Date | string;

interface User {
  id: number;
  username: string;
  name?: string;
  email: string;
  isStaff: string;
  isActive: boolean;
  dateJoined: DateString;
}

interface Profile {
  id: number;
  user: User;
  profilePic: string;
  bio: string;
  isVerified: string;
  createdOn: DateString;
}

interface AuthToken {
  id: number;
  key: string;
  hash: string;
  user: User;
  ipAddress: string;
  createdAt: DateString;
  expiredAt: DateString;
}

interface Post {
  id: number;
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

interface Group {
  id: number;
  post: Post;
  name: string;
  members: User[];
}

interface Membership {
  id: number;
  user: User;
  group?: Group;
  role?: string;
  dateJoined: DateString;
}

interface Task {
  id: number;
  name: string;
  description?: string;
  createdBy: User;
  post?: Post;
  createdAt: DateString;
}
