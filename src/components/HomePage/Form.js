import React from 'react'

export default function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <input required type="email" name="emailInput" />
                <input required type="password" name="pwInput" />
            </div>                    
            <button>SUBMIT MEEEEEEE</button>
        </form>
    )
}
