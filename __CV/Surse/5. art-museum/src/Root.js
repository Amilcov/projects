import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
const Root = () => {
  return ( 
    <BrowserRouter> 
       <App />  
    </BrowserRouter>
  )
};


export default Root;