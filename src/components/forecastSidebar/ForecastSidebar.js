import React from "react";
import "./ForecastSidebar.css";

function ForecastSidebar({defaultView, switchView}) {
    return (
        <div className="sidebar">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur debitis est eum illo illum, molestias obcaecati pariatur placeat possimus quam tempora ut? Architecto doloremque exercitationem nobis placeat sed. Ab.
            </p>
            <button
                onClick={() => {switchView(!defaultView)}}
            >
                {defaultView ? "true" : "false"}
            </button>
        </div>
    );
}

export default ForecastSidebar;