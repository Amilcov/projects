import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../Question/Question';
import { useAppContext } from '../../context/AppContext';
import './Sensory.css';




const Sensory = () => {
  
  const {questionNo, setQuestionNo, answers} = useAppContext();
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
 

  const processAnswer = () => {

    if (questionNo && !answers[questionNo] ) {
        setErrors('Please select an answer using the scale provided.');
    } else {
        setErrors('');
        setQuestionNo(questionNo + 1);
        if(questionNo) document.querySelector('input[name="score"]:checked').checked = false;
    
      if (questionNo === 15) {
          navigate("/report" )
      }
    }
  }

  return (

    <div>
      <h1> Sensory Preferences </h1>
      <p> {errors} </p>
      <Question />
      {

      (questionNo < 16) &&
      (<button onClick={e => processAnswer()} visible='false'> {questionNo === 0 ? 'Start': questionNo === 15 ? "Submit" : 'Next'} </button>)
      }
      {questionNo > 15 && (<p>You already completed this suervey!</p>)}
    </div>
  )
}


export default Sensory;