import axios from "axios";

async function registerUser(userData) {
    try {
        const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
            "username": userData.username,
            "email": userData.email,
            "password": userData.password,
            "role": ["user"]
        });
        if (response.data.data.message === "User registered successfully!") {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }

}

export default registerUser;