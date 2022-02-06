import axios from "axios";

async function userLogin(username, password) {

    try {
        const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
            "username": username,
            "password": password
        });
        if (response.status === 200) {
            localStorage.setItem("token", response.data.accessToken);
            return response;
        } else {
            return null;
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}

export default userLogin;