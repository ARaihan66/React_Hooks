import React, { useState } from 'react'

const ControllForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })

    const { name, email, password } = formData;

    const hangleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={name} id="name" placeholder="Enter Your Name" onChange={hangleChange} /><br />
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={email} id="email" placeholder="Enter Your Email" onChange={hangleChange} /><br />
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' value={password} id="name" placeholder="Enter Your Password" onChange={hangleChange} /><br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default ControllForm
