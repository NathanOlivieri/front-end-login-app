import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background: rgb(238, 50, 50);
    padding: 0.1em 1em;
    color: #fafafa;
    font-family: 'roboto';
    font-style: italic
    margin: 3em 0;
`;

export default function Logo(props) {
    return (
        <Header>
            <h1>{ props.msg }</h1>
        </Header>
    )
}
