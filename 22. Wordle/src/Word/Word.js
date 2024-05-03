import React from 'react';
import './Word.css';

function Word(props) {
    const { idxWord, wordAPI, word, selectedLetter, idxCurrentWord, flip } = props.info;
    let triggerShake = "";


    function setClass(idx) {


        let letterWord = word[idx];
        let letterWordAPI = wordAPI.length ? wordAPI[0][idx].toUpperCase() : '';


        let classStr = "empty"
        if (letterWord !== ' ') {
            classStr = " fill";
            if (selectedLetter === '1' && idxWord === idxCurrentWord) triggerShake = props.triggerShake;


            if (wordAPI.length) {
                if (!wordAPI[0].toUpperCase().includes(letterWord)) {
                    classStr += " not-in-word ";
                } else {
                    if (letterWord === letterWordAPI) {
                        classStr += " on-position ";
                    } else {
                        classStr += " off-position "
                    }
                }
            }

        }


        //flip    
        if (idxWord === (idxCurrentWord - 1)) classStr += " flip" + idx + " ";

        //win
        if (wordAPI.length && wordAPI[0].toUpperCase() === word) {
            classStr += idx % 2 ? ' jump-odd ' : ' jump-even '
        }

        return classStr;
    }

    let wordComponent = word.split('').map((letter, idxLetter) =>
        <input
            key={`${word}_${idxLetter}`}
            value={letter} className={setClass(idxLetter)}
            readOnly
            autoFocus={idxLetter === 4 && idxWord === 5}
        />)

    return (
        <div className={triggerShake}>
            {wordComponent}
        </div>
    )

}

export default Word;