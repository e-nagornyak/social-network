import {DialogsStateType, sendMessageAC, updateMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: DialogsStateType
}
export type DialogsPropsType = MapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchPropsType = {
    onMessageChange: (text: string) => void
    sendMessage: () => void

}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        onMessageChange: (text: string) => {
            dispatch(updateMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);