import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required]} name={'login'} placeholder={'login'} component={Input}/>
        </div>
        <div>
            <Field validate={[required]} name={'password'} placeholder={'password'} component={Input}/>
        </div>
        <div>
            <Field name={'rememberMe'} type='checkbox' component={Input}/> remember me
        </div>
        <button>Login</button>
    </form>
}

export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)