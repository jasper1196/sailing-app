import React, {createContext, useState, useEffect} from "react";
import userLogin from "../tools/userLogin";
import getUserInfo from "../tools/getUserInfo";
import axios from "axios";
import styles from "./LoginProvider.module.css";

export const LoginContext = createContext(null);

function LoginProvider({children}) {
    const [authData, setAuthData] = useState({
        "data": null,
        "status": "pending"
    });

    axios.get("https://frontend-educational-backend.herokuapp.com/api/test/all");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            getUserInfo(token).then((userInfo) => {
                setAuthData({
                    "data": {
                        "email": userInfo.data.email,
                        "username": userInfo.data.username
                    },
                    "status": "authorized"
                });
            }).catch((e) => {
                localStorage.removeItem("token");
                setAuthData({
                    "data": null,
                    "status": "unauthorized"
                });
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
        });
    }

    function logout() {
        setAuthData({
            "data": null,
            "status": "unauthorized"
        });
    }

    function refreshAuthData() {
        const token = localStorage.getItem("token");

        getUserInfo(token).then((userInfo) => {
            setAuthData({
                "data": {
                    "email": userInfo.data.email,
                    "username": userInfo.data.username
                },
                "status": "authorized"
            });
        }).catch((e) => {
            setAuthData({
                "data": null,
                "status": "unauthorized"
            });
            localStorage.removeItem("token");
        });
    }


    return (
        <LoginContext.Provider value={{
            authData,
            login,
            logout,
            refreshAuthData
        }}>
            {authData.status === "pending" ?
                <div className={styles.wrapper}>
                    <div className={styles.loader}/>
                    <label className={styles.description}>Loading...</label>
                </div>
                :
                children
            }
        </LoginContext.Provider>
    );
}

export default LoginProvider;