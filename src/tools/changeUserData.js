import axios from "axios";

function changeUserData(changedData) {
    const token = localStorage.getItem("token");

     return axios.put("https://frontend-educational-backend.herokuapp.com/api/user", changedData, {
         headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
         }
     });
}

export default changeUserData;