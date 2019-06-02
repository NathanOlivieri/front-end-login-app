import React from 'react'
import styled from 'styled-components'
import Input from '../Molecules/Input'

const Card = styled.div`
    border: solid 1px #c0c0c0;
    border-radius: 5px;
    box-shadow: 0px 10px 10px #32323220;
`;

export default function InputCard() {
    return (
        <Card>
            <Input label="Email" placeholder="Example@email.com" type="email" name="emailInput" emailFlag={ true } />
            <Input label="Password" placeholder="Your Password" type="password" name="pwInput" emailFlag={ false }/>
        </Card>
    )
}

