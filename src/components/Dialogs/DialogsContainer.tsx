import React from 'react';
import {sendMessageAC, updateMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onMessageChange: (text: string) => {
            dispatch(updateMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);