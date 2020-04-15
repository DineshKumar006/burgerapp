import React from 'react';
import classes from './Navitems.css'
import Navitem1 from './NavItem1/Navitem1';

const Navitems=(props)=>(
    <ul className={classes.Navitems}>
        <Navitem1 Link={"/"} >Home</Navitem1>

     {props.isshowtotalorder?<Navitem1  Link={"/totalorders"} >TotalOrder</Navitem1>:''}

        {console.log("NvItemAuth="+props.isAuth)}

       { !props.isAuth ? <Navitem1  Link={"/login"} >Authenticated</Navitem1>:
       
                <Navitem1  Link={"/logout"}>Logout</Navitem1>
                    }
    </ul>

);

export default Navitems;

