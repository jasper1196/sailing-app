import axios from "axios";

async function userLogin(username, password) {
    try {
        const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
            "username": username,
            "password": password
        });
        if (response.status === 200) {
            localStorage.setItem("token", response.data.accessToken);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}

export default userLogin;