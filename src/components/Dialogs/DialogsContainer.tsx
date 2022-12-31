import {DialogsStateType, sendMessageAC, updateMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type MapStatePropsType = {
    dialogsPage: DialogsStateType
    isAuth: boolean
}

export type mapDispatchPropsType = {
    onMessageChange: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        onMessageChange: (text: string) => dispatch(updateMessageTextAC(text)),
        sendMessage: () => dispatch(sendMessageAC())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);