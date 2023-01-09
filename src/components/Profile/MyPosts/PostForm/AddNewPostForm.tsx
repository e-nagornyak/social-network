import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

export type newPostFormData = {
    newPostText: string
}
const maxLength30 = maxLengthCreator(30)
const AddNewPostForm = (props: InjectedFormProps<newPostFormData>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                validate={[required, maxLength30]}
                name={'newPostText'}
                placeholder={'Write something...'}
                component={Textarea}/>
        </div>
        <button>Add post</button>
    </form>
}

export const AddNewPostReduxForm = reduxForm<newPostFormData>({form: 'addPost'})(AddNewPostForm)