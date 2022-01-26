import React from "react";
import {ReactComponent as WindArrow} from "../../assets/windArrow.svg";

function WindIcon({degree}) {
    return (
        <WindArrow
            transform={`rotate(${degree})`}
        />
    );
}

export default WindIcon;