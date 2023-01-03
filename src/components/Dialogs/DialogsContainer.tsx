import {DialogsStateType, sendMessageAC, updateMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapStatePropsType = {
    dialogsPage: DialogsStateType
}

export type mapDispatchPropsType = {
    onMessageChange: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        onMessageChange: (text: string) => dispatch(updateMessageTextAC(text)),
        sendMessage: () => dispatch(sendMessageAC())
    }
}
const AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);