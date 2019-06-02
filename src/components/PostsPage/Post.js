import React from 'react'
import styled from 'styled-components'

const StyledPost = styled.div`
    min-width: 250px;
    width: 33vw
    margin: 2em;
    padding: 1em;
    box-shadow: 0px 10px 10px #32323220;
    border-radius: 5px;
    border: solid 1px #c0c0c0;
    font-family: 'roboto';
    background: #fafafa;
    //background: linear-gradient(136.62deg, #ffcc66 -7.98%, rgba(255, 255, 255, 0) 72.96%), #fff5e6;
    h2 {
        font-size: 1em;
        font-weight: 600;
        margin-top: 0.5em;
        color: #32323c;
    }
    span {
        border-bottom: solid 2px #c0c0c0;
        font-weight: 300;
        color: #32323c;
        font-size: 0.8em;
    }
    p {
        margin-top: 1em;
    }
    div {
        margin-bottom: 1em;
    }
`;

export default function Post( props ) {
    const date = props.date
    return (
        <StyledPost>
            <div>
                <span>POSTED: { date.getDay() }/{ date.getMonth() }/{ date.getFullYear() }</span>
                <h2>{ props.title.toUpperCase() }</h2>
            </div>
            <div>
                <span>COMMENT</span>
                <p>{ props.body }</p>
            </div>
        </StyledPost>
    )
}
