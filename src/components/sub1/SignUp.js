import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        console.log(id);
        const user = {
            user : ({
                id : id,
                pw : password,
                name : username,
                phone : phone,
                mail : email,
            })
        }

        fetch('http://localhost:3001/sub1Control/insertUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    };

    return (
        <div className="signup-page">
            <div className="signup-content signup-content-signin">
                <div>
                    <h2>Sign Up</h2>
                    <form className="wrapper-box" role="form" onSubmit={handleRegister}>
                        <input
                            type="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="form-control form-control-id"
                            placeholder="ID"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-password"
                            placeholder="Password"
                            required
                        />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control form-control-username"
                            placeholder="Username"
                            required
                        />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control form-control-phone"
                            placeholder="Phone"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-email"
                            placeholder="Email"
                            required
                        />

                        <button type="submit" className="btn btn-submit btn-default pull-right">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
