import React from 'react';

import classes from './input.css'

const input=(props)=>{
        let inputElement=null;
    let classNameElement=[classes.Input]



    if(props.invalid || props.touched ){
        classNameElement.push(classes.Invalid)
    }
        switch(props.ElementType){

            case ( 'input' ):inputElement=<input 
                                     className={classNameElement.join(' ') } 
                                     {...props.ElementConfig} 
                                     value={props.value}
                                     onChange={props.changed}
                                     />
            break;
            case ( 'select' ):inputElement=<select
                                    
                                 className={classNameElement.join(' ')  }
                                  {...props.ElementConfig}
                                   value={props.value}
                                    onChange={props.changed}>
                                       {props.ElementConfig.options.map(option=>(
                                           <option key={option.value} value={option.value}>
                                                {option.displayValue}

                                           </option>
                                       ))}
                                   </select>
            break;
            default: 
            <input 
                      className={classNameElement.join(' ') } 
                                     {...props.ElementConfig} 
                                     value={props.value}
                                     onChange={props.changed}
                                     />
        }


    return(
        <div className={classes.Input2} >
            <label className={classes.Label }>{props.label}</label>
                        {inputElement}
        </div>

    );
}


export default input;