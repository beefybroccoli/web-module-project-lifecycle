export const API_URL = "https://api.github.com/users/beefybroccoli";

export const API_Call = (input_username)=>{
    axios.get(API_URL+input_username).then(()=>{})

    
}