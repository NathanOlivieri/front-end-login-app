import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 10em;
    display: flex;
    align-items: center;
    span {
        padding-bottom: 5px;
    }
    label {
        height: 2em;
    }
    label:before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border: solid 2px rgb(238, 50, 50);  
        top: 3px;
        margin: 0 1em 0 0;
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
        right: ${props => props.sort ? "-2px":"135px"};
        top: ${props => props.sort ? "-26px":"-5px"};
    }
    input[type="checkbox"] + label::after {
        content: none;
    }
    input[type="checkbox"]:checked + label::after {
        content: "";
    }
    input[type="checkbox"]:focus + label::before {
        outline: rgb(59, 153, 252) auto 5px;
    }
`;

const HideDefault = styled.input`
    opacity: 0;
    height: 0;
    width: 0;
`;


export default function Checkbox( props ) {
    return (
        <StyledDiv sort={ props.sort || false }>
            <HideDefault onClick={ props.handleChange } type="checkbox" id="checkbox_1" name="checkbox"/>
            <label htmlFor="checkbox_1"><span>{ props.label }</span></label>
        </StyledDiv>
    )
}
