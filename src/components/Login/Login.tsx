import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";
import s from './Login.module.css'
export const Login = () => {

    const onSubmit = (formData: LoginFormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

