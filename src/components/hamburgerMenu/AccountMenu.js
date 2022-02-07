import React, {Fragment, useEffect, useState} from "react";
import "./AccountMenu.css";
import {useLocation, useNavigate} from "react-router-dom";

function AccountMenu({name}) {
    const [opened, setOpened] = useState(false);
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
                    <button type="button">Uitloggen</button>
                </div>
            }
        </div>

    );
}

export default AccountMenu;