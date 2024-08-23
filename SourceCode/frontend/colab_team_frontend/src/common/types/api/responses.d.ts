type UserResponse = Pick<User, "email" | "username" | "name"> & {
  profile: Pick<Profile, "profilePic" | "bio" | "isVerified" | "createdOn">;
};
