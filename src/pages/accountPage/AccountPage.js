import React, {useContext, useEffect, useState} from "react";
import "./AccountPage.css"
import {LoginContext} from "../../context/LoginProvider";
import {useForm} from "react-hook-form";
import changeUserData from "../../tools/changeUserData";

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
            console.log(response);
            refreshAuthData();
            defaultValues.email = authData.data.email;
            setFieldsChanged(false);
        }).catch((e) => {
            console.log(e);
        });
    }

    //TODO: CHANGE PASSWORD

    return (
        <div className="info-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="username-info">Gebruikersnaam</label>
                <label id="username-info">{defaultValues.username}</label>
                <label htmlFor="email-info">Mailadres</label>
                <input
                    id="email-info"
                    type="text"
                    {...register("email")}
                />

                {fieldsChanged &&
                    <div>
                        <button type="submit">Email wijzigen</button>
                        <button
                            type="button"
                            onClick={() => {reset(defaultValues)}}
                        >
                            Wijzigen annuleren
                        </button>
                    </div>
                }
            </form>
            <button type="button" onClick={logout}>Uitloggen</button>
        </div>
    );
}

export default AccountPage;