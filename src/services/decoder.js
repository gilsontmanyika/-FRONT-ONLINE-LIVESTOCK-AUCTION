import { jwtDecode } from "jwt-decode";



export const getToken = () => {
    
// Fetch the token from local storage
    const token = localStorage.getItem('accessToken'); // Assuming your token is stored with the key 'jwtToken'

    if (token) {
        // Decode the token
        const decoded = jwtDecode(token);
        
        console.log(decoded);
        return decoded;
    } else {
       return 0;
    }
  };
  