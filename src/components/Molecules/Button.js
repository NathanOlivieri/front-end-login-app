import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${props => props.primary ? "rgb(238, 50, 50)" : "white"};
    color: ${props => props.primary ? "white" : "rgb(238, 50, 50)"};
    font-size: 1.2em;
    font-family: 'roboto';
    margin: 1em 5em;
    padding: 1em;
    border: none;
    border-radius: 10px;
    width: 355px
    @media only screen and (max-width: 450px) {
        width: 250px;
        margin: 1em 0.5em;
    }
`;

export default function Button(props) {
    return (
        <StyledButton primary>{ props.msg }</StyledButton>
    )
}
