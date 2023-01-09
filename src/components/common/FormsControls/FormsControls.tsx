import React from "react";
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.submitFailed && meta.error
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}