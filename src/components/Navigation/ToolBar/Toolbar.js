import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navitems from '../NavItems/Navitems';
import Sidebar from '../SideDrawer/SideBar/Sidebar';

const Toolbar=(props)=>(

<header className={classes.Toolbar}>
    {/* <div onClick={props.openMenu}>Menu</div> */}

    <Sidebar clicked={props.openMenu}/>
    {/*? <div >Burger Palace!</div> */}

    <div className={classes.Logo}>
        <Logo/>
        </div>
   
    <nav className={classes.DesktopOnly}>
        <Navitems isAuth={props.isAuth} isshowtotalorder={props.isshowtotalorder}></Navitems>  
    </nav>


</header>

)


export default Toolbar;