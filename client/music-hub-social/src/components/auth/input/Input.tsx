import React from 'react'


import './input.css'

const Input: React.FC = (props:any) => {
    return (
        <input className="input" onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default Input
