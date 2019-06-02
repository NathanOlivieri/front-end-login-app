import React from 'react'
import styled from 'styled-components'
import InputCard from '../HomePage/InputCard'
import Button from '../Molecules/Button'
import Input from '../Molecules/Input'

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
    .error--msg {
        color: rgb(238, 50, 50);
        font-weight: 600;
    }
    .formFooter {
        display: flex;
        align-items: center;
        @media only screen and (max-width:426px) {
            width: 90vw;
        }
    }
`;

export default function Form(props) {
    return (
        <StyledForm onSubmit={props.onSubmit}>
            <InputCard />
            <div className="formFooter">
                <Input clearAttempts={ props.clearAttempts } type='checkbox' name="remember" requiredFlag={ false } label="Remember Me" />
                <span className="pwForgotlink">Forgot Password?</span>
            </div>
            {
                    props.attemptedLogin ? <p className="error--msg">*Remember Me is required to view posts</p> : null
            }
            <Button primary msg={props.shouldRemember ? "See Posts" : "Login"} />
        </StyledForm>
    )
}
