import React, { useState } from 'react';

const User = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
    <div className='App'>
        <form onSubmit={() => {}}>
            <div>
                <label htmlFor=''>First Name: </label>
                <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </div>
            {firstname.length < 2 && firstname.length > 0 ? <p>First name must be at least 2 characters</p> : null }

            <div>
                <label htmlFor=''>Last Name: </label>
                <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </div>
            {lastname.length < 2 && lastname.length > 0 ? <p>Last name must be at least 2 characters</p> : null}

            <div>
                <label htmlFor=''>Email: </label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {email.length < 5 && email.length > 0 ? <p>Email must be at least 5 characters</p> : null}

            <div >
                <label htmlFor=''>Password: </label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {password.length < 8 && password.length > 0 ? <p>Password must be 8 characters</p> : null}

            <div>
                <label htmlFor=''>Confirm Password: </label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {confirmPassword !== password ? <p>Passwords must match</p> : null} 
            <input type="submit" value="Create User" />
        </form>

        <div>
            <h3 style={{textAlign: 'center'}}>Your Form Data</h3>
            <p>
                <label>First Name: </label>{firstname}
            </p>
            <p>
                <label>Last Name: </label>{lastname}
            </p>
            <p>
                <label>Email: </label>{email}
            </p>
            <p>
                <label>Password: </label>{password}
            </p>
            <p>
                <label>Confirm Password: </label>{confirmPassword}
            </p>
        </div>
    </div>
    )
}

export default User;