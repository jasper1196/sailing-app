import axios from "axios";

function changePassword(password, confirmation) {
    const token = localStorage.getItem("token");

    return (axios.put("https://frontend-educational-backend.herokuapp.com/api/user", {
        "password": password,
        "repeatedPassword": confirmation
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }));
}

export default changePassword;