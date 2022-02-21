import React, {useContext, useEffect, useState, useRef} from "react";
import styles from "./App.module.css";
import TopBar from './components/topBar/TopBar.js';
import ForecastPage from "./pages/forecastPage/ForecastPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import getForecastData from "./tools/getForecastData";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {LoginContext} from "./context/LoginProvider";
import AccountPage from "./pages/accountPage/AccountPage";
import PasswordPage from "./pages/passwordPage/PasswordPage";

function App() {
    const [searchLocation, setSearchLocation] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const {authData} = useContext(LoginContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            setWeatherData(getForecastData("5", searchLocation));
        } else {
            isMounted.current = true;
        }

    }, [searchLocation]);

    return (
        <div className={styles.app}>
            <Router>
                <div className={styles.header}>
                    <TopBar locationHandler={setSearchLocation} />
                </div>
                <div className={styles.body}>
                    <Routes>
                        <Route path="/*" element={<Navigate to="/forecast" />} />
                        <Route path="/forecast" element={<ForecastPage data={weatherData} />} />
                        <Route path="/login" element={authData.status !== "authorized" ? <LoginPage /> : <Navigate to="/forecast" />}/>
                        <Route path="/register" element={<RegisterPage />}/>
                        <Route path="/account" element={authData.status === "authorized" ? <AccountPage /> : <Navigate to="/login" />} />
                        <Route path="/change-password" element={authData.status === "authorized" ? <PasswordPage /> : <Navigate to="/login" />} />
                    </Routes>
                </div>
            </Router>
        </div>
  );
}

export default App;
