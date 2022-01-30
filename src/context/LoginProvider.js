import React, {createContext, useState} from "react";

export const LoginContext = createContext(null);

function LoginProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{
            setLoggedIn
        }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;