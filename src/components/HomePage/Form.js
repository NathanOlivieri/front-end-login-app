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
    .pwForgotlink {
        font-family: 'roboto';
        font-weight: 600;
        color: #32323c;
    }
`;

const formFooter = {
    display: 'flex',
    alignItems: 'center'
}

export default function Form(props) {
    return (
        <StyledForm onSubmit={props.onSubmit}>
            <InputCard />
            <div style={ formFooter }>
                <Input type='checkbox' name="remember" requiredFlag={ false } label="Remember Me" />
                <span className="pwForgotlink">Forgot Password?</span>
            </div>
            <Button primary msg={props.shouldRemember ? "See Posts" : "Login"} />
        </StyledForm>
    )
}
