import axios from "axios";

export const API_URL = "https://api.github.com/users/";
export const My_Username = "beefybroccoli";

export const API_Call = (input_username) => {
  return axios
    .get(API_URL + input_username)


    // .then((response) => {
    //   return response.data;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
};
