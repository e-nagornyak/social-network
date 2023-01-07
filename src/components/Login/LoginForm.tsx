import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'login'} placeholder={'login'} component={'input'}/>
        </div>
        <div>
            <Field name={'password'} placeholder={'password'} component={'input'}/>
        </div>
        <div>
            <Field name={'rememberMe'} type='checkbox' component={'input'}/> remember me
        </div>
        <button>Login</button>
    </form>
}

export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)