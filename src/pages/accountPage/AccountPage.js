import React, {useContext, useEffect, useState} from "react";
import "./AccountPage.css"
import {LoginContext} from "../../context/LoginProvider";
import {useForm} from "react-hook-form";

function AccountPage() {
    const {authData, logout} = useContext(LoginContext);
    const defaultValues = {
        username: authData.data.username,
        email: authData.data.email
    }
    const [fieldsChanged, setFieldsChanged] = useState(false);
    const {register, watch, reset, handleSubmit} = useForm({defaultValues});

    const usernameWatcher = watch("username");
    const emailWatcher = watch("email");

    useEffect(() => {
        if (usernameWatcher !== defaultValues.username || emailWatcher !== defaultValues.email) {
            setFieldsChanged(true);
        } else {
            setFieldsChanged(false);
        }
    }, [usernameWatcher, emailWatcher]);

    function onFormSubmit(changedData) {
        console.log(changedData);
    }
    //TODO: CHANGE USER DATA
    //TODO: CHANGE PASSWORD

    return (
        <div className="info-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="username-info">Gebruikersnaam</label>
                <input
                    id="username-info"
                    type="text"
                    {...register("username")}
                />

                <label htmlFor="email-info">Mailadres</label>
                <input
                    id="email-info"
                    type="text"
                    {...register("email")}
                />

                {fieldsChanged &&
                    <div>
                        <button type="submit">Gegevens wijzigen</button>
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