import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type newPostFormData = {
    newPostText: string
}

const AddNewPostForm = (props: InjectedFormProps<newPostFormData>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'postText'} placeholder={'Write something...'} component={'textarea'}/>
        </div>
        <button>Add post</button>
    </form>
}

export const AddNewPostReduxForm = reduxForm<newPostFormData>({form: 'addPost'})(AddNewPostForm)