import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import React from "react";

export type addMessageFormDataType = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<addMessageFormDataType>) => {
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

export const AddMessageReduxForm = reduxForm<addMessageFormDataType>({form: 'dialogAddMessage'})(AddMessageForm)
