import React, {useState} from "react";
import {ReactComponent as Star} from "../../assets/star.svg";
import {ReactComponent as EmptyStar} from "../../assets/emptyStar.svg";
import "./FavoriteIcon.css";

function FavoriteIcon() {
    const [clicked, setClicked] = useState(false);

    function clickEvent() {
        setClicked(!clicked);
    }

    return (
        <div>
            <Star
                className="star"
                onClick={clickEvent}
            />
        </div>
    );
}

export default FavoriteIcon;