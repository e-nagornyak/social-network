import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {

}

const PostForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'postText'} placeholder={'Write something...'} component={'input'}/>
        </div>
        <button>Add post</button>
    </form>
}

export const PostReduxForm = reduxForm<FormDataType>({form: 'post'})(PostForm)