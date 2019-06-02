import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard';

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 2em;
    justify-content: center;
    h1 {
        color: #32323c;
        padding: 0 2em;
        margin: 1em 0;
        @media only screen and (max-width: 450px){
            padding: 0 0.5em;
        }
    }
`;

export default function PostsContainer( props ) {
    return (
        <StyledContainer>
            <h1>Trending this Week: Will the Toronto Raptors win the 2019 NBA Finals? (What the Players said)</h1> 
            {
                props.posts.map((item, index) => (
                    <UserCard key={ index } data={ item }/>
                ))
            }
        </StyledContainer>
    )
}
