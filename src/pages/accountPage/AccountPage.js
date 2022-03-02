import React, {useContext, useEffect, useState} from "react";
import styles from "./AccountPage.module.css"
import {LoginContext} from "../../context/LoginProvider";
import {useForm} from "react-hook-form";
import changeUserData from "../../tools/changeUserData";
import capitalizeString from "../../tools/capitalizeString";

function AccountPage() {
    const {authData, logout, refreshAuthData} = useContext(LoginContext);
    const defaultValues = {
        username: authData.data.username,
        email: authData.data.email
    }
    const [fieldsChanged, setFieldsChanged] = useState(false);
    const {register, watch, reset, handleSubmit} = useForm({defaultValues});

    const emailWatcher = watch("email");

    useEffect(() => {
        if (emailWatcher !== defaultValues.email) {
            setFieldsChanged(true);
        } else {
            setFieldsChanged(false);
        }
    }, [emailWatcher]);

    function onFormSubmit(changedData) {
        changeUserData({"email": changedData.email}).then((response) => {
            refreshAuthData();
            defaultValues.email = authData.data.email;
            setFieldsChanged(false);
        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <div className={styles["info-container"]}>
            <label className={styles.title}>Mijn Account</label>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <div className={styles["info-fields"]}>
                    <label
                        className={styles["info-labels"]}
                        htmlFor="username-info"
                    >
                        Gebruikersnaam:
                    </label>
                    <label className={styles.username}>{capitalizeString(defaultValues.username)}</label>
                </div>
                <div className={styles["info-fields"]}>
                    <label
                        className={styles["info-labels"]}
                        htmlFor="email-info"
                    >
                        Email:
                    </label>
                    <input
                        className={styles.email}
                        id="email-info"
                        type="text"
                        {...register("email")}
                    />
                </div>
                {fieldsChanged &&
                    <div className={styles["info-fields"]}>
                        <button className={styles.btns} type="submit">Email wijzigen</button>
                        <button
                            className={styles.btns} type="button"
                            onClick={() => {reset(defaultValues)}}
                        >
                            Wijzigen annuleren
                        </button>
                    </div>
                }
            </form>
            <button className={styles.btns} type="button" onClick={logout}>Uitloggen</button>
        </div>
    );
}

export default AccountPage;