import Form from './Form'
import React from 'react'
import '../../styles/loginPage.scss'
import Logo from './Logo'

export default function LogInPage( props ) {
    return (
        <div className="loginPage">
            <Logo msg="Runner" />
            <section>
                <Form shouldRemember={ props.shouldRemember } onSubmit={ props.onSubmit }/>
            </section>
        </div>
    )
}
