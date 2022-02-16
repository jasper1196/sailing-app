import React, {useContext, useEffect, useState} from "react";
import styles from "./AccountMenu.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";

function AccountMenu({name}) {
    const [opened, setOpened] = useState(false);
    const {logout} = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {setOpened(false)}, [location]);

    return (
        <div
            className={styles["account-menu"]}
            onMouseLeave={() => {setOpened(false)}}
            onMouseEnter={() => {setOpened(true)}}
        >
            <div className={styles["welcome-msg"]}>
                <p>Welkom {name}</p>
            </div>
            {opened &&
                <div className={styles["account-options"]}>
                    <button
                        className={styles["option-btns"]}
                        type="button"
                        onClick={() => {navigate("/account")}}
                    >
                        Mijn account
                    </button>
                    <button
                        className={styles["option-btns"]}
                        type="button"
                        onClick={() => {navigate("/change-password")}}
                    >
                        Wachtwoord wijzigen
                    </button>
                    <button
                        className={styles["option-btns"]}
                        type="button"
                        onClick={logout}
                    >
                        Uitloggen
                    </button>
                </div>
            }
        </div>

    );
}

export default AccountMenu;