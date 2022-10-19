import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);


export default function AppContextProvider(props) {
  const [questionNo, setQuestionNo] = useState(0);
  const [answers, setAnswers] = useState(Array(16).fill(''));

  const updateAnswers = (value) => {
    let newAnswer = answers;
    newAnswer[questionNo] = value;
    setAnswers(newAnswer);
  }

 
  return (
    <AppContext.Provider value={{ questionNo, setQuestionNo, answers, updateAnswers }}>
        {props.children}
   </AppContext.Provider>
  )
}
