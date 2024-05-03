import React from 'react';
import './Keybord.css';


function Keybord(props) {

    let letters = 'QWERTYUIOPASDFGHJKL1ZXCVBNM0';


    let lettersInput = letters.split('').map((letter, idx) => {


        let display = letter;
        let classDisplay = '';

        if (letter === '0') {
            display = 'DEL';
            classDisplay = "del"

        }

        if (letter === '1') {
            display = 'ENTER';
            classDisplay = "enter"

        }


        if (props.info["lettersInRighitPossition"].has(letter)) classDisplay += " hit";
        if (props.info["lettersInWrongPossition"].has(letter)) classDisplay += " miss";
        if (props.info["lettersNotInWord"].has(letter)) classDisplay += " not_exist";



        return <button
            key={idx}
            className={classDisplay}
            aria-roledescription='button'
            onClick={() => props.handleClick(letter)}
        >
            {display}
        </button>
    }
    )
    return (
        <div id="container">
            {lettersInput}
        </div>
    )
}

export default Keybord;