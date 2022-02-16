import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Styles from "../styles/Navbar.css";
import { IconContext } from 'react-icons';
import rick from "../images/Rick-Ico.png";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useStateValue} from "../StateProvide";
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import{useHistory}from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
const history=useHistory();
  const showSidebar = () => setSidebar(!sidebar);
  const [{basket,user},dispatch]=useStateValue();

const handleAuth=()=>{
  if(user){
    auth.signOut();
    dispatch({
      type: actionTypes.EMPTY_BASKET,
      basket:[],
    });
    dispatch({
      type: actionTypes.SET_USER,
      user:null,
    });
    history.push("/");
  }
}
  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>
      
        <div className='navbar'>
        <Link to="/" className='logo'>
            <img src={rick} alt="rick" />
          </Link>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Typography variant='h5' color='white'>Hola {user ? user.email : "Invitado"}</Typography>
         <Link to='/signin'>
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleAuth}>
           {user ? "Cerrar Sesion" : "Iniciar Sesion" }
           </button>
         </Link>
          
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
