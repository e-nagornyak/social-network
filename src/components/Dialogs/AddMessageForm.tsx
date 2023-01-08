import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import React from "react";

export type newMessageFormData = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<newMessageFormData>) => {
    return (
        <form className={s.send_wrapper} onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'newMessageBody'}
                placeholder={'Enter your message'}
            >
            </Field>
            <button>Send</button>
        </form>
    );
};

export const AddMessageReduxForm = reduxForm<newMessageFormData>({form: 'dialogAddMessage'})(AddMessageForm)
