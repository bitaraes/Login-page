import React from 'react'
import './style.css'

export default function InputTexto(props){
    return(
        <div className="form-item">
            <input type={props.type} name={props.name} className="txt-login" placeholder={props.placeholder}></input>
        </div>
    )
}