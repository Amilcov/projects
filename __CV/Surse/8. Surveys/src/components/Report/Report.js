import { useAppContext } from "../../context/AppContext";
import parser from 'react-html-parser'; 
import './Report.css';

const Report = () => {
  const { questionNo, answers } = useAppContext();
  const scoreBySensoryType = answers.slice(1).reduce((acc, elem, idx) => {
  switch(idx % 3) {
      case 0: 
        acc[0].value += elem;
        break;
      case 1: 
       acc[1].value += elem;
        break;
      case 2: 
       acc[2].value += elem;
        break;
    }
    return acc;
  }, [{value: 0, type: 'Visual'}, {value: 0, type: 'Auditory'}, {value: 0, type: 'Kinesthetic'}]);
  
  const total = scoreBySensoryType.map(e => e.value).reduce((acc, elem) => acc+= parseInt(elem), 0);
  scoreBySensoryType.sort((a, b) => b.value - a.value);

  return (
    <div className="report">
      <h2> Here are your Results </h2>
      <div className="results">
        { answers[15] > 0 &&
        scoreBySensoryType.map((e, idx) => { let display = e.type + '&nbsp'.repeat(60 - e.type.length) + '<span class="procent">'+ ( 100 * e.value/total).toFixed(2) + ' %' + '</span>'; return (<p key={idx}> {parser(display)} </p>)})
        }
      </div>
      {questionNo === 0  && (<p> You haven't take the Sensory Preferences Survey. Please proceed with it.</p>)}
    
    </div>

  )
}


export default Report;