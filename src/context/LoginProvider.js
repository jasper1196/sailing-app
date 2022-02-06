import React, {createContext, useState, useEffect} from "react";
import userLogin from "../tools/userLogin";
import getUserInfo from "../tools/getUserInfo";

export const LoginContext = createContext(null);

function LoginProvider({children}) {
    const [authData, setAuthData] = useState({
        "data": null,
        "status": "pending"
    });


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            getUserInfo(token).then((userInfo) => {
                console.log(userInfo);
            }).catch((e) => {
                console.log(e);
            });
        } else {
            setAuthData({
                "data": null,
                "status": "unauthorized"
            });
        }

    }, []);


    function login(username, password) {
        userLogin(username, password).then((response) => {
            setAuthData({
                "data": {
                    "email": response.data.email,
                    "username": response.data.username,
                },
                "status": "authorized"
            });
        }).catch((e) => {
            setAuthData({
                "data": null,
                "status": "failed"
            });
            console.log(e)
        });
    }


    return (
        <LoginContext.Provider value={{
            authData,
            login
        }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;