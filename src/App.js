import React, {useContext, useEffect, useState, useRef} from "react";
import './App.css';
import TopBar from './components/topBar/TopBar.js';
import ForecastPage from "./pages/forecastPage/ForecastPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
//import { WindUnitContext } from "./context/WindUnitProvider.js";
//import { TempUnitContext } from "./context/TempUnitProvider.js";
import getForecastData from "./tools/getForecastData";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
//    const {changeTempUnit} = useContext(TempUnitContext);
//    const {WindUnitSpec} = useContext(WindUnitContext);
    const [searchLocation, setSearchLocation] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            setWeatherData(getForecastData("5", searchLocation));
        } else {
            isMounted.current = true;
        }

    }, [searchLocation]);

    return (
        <div className="app">
            <Router>
                <div className="header">
                    <TopBar locationHandler={setSearchLocation} />
                </div>
                <div className="body">
                    <Routes>
                        <Route path="/" element={<Navigate to="/forecast" />} />
                        <Route path="/forecast" element={<ForecastPage data={weatherData} />} />
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/register" element={<RegisterPage />}/>
                    </Routes>
                </div>
            </Router>
        </div>
  );
}

export default App;
