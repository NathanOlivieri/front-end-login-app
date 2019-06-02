import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
    position: fixed;
    top: 0;
    right: 2em;
    background: linear-gradient(136.62deg, #FDF0AA -7.98%, rgba(255, 255, 255, 0) 72.96%), #FFB74B;
    color: #32323c;
    transform: skewX(-15deg);
    padding: 1em;
    box-shadow: 0px 10px 10px #32323220;
    border: solid 1px #c0c0c0;
`;

export default function LoginBanner( props ) {
    return (
        <StyledBanner>
            <p>Logged In as:</p>
            <span>{ props.msg }</span>
        </StyledBanner>
    )
}
