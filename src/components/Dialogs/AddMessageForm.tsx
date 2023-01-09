import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

export type newMessageFormData = {
    newMessageBody: string
}
const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props: InjectedFormProps<newMessageFormData>) => {
    return (
        <form className={s.send_wrapper} onSubmit={props.handleSubmit}>
            <Field
                validate={[required, maxLength100]}
                component={Textarea}
                name={'newMessageBody'}
                placeholder={'Enter your message'}
            >
            </Field>
            <button>Send</button>
        </form>
    );
};

export const AddMessageReduxForm = reduxForm<newMessageFormData>({form: 'dialogAddMessage'})(AddMessageForm)
