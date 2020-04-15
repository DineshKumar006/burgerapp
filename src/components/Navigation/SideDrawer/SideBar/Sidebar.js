import React from 'react';
import classes from './Sidebar.css'

const SideBar=(props)=>(

    // <div onClick={props.clicked}>Menu</div>

    <div onClick={props.clicked} className={classes.Sidebar}>

        <div></div>
        <div></div>
        <div></div>

    </div>

);


export default SideBar;