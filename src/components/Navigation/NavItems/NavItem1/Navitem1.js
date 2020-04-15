import React from 'react';
import classes from'./Navitem1.css';
import {NavLink} from 'react-router-dom'


const Navitem1=(props)=>(
    
    <ul className={classes.Navitem1}>
       <li> 
       <NavLink  to={props.Link} exact activeClassName={classes.active}>
           
           {props.children}
       </NavLink>
        
        </li>
    </ul>
   
);

export default Navitem1;

