import React, { useRef } from 'react'

const UncontrollForm = () => {
    const userName = useRef();
    const userEmail = useRef();
    const userPassword = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: userName.current.value,
            email: userEmail.current.value,
            password: userPassword.current.value
        }
        console.log(user)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' ref={userName} placeholder='Enter Your Name' /><br />
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' ref={userEmail} placeholder='Enter Your Email' /><br />
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' ref={userPassword} placeholder='Enter Your Password' /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UncontrollForm
