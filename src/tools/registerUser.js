import axios from "axios";

async function registerUser(userData) {
    try {
       const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
            "username": userData.username,
            "email": userData.email,
            "password": userData.password,
            "role": ["user"]
        });
        if (response.status === 200) {
            console.log(response);
            return true;
        } else {
            return false;
        }
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export default registerUser;