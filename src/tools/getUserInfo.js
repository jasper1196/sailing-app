import axios from "axios";

async function getUserInfo(token) {
    const test = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return test;
}

export default getUserInfo;