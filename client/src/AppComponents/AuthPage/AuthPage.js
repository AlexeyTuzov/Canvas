import React, { useState } from 'react';
import s from './AuthPage.module.css';
import * as axios from 'axios';
import Toast from './Toast.js';

const AuthPage = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [submitProcess, setSubmitProcess] = useState(false);
    const [toastData, setToastData] = useState('');

    const popup = (data => {
        if (data.status) return <Toast {...data} />;
    });

    const SubmitClick = (type) => {

        setSubmitProcess(true);

        let payload = { email: emailInput, password: passwordInput };
        axios.post(`/api/auth/${type}`, payload)
            .then((res) => {
                localStorage.setItem('UserID', res.data.UserID);
                localStorage.setItem('token', res.data.token);
                console.log('RESPONSE:', localStorage);
            })
            .catch((err) => {
                let res = err.response;
                setToastData('');
                setToastData({
                    statusText: res.statusText,
                    status: res.status,
                    message: res.data.message || res.data
                });
            })
            .finally(() => {
                setSubmitProcess(false);
            });

        setEmailInput('');
        setPasswordInput('');
    };

    return (
        <>
            {popup(toastData)}
            <div className={s.AuthPage}>

                <div className={s.Head}>Authorise to continue work with service</div>
                <div>
                    <input
                        onChange={event => setEmailInput(event.target.value)}
                        className={s.Input}
                        value={emailInput}
                        placeholder='E-mail'>

                    </input>

                    <input
                        onChange={event => setPasswordInput(event.target.value)}
                        className={s.Input}
                        value={passwordInput}
                        placeholder='Password (6 letters min)'>

                    </input>
                </div>

                <div className={s.ButtonBox}>
                    <button
                        className={s.ButtonReg}
                        onClick={() => SubmitClick('register')}
                        disabled={submitProcess}>
                        Register
                </button>
                    <button className={s.ButtonSign}
                        onClick={() => SubmitClick('login')}
                        disabled={submitProcess}>
                        Sign in
                    </button>
                </div>
            </div>
        </>
    )
}

export default AuthPage;