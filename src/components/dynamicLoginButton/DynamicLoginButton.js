import React, {Fragment, useContext} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";
import styles from "./DynamicLoginButton.module.css";
import AccountMenu from "../accountMenu/AccountMenu";
import capitalizeString from "../../tools/capitalizeString";

function DynamicLoginButton() {
    const contextData = useContext(LoginContext);

    return (
        <Fragment>
            {contextData.authData.status === "authorized" ?
                <AccountMenu name={capitalizeString(contextData.authData.data.username)} />
                :
                <Link className={styles["login-link"]} to="/login">Inloggen</Link>
            }
        </Fragment>
    );
}

export default DynamicLoginButton;