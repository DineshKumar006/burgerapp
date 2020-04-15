import React,{Component} from 'react';

import classes from './Model.css';
import Aux from '../../../hoc/Aux/Aux';
import BackDrop from '../BackDrop/BackDrop';


class Model extends Component{


    // componentDidUpdate(nextProp,nextState){
    //     return (nextProp.showOrder!==this.props.showOrder) || (nextProp.children !== this.props.children);
    // }

render(){

    return(

        <Aux>
          <BackDrop showOrder={this.props.showOrder} cancleOrder={this.props.cancleOrder}></BackDrop>

        <div className={classes.Model} 
        style={{transform:this.props.showOrder===true?'translateY(0)': 'translateY(-150vh)',
                                backgroundColor:'white'}}>
        
         {this.props.children}
        
            </div>
        </Aux>

    )
}

}



export default Model;