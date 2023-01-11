import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type mapStateToProps = {
    isAuth: boolean
}

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean

}
const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)
