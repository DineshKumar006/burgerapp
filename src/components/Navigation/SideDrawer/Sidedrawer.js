import React from 'react';
import Logo from '../../Logo/Logo';
import Navitems from '../NavItems/Navitems';
import classes from './Sidedrawer.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../../UI/BackDrop/BackDrop'


const Sidedrawer=(props)=>{

let attachedClass=[classes.Sidedrawer,classes.Close];

if(props.open===true){

    attachedClass=[classes.Sidedrawer,classes.Open]

}

return(

<Aux>
    {/* <Backdrop  showOrder={true}/> */}
        <Backdrop  showOrder={props.open}   cancleOrder={props.closedSidebar}/>

    <div className={attachedClass.join(' ')}  onClick={props.closedSidebar}>
        <div className={classes.Logo}> 
        <Logo />
        </div>
        <nav>
        <Navitems isAuth={props.isAuth} isshowtotalorder={props.isshowtotalorder}></Navitems>

        </nav>

    </div>

 </Aux>

);

}

export default Sidedrawer;


