import React ,{Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import Sidedrawer from '../../components/Navigation/SideDrawer/Sidedrawer';

import {connect} from 'react-redux'

class Layout extends Component{

     state={
         showSideBar:false
     }

 sideBarHandler=()=>{
     this.setState({showSideBar:false})
 }    
    
 menuHandler=()=>{
    //  this.setState({showSideBar:true})
    // this.setState({showSideBar:!this.state.showSideBar})
this.setState((prevState)=>{

    return {showSideBar: !prevState.showSideBar}
})
 }
 
render(){
    return(
        <Aux>
        <Toolbar isAuth={this.props.isAuthenticated} openMenu={this.menuHandler}
         isshowtotalorder={this.props.isshowtotalorder} ></Toolbar>
        <Sidedrawer isAuth={this.props.isAuthenticated} isshowtotalorder={this.props.isshowtotalorder}
        open={this.state.showSideBar} closedSidebar={this.sideBarHandler}></Sidedrawer>
        <main className={classes.ChildContent}>
            {this.props.children}
        </main>

    </Aux>


    )
}

}

const mapStateToProps=(state)=>{
    return{
        isAuthenticated:state.auth.token != null
    }
}

export default connect(mapStateToProps)(Layout);