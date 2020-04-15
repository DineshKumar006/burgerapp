import React ,{Component} from 'react';
import Order from '../Order/Order/Order';
// import axios from '../../axios';

import * as actions from '../../store/action/index'

import {connect} from 'react-redux'

import Spinner from '../UI/Spinner/Spinner'

class order extends Component{

    

    componentDidMount(){
        this.props.onFetchData(this.props.token,this.props.userId)
        
    }


    render(){
        
        let customerList=''
        if(this.props.loading){
            customerList=<Spinner></Spinner>
        }else{
            customerList=(
                <div>
                    {this.props.orders.map(order=>(
                  <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                        datetime={order.orderDateTime}
                        orderDetails={order.orderData}
                        token={this.props.token}
                        />
                 ))}    
                </div>

            )

            // if(this.props.errorState){

            //     customerListAuthorizeCheck=(
    
            //     <div>
            //         <h2>You are not authorize! permission denied!</h2>
            //     </div>
            //     )
            // }else{
            //     customerListAuthorizeCheck=(customerList)
            // }
    


        }

        

      

        return(
            <div>
               
                {customerList}

                {/* {customerListAuthorizeCheck} */}
            </div>
           
        )
    }
}


const mapStateTOProps=(state)=>{
return{

    orders:state.orders.orders,
    loading:state.orders.loading,
    // error:state.orders.error,
    // errorState:state.orders.errorState,
    token:state.auth.token,
    userId:state.auth.userid

}

}

const mapDispatchToProps=(dispatch)=>{

    return{

        onFetchData:(token,userId)=>dispatch(actions.fetchorder(token,userId))
    }
}



export default connect(mapStateTOProps,mapDispatchToProps)(order);