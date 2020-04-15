import React ,{Component}from 'react';
import Model from '../../components/UI/Model/Model'
import Aux from '../Aux'; 

const errorHandler=(Wrapper,axios)=>{
    return class extends Component{
        state={
            error:null
        }


        componentWillMount(){

           this.resInterceptors= axios.interceptors.response.use(null,error=>{
                this.setState({error:error})
            });

            this.reqInterceptors= axios.interceptors.request.use(req=>{
                this.setState({error:null})
            })
            

        }



        componentWillUnmount(){

            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }
        

        errorConformedHandler=()=>{
            this.setState({error:null})
        }
        render(){
            
            return (
    
                <Aux>
                    <Model showOrder={this.state.error} cancleOrder={this.errorConformedHandler}>
                        
                        Something went wrong
                        {this.state.error?this.state.error.message:null}
                        </Model>
                    <Wrapper {...this.props} />
                </Aux>
            
                   );
        }
       
    }
        



}

export default errorHandler;