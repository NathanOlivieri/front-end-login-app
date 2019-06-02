import Form from './Form'
import React from 'react'
import '../../styles/loginPage.scss'
import Logo from '../Molecules/Logo'

export default function LogInPage( props ) {
    return (
        <div className="loginPage">
            <Logo msg="Runner" />
            <section>
                <Form attemptedLogin={ props.attemptedLogin } shouldRemember={ props.shouldRemember } onSubmit={ props.onSubmit } clearAttempts={ props.clearAttempts }/>
            </section>
        </div>
    )
}
