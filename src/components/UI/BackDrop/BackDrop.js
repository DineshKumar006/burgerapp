import React from 'react';
import Classes from './BackDrop.css'

const BackDrop=(props)=>(

    props.showOrder===true ?<div className={Classes.BackDrop} onClick={props.cancleOrder}></div>:null


);

export default BackDrop;