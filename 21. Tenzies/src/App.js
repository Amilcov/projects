
import React, { useState, useEffect } from 'react';
import './App.css';
import Dice from './Dice/Dice';
import Confetti from 'react-confetti';

function App() {



  const [dices, setDices] = useState(initiateState);
  const [selected, setSelected] = useState(0);
  const [displayButton, setDisplayButton] = useState('Roll on');


  useEffect(isEndGame, [dices]);


  function initiateState() {

    return Array.from({ length: 10 }, (_, idx) => {
      let value = Math.floor(Math.random() * 10 % 6) + 1;
      return { id: idx, value, lock: false };
    })
  }



  let dicesComponents = null;
  if (Array.isArray(dices)) dicesComponents = dices.map((dice, idx) => <Dice key={idx} info={dice} handleOnclick={handleClickDice} />)



  function handleClickDice(id, value) {
    if (!selected || value === selected) {
      if (!selected) setSelected(value);
      selectDice(id);
    } else {
      alert("Can not be selected dices with diffrent values")
    }
  }

  function selectDice(id) {

    setDices(prevState => {
      let newDices = [...prevState]
      newDices[id].lock = true;
      return newDices;
    })
  }

  function isEndGame() {
    let isEnd = dices.filter(dice => dice.lock).length === 10;
    if (isEnd) {
      setDisplayButton('Reset Game');
    }

  }

  function handleOnclickRoll() {

    if (displayButton === 'Reset Game') setDisplayButton('Roll on');

    setDices(prevState => {
      let isEnd = prevState.filter(dice => dice.lock).length === 10;
      if (isEnd) setSelected(0)

      let newState = [...prevState].map(dice => {
        if (isEnd || !dice.lock) dice.value = Math.floor(Math.random() * 10 % 6) + 1;
        if (isEnd) dice.lock = false;
        return dice;
      })

      return newState
    })
  }



  return (
    <div id="app" className='div-center'>
      <div id="div-background" className='div-center'>

        <div id="div-game" >
          {displayButton === 'Reset Game' &&
            <Confetti />
          }
          <h2> Tenzies</h2>

          <p id="instructions">
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
          <div id="dices">
            {dicesComponents}
          </div>
          <div className="container-btn-roll">
            <button className='button-roll' onClick={handleOnclickRoll}>{displayButton}</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
