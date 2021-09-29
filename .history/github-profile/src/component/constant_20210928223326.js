import axios from "axios";
import { API_URL_Followe } from "../../../.history/github-profile/src/component/constant_20210928223017";

export const API_URL = "https://api.github.com/users/";
export const My_Username = "beefybroccoli";

export const API_URL_Followers_front = "https://api.github.com/users/";
export const API_URL_Followers_end = "/followers";

export const API_Call_Profile = (input_username) => {
  return axios.get(API_URL + input_username);
};

export const API_Call_Followers = (input_username) => {
    return axios.get(API_URL_Followers_front + input_username+ API_URL_Followers_front);
  };


/*
avatar_url: "https://avatars.githubusercontent.com/u/16412641?v=4"
bio: null
blog: ""
company: null
created_at: "2015-12-23T10:05:59Z"
email: null
events_url: "https://api.github.com/users/beefybroccoli/events{/privacy}"
followers: 1
followers_url: "https://api.github.com/users/beefybroccoli/followers"
following: 1
following_url: "https://api.github.com/users/beefybroccoli/following{/other_user}"
gists_url: "https://api.github.com/users/beefybroccoli/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/beefybroccoli"
id: 16412641
location: null
login: "beefybroccoli"
name: "TedKim"
node_id: "MDQ6VXNlcjE2NDEyNjQx"
organizations_url: "https://api.github.com/users/beefybroccoli/orgs"
public_gists: 0
public_repos: 52
received_events_url: "https://api.github.com/users/beefybroccoli/received_events"
repos_url: "https://api.github.com/users/beefybroccoli/repos"
site_admin: false
starred_url: "https://api.github.com/users/beefybroccoli/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/beefybroccoli/subscriptions"
twitter_username: null
type: "User"
updated_at: "2021-08-11T15:10:19Z"
url: "https://api.github.com/users/beefybroccoli"

*/
