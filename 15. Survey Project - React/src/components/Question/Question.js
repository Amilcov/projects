import parser from 'react-html-parser'; 
import { useAppContext } from "../../context/AppContext";

function Question() {
    const {questionNo, answers, updateAnswers } = useAppContext();
    let question = '';


    switch (questionNo) {
      case 0:
        question = "To improve accuracy, answer each question quickly with your first <strong>'gut instinct'</strong>. You will not be able to go back and change answers after clicking next.<br />Answer each question using the scale provided.";
        break;

        case 1:
          question = "1. I learn the most when the lesson engages my sense of <em>sight</em>."
            
          break;

        case 2: 
          question = "2. I learn the most when the lesson engages my sense of <em>hearing</em>."
       
          break;

        case 3:
          question = "3. I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>."  
          break;

        case 4:
          question = "4. I find it easiest to remember things I see rather than things I hear or do." 
          break; 

        case 5:
          question = "5. I find it easiest to remember things I hear rather than things I see or do."
          break;

        case 6:
          question = "6. I find it easiest to remember things I do rather than things I see or hear."
          break;

        case 7:
          question = "7. I would rather look at photos than listen to music or workout (physical exercise)."
          break;

        case 8:
          question = "8. I would rather listen to music than look at photos or workout (physical exercise)."
          break;

        case 9:
          question = "9. I would rather workout (physical exercise) than look at photos or listen to music."
          break;

        case 10:
          question = "10. The lessons I remember best are those in which I had to use my sense of sight."
          break;

        case 11:
          question = "11. The lessons I remember best are those in which I had to use my sense of hearing."
          break;

        case 12:
          question = "12. The lessons I remember best are those in which I had to use my sense of touch, smell or taste."
          break;

        case 13:
          question = "13. When I get a new device, I usually read the instructions to learn how to operate it."
          break;

        case 14:
          question = "14. When I get a new device, I usually ask someone to explain verbally how to operate it."
          break;

        case 15:
          question = "15. When I get a new device, I usually try a hands-on approach to figure out how to operate it."
          break;

    }
   
 
    return (
        <div>
            <p> {parser(question)} </p>
            {questionNo > 0 &&  questionNo < 16 && (
            <div>
                <div>
                   <label> 
                     <input type="radio" name="score" onChange={e => updateAnswers(1)} value={answers[questionNo]}/>
                     Strongly Disagree 
                    </label>
                </div>

                <div>
                    <label>
                      <input type="radio" name="score" onChange={e => updateAnswers(2)} value={answers[questionNo] }/>
                      Disagree 
                     </label>
                </div>

                <div>
                  <label>
                    <input type="radio" name="score" onChange={e => updateAnswers(3)} value={answers[questionNo]} />
                     Neutral 
                  </label>
                </div>

            
                  <label>
                    <input type="radio" name="score" onChange={e => updateAnswers(4)} value={answers[questionNo]} />
                     Agree 
                  </label>
    

                <div>
                  <label>
                    <input type="radio" name="score" onChange={e => updateAnswers(5)} value={answers[questionNo]} />
                    Strongly Agree 
                  </label>
                </div>
            </div>
            )}
            
        </div>
    )


};

export default Question;

