import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}: any) => {
    const hasError = meta.submitFailed && meta.error
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}