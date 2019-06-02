import React from 'react'
import styled from 'styled-components'
import Post from '../PostsPage/Post'

const StyledUserCard = styled.div`
    padding: 2em;
    width: 80vw;
    border: solid 1px #c0c0c0;
    margin: 2em 0;
    background: linear-gradient(123.99deg, #FFFFFF -8.51%, rgba(255, 255, 255, 0) 99%), #e6e6e6;
    .userCard--header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 0 1em 0;
        border-bottom: solid 3px rgb(238, 50, 50);
        width: 33vw;
    }
    .userCard--posts {
        display: Flex;
        overflow-x: auto;
    }
    img {
        height: 50px;
        width: 50px;
        border-radius: 50px;
    }
    h4 {
        font-weight: 400;
        font-size: 1.3em;
        margin 0 1em;
    }
    h3 {
        margin: 2em 0 0 0;
        font-size: 1em;
        color: #c0c0c0;
        font-weight: 700;
    }
`;

export default function UserCard( props ) {
    const data = props.data
    return (
        <StyledUserCard>
            <div className="userCard--header">
                <img src={ props.data[0].imageUrl } alt="profile"/> 
                <h4>{ props.data[0].userName }</h4>
            </div>
            <h3>Posts from the Web:</h3>
            <div className="userCard--posts">
            {
                data.map((item, index) => (
                    <Post key={ index } date={ item.date } title={ item.title } body={ item.body }/>
                ))
            }  
            </div>
        </StyledUserCard>
    )
}
