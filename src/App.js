import React, {useContext, useEffect, useState, useRef} from "react";
import './App.css';
import TopBar from './components/topBar/TopBar.js';
import ForecastPage from "./pages/forecastPage/ForecastPage";
import { WindUnitContext } from "./context/WindUnitProvider.js";
import { TempUnitContext } from "./context/TempUnitProvider.js";
import getForecastData from "./tools/getForecastData";

function App() {
    const {changeTempUnit} = useContext(TempUnitContext);
    const {WindUnitSpec} = useContext(WindUnitContext);
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
            <div className="header">
                <TopBar locationHandler={setSearchLocation} />
            </div>
            <div className="body">
                <ForecastPage data={weatherData} />
            </div>
        </div>
  );
}

export default App;
