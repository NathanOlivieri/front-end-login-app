import React from 'react'
import styled from 'styled-components'
import InputCard from '../HomePage/InputCard'
import Button from '../HomePage/Button'
import Input from '../HomePage/Input'

const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    margin-bottom: 10em;
    align-items: center;
`;

export default function Form(props) {
    return (
        <StyledForm onSubmit={props.onSubmit}>
            <InputCard />
            <div>
                <Input type='checkbox' name="remember" requiredFlag={ false } label="Remember Me" />
                <span>Forgot Password?</span>
            </div>
            <Button primary msg={props.shouldRemember ? "See Posts" : "Login"} />
        </StyledForm>
    )
}
