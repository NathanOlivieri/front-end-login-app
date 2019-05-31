import Form from './Form'
import React from 'react'

export default function LogInPage( props ) {
    return (
        <div>
            <Form onSubmit={ props.onSubmit }/>
        </div>
    )
}
