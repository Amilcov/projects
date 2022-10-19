import { useState } from 'react'
import './Survey.css'


const Survey = () => {

    const [reasonSurvey, setReasonSurvey] = useState('');
    const [useTool, setUseTool] = useState('');
    const [useExplain, setUseExplain] = useState('');
    const [useName, setUseName] = useState('');
    const [useEmail, setUseEmail] = useState('');
    const [useFeedback, setUseFeedback] = useState('');
    const [validateErrors, setValidateErrors] = useState([]);

    const validate = () => {
        const errors = [];
        if (!reasonSurvey) errors.push('Please select a reason for considering a survey');
        if (!useTool) errors.push('Please select an answer about use it');
        if (!useExplain) errors.push('Please write why u are/aren\'t going to use it');
        if (!useName) errors.push('Please write connection info - Name');
        if (!useEmail) errors.push('Please write connection info - Email');
        if (!(/\S+@\S+\.\S+/.test(useEmail))) errors.push('Please provide a valid email');
        return errors;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (errors.length > 0) return setValidateErrors(errors);

        const data = {reasonSurvey, useTool, useExplain, useName, useEmail, useFeedback};
        alert("Thank you");

    }

  return (
    <div>
        <h1> Sample Survey</h1>
        <div>
            { validateErrors.length > 0 && (
               <ul>
                {validateErrors.map( (err, idx) => <li key={idx}> {err} </li>)}
               </ul>
            ) }
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <legend> What is your reason for considering a survey? </legend>

            <div>
              <input type="radio" id="reason1" name="reason" onChange={e => setReasonSurvey('Employee Engagement')} value={reasonSurvey} />
              <label htmlFor="reason1"> Employee Engagement </label>
            </div>

            <div>
              <input type="radio" id="reason2" onChange={e => setReasonSurvey('Team Dynamics')} name="reason" value={reasonSurvey} />
              <label htmlFor="reason2"> Team Dynamics </label>
            </div>

            <div>
              <input type="radio" id="reason3" onChange={e => setReasonSurvey('Student Safety')} name="reason" value={reasonSurvey}  />
              <label htmlFor="reason3"> Student Safety </label>
            </div>

            <div>
              <input type="radio" id="reason4" onChange={e => setReasonSurvey('Parent Involvement in Schooling')} name="reason" value={reasonSurvey} />
              <label htmlFor="reason4"> Parent Involvement in Schooling </label>
            </div>

            <div>
              <legend> Are you planning to use this tool? </legend>
              <div>
                <input type="radio" id="planning" onChange={e => setUseTool('Yes')} value={useTool}/>
                <label> Yes </label>
              </div>

              <div>
                <input type="radio" id="planning" onChange={e => setUseTool('No')} value={useTool}/>
                <label> No </label>
              </div>

              <div>
                <input type="radio" id="planning" onChange={e => setUseTool('Don\'t know')} value={useTool}/>
                <label> Don't know </label>
              </div>
            </div>

            <div>
              <legend> Why or Why Not? </legend>
              <textarea cols="100" rows="3" onChange={e => setUseExplain(e.target.value)} value={useExplain}/>
            </div>


          <div>
        
            <legend className='connect'> Please let us know how to connect with you:</legend>
            <div >
               <label> What is your first name? </label>
               <input type="text" onChange={e => setUseName(e.target.value)} value={useName}/>
              <div>
                <br/>
                 <label> What is your email address? </label>
                 <input type="text" onChange={e => setUseEmail(e.target.value)} value={useEmail}/>
               </div>

               <div>
                <br/>
                 <label> Additional Feedback </label><br/>
                 <textarea cols="100" rows="5" onChange={e => setUseFeedback(e.target.value)} value={useFeedback}/>
               </div>
            </div>
        
          </div>

          </div>
          <button>Submit</button>
        </form>
   
    </div>
  )
}


export default Survey;