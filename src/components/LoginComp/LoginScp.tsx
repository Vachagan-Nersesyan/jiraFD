import React, { useEffect, useState } from 'react'
import styles from './LoginStl.module.css'


import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const API_KEY = 'AIzaSyBG4nwtLrLYhqp_1ZV8Xqfe-f3lxNcIRdU'

const LoginScp: React.FC<OwnProps> = () => {
    const [user, setUser] = useState<any>([]);
    const [profile, setProfile] = useState<any>([]);
    const [showUserItems, setShowUserItems] = useState<boolean>(false);


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        setShowUserItems(true)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {showUserItems ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
    );
}


export default LoginScp

type OwnProps = {}