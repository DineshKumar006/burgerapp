import React  from 'react';
import classes from './Order.css'

const order=(props)=>{


    // console.log(props.price)
        let Fetchingredients=[]
        for(let ingredientsName in props.ingredients){
                Fetchingredients.push({
                    name:ingredientsName,
                    Igcount:props.ingredients[ingredientsName]
                })

        }
 
        const ingredientsOutput=Fetchingredients.map(ig=>{
            return <span className={classes.SpanData}  key={ig.name}>  {ig.name} ({ig.Igcount})  </span>
        })

        let CustomerDetails=[]

        for(let ele in props.orderDetails){
            CustomerDetails.push({
                title:ele,
                titleData:props.orderDetails[ele]
            })
        }
        
        let FetchCustomerDetails=CustomerDetails.map(ele=>{
                    return <span key={ele.title} className={classes.CustomerDetails}>
                                 {ele.title}: {ele.titleData} ,
                        </span>
        })
              
        let items=null
        if(props.token){
            items=(
               <div>
                <h3>Ingredients: {ingredientsOutput}</h3>
                <h4>
                     Price: {Number.parseFloat(props.price).toFixed(2) },
                     Order(dateAndtime): {props.datetime}
                </h4>
               <h4>
                   OrderDetails:{FetchCustomerDetails}
               </h4>
               </div>

            )
        }else{
            items="Login to get items"
        }
        
        return(
             
            <div className={classes.Order}>

            

                {items}

            {/* 
                 <h3>Ingredients: {ingredientsOutput}</h3>
                 <h4>
                      Price: {Number.parseFloat(props.price).toFixed(2) },
                      Order(dateAndtime): {props.datetime}
                 </h4>
                <h4>
                    OrderDetails:{FetchCustomerDetails}
                </h4> */}

            </div>
        )
    }


export default order;