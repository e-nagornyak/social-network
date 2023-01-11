import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: mapDispatchToProps) => {

    const onSubmit = (formData: LoginFormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {login})(Login)
