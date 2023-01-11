import React from 'react';
import {DialogsStateType, sendMessage} from "../../redux/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapStatePropsType = {
    dialogsPage: DialogsStateType
}
export type mapDispatchPropsType = {
    sendMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)