
import React from 'react'


import './input.css'



interface InputProps {

    setValue: Function;
    value: string;
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps | undefined> = ({ value, setValue, type, placeholder }: InputProps) => {
    return (
        <input className="input" onChange={(event) => setValue(event.target.value)}
            value={value}
            type={type}
            placeholder={placeholder} />
    );
};

export default Input
