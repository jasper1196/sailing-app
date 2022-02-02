import axios from "axios";

async function userLogin(username, password) {
    try {
        const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
            "username": username,
            "password": password
        });
        console.log(response);
        if (response.status === 200) {
            return ({
                "loggedIn": true,
                "token": response.data.accessToken
            });
        } else {
            return ({"loggedIn": false});
        }
    } catch (e) {
        console.log(e);
        return ({"loggedIn": false});
    }
}

export default userLogin;