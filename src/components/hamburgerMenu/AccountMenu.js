import React, {useContext, useEffect, useState} from "react";
import "./AccountMenu.css";
import {useLocation, useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";

function AccountMenu({name}) {
    const [opened, setOpened] = useState(false);
    const {logout} = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {setOpened(false)}, [location]);

    return (
        <div className="account-menu">
            <div
                className="welcome-msg"
                onClick={() => {setOpened(!opened)}}
            >

                <p>Welkom</p>
                <p>{name}</p>
            </div>
            {opened &&
                <div className="account-options">
                    <button
                        type="button"
                        onClick={() => {navigate("/account")}}
                    >
                        Mijn account
                    </button>
                    <button
                        type="button"
                        onClick={() => {navigate("/change-password")}}
                    >
                        Wachtwoord wijzigen
                    </button>
                    <button
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