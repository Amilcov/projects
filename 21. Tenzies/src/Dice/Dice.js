import React from "react";
import './Dice.css';

function Dice(props) {

    let { id, value, lock } = props.info;
    return (
        <button className={lock ? "dice-selected" : ""} onClick={() => props.handleOnclick(id, value)}>{value}</button>

    )
}

export default Dice