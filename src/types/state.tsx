export interface IUserSummary {
  id_str: string;
  name: string;
  screen_name: string;
  followers_count: number;
  friends_count: number;
  profile_image_url: string;
}

export type UsersList = IUserSummary[]

export interface IUserDetail {
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  followers_count: number;
  friends_count: number;
  profile_image_url: string;
  created_at: string;
}

export interface ITweetInfo {
  id_str: string;
  text: string;
  created_at: string;
  source: string;
  retweet_count: number;
  favorite_count: number;
}

export type TweetsList = ITweetInfo[]

export interface ISystemState {
  usersList: IUserDetail[];
  selectedUser: IUserDetail;
  selectedUserTweets: ITweetInfo[];
}

export type SystemState = ISystemState