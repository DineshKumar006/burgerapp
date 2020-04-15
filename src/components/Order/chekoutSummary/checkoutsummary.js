import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './checkoutsummary.css'
const checkoutsummery=(props)=>{
    

    return(

        <div className={classes.CheckoutSummery}>
            <h1>It's Tasty!, Hope you Enjoyed</h1>
            
            <div style={{margin:"auto"}}>
        <Burger ingredients={props.ingredients}/> 


        </div>
        
        <Button btnType="Success" clicked={props.orderContinue}>Continue</Button>

        <Button btnType="Danger" clicked={props.orderCancle}>Cancel</Button>

          {/* <button onClick={props.confirm}>Confim</button> */}

        </div>


    )
}

export default checkoutsummery;