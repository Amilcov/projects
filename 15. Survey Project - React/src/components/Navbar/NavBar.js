import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    return (
      <div className="nav">
       <NavLink to='/survey' className='btn-nav' activeClassName="is-selected"> Sample Survey </NavLink>
       <NavLink to='/sensory' className='btn-nav' activeClassName="is-selected"> Sensory Preferences </NavLink>
       <NavLink to='/report' className='btn-nav' activeClassName="is-selected"> Report </NavLink>
       <NavLink to='/home' className='btn-nav' activeClassName="is-selected"> Home </NavLink>
     </div>

    )
};

export default Navbar;