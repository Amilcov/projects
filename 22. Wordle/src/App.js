import React, { useEffect, useState } from 'react';
import Word from './Word/Word';
import Keybord from './Keybord/Keybord';
import dictionary from './dictionary.json';
import Confetti from 'react-confetti';

import './App.css';

function App() {

  let initialStateWords = Array.from({ length: 6 }, (_, idx) => ' '.repeat(5));

  const [wordAPI, setWordAPI] = useState('');
  const [words, setWords] = useState(initialStateWords);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [idxCurrentWord, setIdxCurrentWord] = useState(0);
  const [messageCheck, setMessageCheck] = useState('');

  const [maredkLettersOnKeybord, setMarkedLettersOnKeybord] = useState({
    "lettersInRighitPossition": new Set(),
    "lettersInWrongPossition": new Set(),
    "lettersNotInWord": new Set(),
  });

  const [shake, setShake] = useState("");
  const [flip, setFlip] = useState("");
  const [win, setWin] = useState(false);


  useEffect(() => {

    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then(res => res.json())
      .then(word => {
        setWordAPI(word);
        if (localStorage.getItem('wordle_mode') === 'dev') localStorage.setItem('wordle_secretWord', word[0].toLocaleUpperCase());
      })
  }

    , []);


  function markLettersOnKeyboard(currentWord) {

    setMarkedLettersOnKeybord(prevState => {
      let newState = { ...prevState };

      currentWord.trim().split('').map((letterWord, idx) => {

        if (letterWord === wordAPI[0][idx].toLocaleUpperCase()) {
          newState["lettersInRighitPossition"].add(letterWord);
        } else {
          if (wordAPI[0].toLocaleUpperCase().includes(letterWord)) {
            newState["lettersInWrongPossition"].add(letterWord);
          } else {
            newState["lettersNotInWord"].add(letterWord);
          }
        }
        return newState;

      });

      return newState;
    })


  }


  let array6 = Array.from({ length: 6 }, ((_) => ' '.repeat(5)));
  let arrayWords = array6.map((word, idxWord) => {
    let info = {
      idxWord,
      wordAPI: idxCurrentWord > idxWord ? wordAPI : [],
      word: words[idxWord],
      selectedLetter,
      idxCurrentWord
    }

    return <Word key={idxWord} info={info} triggerShake={shake} flip={flip} />
  })

  function displayPopUp(message) {
    setShake('shake');
    setMessageCheck(message);
    setTimeout(() => {
      setMessageCheck('')
      setShake('');
    }
      , 1500);

  }




  function handleClickKeybord(event) {

    if (
      (event.key >= 'a' && event.key <= 'z') ||
      (event.key >= 'A' && event.key <= 'Z') ||
      event.key === 'Enter' || event.key === 'Backspace'

    ) {
      let letter = event.key === 'Enter' ? '1' :
        event.key === 'Backspace' ? '0' : event.key.toLocaleUpperCase();

      handleClickKeybordLetter(letter);
    }
  }


  function handleClickKeybordLetter(letter) {

    if (idxCurrentWord > 5 || win) return;
    if (letter !== '0' && letter !== '1' && letter.toLocaleUpperCase() < 'A' && letter.toLocaleUpperCase() > 'Z') return;
    if (letter.length > 1) return;

    let idxCurrentWordSaved = idxCurrentWord;


    setSelectedLetter(letter);

    setWords(prevState => {
      let newState = [...prevState];
      let newWord = newState[idxCurrentWordSaved].trim();

      if (letter === '0') {
        newWord = newWord.slice(0, -1);
      } else if (letter === '1') {

        if (newWord.length < 5) {
          displayPopUp('Not enough letters');

        } else {
          let wordExists = JSON.stringify(dictionary).indexOf(`${newWord.toLowerCase()}`);
          if (wordExists === -1) {
            displayPopUp('Not in word list');

          } else if (newWord.length === 5) {
            markLettersOnKeyboard(newWord);
            setFlip(flip);
            setIdxCurrentWord(idxCurrentWordSaved + 1);
            if (newWord === wordAPI[0].toLocaleUpperCase()) setWin(true);
          }
        }
      } else {
        if (newWord.length < 5) {
          newWord += letter;
        }


      }

      newWord = newWord + ' '.repeat(5 - newWord.length);
      newState[idxCurrentWordSaved] = newWord;

      return newState;
    })
  }




  return (
    <div className="App" onKeyDown={(event) => handleClickKeybord(event)} >
      <header className="App-header" >

      </header>
      {win && <Confetti />}



      <div id="container-popup">
        <p id="popup" style={messageCheck.length === 0 ? { display: "none" } : { display: "block" }} > {messageCheck}</p>
      </div>

      {arrayWords}
      <Keybord info={maredkLettersOnKeybord} handleClick={handleClickKeybordLetter} />
      {(win || idxCurrentWord === 6) && <p> word API: {wordAPI}</p>}


    </div >
  );
}

export default App;
