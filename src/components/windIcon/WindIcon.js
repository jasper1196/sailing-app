import React from "react";
import {ReactComponent as WindArrow} from "../../assets/windArrow.svg";

function WindIcon({degree}) {

    return (
        <WindArrow
            transform={`scale(.8) rotate(${degree})`}
        />
    );
}

export default WindIcon;