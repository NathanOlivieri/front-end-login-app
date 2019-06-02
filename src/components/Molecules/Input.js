import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'

const InputCont = styled.div`
    background: ${ props => props.checkbox ? "none" : "#fff" };
    display: flex;
    border-top: ${ props => props.checkbox ? "none" : props.search ? "none" : "solid 1px #c0c0c0" };
    ${ props => props.search ? 
        "border: solid 1px #e6e6e6; border-radius: 5px; box-shadow: 0px 10px 10px #32323220;" 
        : null 
    }
    padding: ${props => props.checkbox ? "1.5em 0em" : "1.5em 2em"};
    width: 27.85em;
    color: ${props => props.checkbox ? "#32323c" : "#c0c0c0"};
    font-weight: 600;
    align-items: center;
    @media only screen and (max-width: 426px) {
        width: 250px;
    }
`;

const StyledInput = styled.input`
    border: none;
    font-size: 1em;
    margin: ${props => props.email ? "0 3.8em" : "0 2em"};
    @media only screen and (max-width: 426px) {
        width: 100%;
        margin: 0;
    }
`;

export default function Input(props) {
    let input = {}
    switch(props.type) {
        case 'checkbox':
            input = 
            <InputCont checkbox >
                <Checkbox sort={ props.sort } handleChange={ props.sort ? props.toggleSort : props.clearAttempts } label={ props.label }/>
            </InputCont>
            break;
        
        case 'text' :
            input =
            <InputCont search>
                <label>{ props.label }
                    <StyledInput onChange={ props.onChange } type={ props.type } placeholder={ props.placeholder } name={ props.name }/>
                </label>
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
