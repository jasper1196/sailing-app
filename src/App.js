import React, {useContext, useEffect, useState} from "react";
import './App.css';
import TopBar from './components/topBar/TopBar.js';
import ForecastPage from "./pages/forecastPage/ForecastPage";
import { WindUnitContext } from "./context/WindUnitProvider.js";
import { TempUnitContext } from "./context/TempUnitProvider.js";

function App() {
    const {TempUnitSpec} = useContext(TempUnitContext);
    //const {WindUnitSpec} = useContext(WindUnitContext);
    const [searchLocation, setSearchLocation] = useState("");

    useEffect(() => {
        console.log(searchLocation);
    }, [searchLocation]);

    return (
        <div className="app">
            <div className="header">
                <TopBar locationHandler={setSearchLocation} />
            </div>
            <div className="body">
                <ForecastPage data={searchLocation} />
            </div>
        </div>
  );
}

export default App;
