import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
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

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)