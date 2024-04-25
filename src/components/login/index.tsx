import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = () => {
    const login = (param: { username: string, password: string }) => {
        fetch(`${apiUrl}/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        login({username, password});
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id={"username"} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' id={"password"}></input>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}