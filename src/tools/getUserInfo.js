import axios from "axios";

async function getUserInfo(token) {
    return await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
}

export default getUserInfo;