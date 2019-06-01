import React from 'react'
import styled from 'styled-components'

const InputCont = styled.div`
    display: flex;
    border-top: solid 1px #c0c0c0;
    padding: ${props => props.checkbox ? "1.5em 0em" : "1.5em 2em"};
    width: 27.85em;
    color: #c0c0c0;
    font-weight: 600;
`;

const StyledInput = styled.input`
    border: none;
    font-size: 1em;
    margin: ${props => props.email ? "0 3.8em" : "0 2em"};
`;

const StyledDiv = styled.div`
    width: 10em;
    display: flex;
    align-items: center;
    label:before {
        content: "";
        display: inline-block;
        height: 15px;
        width: 15px;
        border: solid 2px rgb(238, 50, 50);  
        top: 3px;
        margin-right: 1em;
    }
    label:after {
        position: relative;
        content: "";
        display: inline-block;
        height: 6px;
        width: 9px;
        border-left: 2px rgb(238, 50, 50) solid;
        border-bottom: 2px rgb(238, 50, 50) solid;
        transform: rotate(-45deg);
        right: -4px;
        top: -30px;
    }
    input[type="checkbox"] + label::after {
        content: none;
    }
    input[type="checkbox"]:checked + label::after {
        content: "";
    }
`;

const HideDefault = styled.input`
    opacity: 0
`;


export default function Input(props) {
    let input = {}

    switch(props.type) {
        case 'checkbox':
            input = 
            <InputCont checkbox >
                <StyledDiv>
                    <HideDefault type="checkbox" id="checkbox_1" name="checkbox"/>
                    <label for="checkbox_1">Remember Me</label>
                </StyledDiv>
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
