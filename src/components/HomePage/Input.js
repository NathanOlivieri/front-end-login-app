import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'

const InputCont = styled.div`
    display: flex;
    border-top: ${props => props.checkbox ? "none" : "solid 1px #c0c0c0"};
    padding: ${props => props.checkbox ? "1.5em 0em" : "1.5em 2em"};
    width: 27.85em;
    color: ${props => props.checkbox ? "#32323c" : "#c0c0c0"};
    font-weight: 600;
    align-items: center;
`;

const StyledInput = styled.input`
    border: none;
    font-size: 1em;
    margin: ${props => props.email ? "0 3.8em" : "0 2em"};
`;

export default function Input(props) {
    let input = {}

    switch(props.type) {

        case 'checkbox':
            input = 
            <InputCont checkbox >
                <Checkbox label="Remember Me"/>
            </InputCont>
            break;
            
        default:
            input = 
            <InputCont>
                <label>{ props.label }
                    <StyledInput email={ props.emailFlag || false } 
                        placeholder={ props.placeholder } 
                        required={ props.requiredFlag || true } 
                        type={ props.type } 
                        name={ props.name } />
                </label>
            </InputCont>
            break;
    }
    return (
        <>
        { input }
        </>
    )
}
